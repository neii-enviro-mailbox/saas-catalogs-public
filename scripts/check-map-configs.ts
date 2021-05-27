import core from "@actions/core";
import mapConfigs from "../map-configs.json";
import { readFile } from "./util";

(async () => {
  // We will aprove the PR if it only makes changes to dev map-configs
  let approvePr = true;

  await Promise.all(
    ["dev", "test", "prod"].map(async (envTag) => {
      // Get changed files from env variables - these are used to push to magda (if they match with a map-config in `./map-configs.json`)
      const addedFiles = (process.env.ADDED_FILES ?? "").split(",") ?? [];
      const modifiedFiles = (process.env.MODIFIED_FILES ?? "").split(",") ?? [];

      const changedFiles = [...addedFiles, ...modifiedFiles];

      console.log("Files changed:");
      console.log(changedFiles);

      for (let i = 0; i < mapConfigs.length; i++) {
        const mapConfig = mapConfigs[i];

        const mapConfigFile = mapConfig[envTag];
        const mapConfigId = mapConfig.id;

        // Has a map-config file changed for the currentMapConfig?
        if (changedFiles.includes(mapConfigFile)) {
          if (envTag === "test" || envTag === "prod") {
            approvePr = false;
          }
          try {
            (await readFile(mapConfigFile)).toString();
          } catch (error) {
            console.log(error);
            core.setFailed(error.message);
            return;
          }

          console.log(
            `Will update \`${mapConfigId}\` from path \`${mapConfigFile}\` (**${envTag}** environment)`
          );
        }
      }
    })
  );

  console.log(approvePr ? "APPROVE" : "DENIED");
})();
