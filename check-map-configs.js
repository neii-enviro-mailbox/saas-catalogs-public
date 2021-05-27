const core = require("@actions/core");
const { getOctokit, context } = require("@actions/github");
const mapConfigs = require("./map-configs.json");
const fsPromises = require("fs/promises");

async function readFile(path) {
  try {
    const file = await fsPromises.readFile(path, "utf8");
    return file;
  } catch (error) {
    throw `ERROR reading file ${path} with encoding utf8: ${error}`;
  }
}

// The follow function is adapted from https://github.com/juliangruber/approve-pull-request-action/blob/master/index.js (MIT License - Copyright Julian Gruber - https://github.com/juliangruber 2021)
async function createPrApprovalReview() {
  if (!process.env.GITHUB_TOKEN) throw "$GITHUB_TOKEN is not defined";
  const octokit = getOctokit(process.env.GITHUB_TOKEN);

  await octokit.rest.pulls.createReview({
    ...context.repo,
    pull_number: context.payload.pull_request.number,
    event: "APPROVE",
  });
}

(async () => {
  // We will aprove the PR if it only makes changes to dev map-configs
  let approvePr = true;

  const addedFiles = (process.env.ADDED_FILES ?? "").split(",") ?? [];
  const modifiedFiles = (process.env.MODIFIED_FILES ?? "").split(",") ?? [];

  const changedFiles = [...addedFiles, ...modifiedFiles];

  console.log("Files changed:");
  console.log(changedFiles);

  await Promise.all(
    ["dev", "test", "prod"].map(async (envTag) => {
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
            approvePr = false;
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

  if (approvePr) {
    await createPrApprovalReview();
    console.log("Approved PR");
  }
})();
