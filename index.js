const core = require("@actions/core");
const github = require("@actions/github");
const fsPromises = require("fs/promises");

const mapConfigs = [
  { id: "map-config-de-australia", file: "de-australia/map-config/dev.json" },
];

async function readFile(path) {
  if (!(await fileExists(path))) {
    throw `ERROR JSON file does not exist at ${path}`;
  }
  try {
    const file = await fsPromises.readFile(path, "utf8");
    return file;
  } catch (error) {
    throw `ERROR reading file ${path} with encoding utf8: ${error}`;
  }
}

try {
  const addedFiles = (process.env.ADDED_FILES ?? "").split(",") ?? [];
  const modifiedFiles = (process.env.MODIFIED_FILES ?? "").split(",") ?? [];

  const changedFiles = [...addedFiles, ...modifiedFiles];

  console.log("Files changed:");
  console.log(changedFiles);

  for (let i = 0; i < mapConfigs.length; i++) {
    const mapConfig = mapConfigs[i];
    if (changedFiles.includes(mapConfig.file)) {
      const devJson = (await readFile(path)).toString();
      console.log(
        `Updating \`${mapConfig.id}\` from path \`${mapConfig.file}\` (in ${process.env.DEV_MAGDA_FQDN})`
      );
      await fetch(
        `https://${process.env.DEV_MAGDA_FQDN}/api/v0/registry-auth/records/${mapConfig.file}`,
        {
          headers: {
            "X-Magda-API-Key-Id": process.env.DEV_MAGDA_API_ID,
            "X-Magda-API-Key": process.env.DEV_MAGDA_API_KEY,
            "Content-Type": "application/json",
          },
          body: devJson,
          method: "PUT",
        }
      );
      console.log(`SUCCESSFULLY updated \`${mapConfig.id}\``);
    }
  }
} catch (error) {
  console.log(error);
  core.setFailed(error.message);
}
