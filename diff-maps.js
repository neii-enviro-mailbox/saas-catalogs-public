const jsonDiff = require("json-diff");
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

(async () => {
  for (let i = 0; i < mapConfigs.length; i++) {
    const mapConfig = mapConfigs[i];
    const mapConfigFiles = await Promise.all(
      ["dev", "test", "prod"].map(async (envTag) => {
        const mapConfigFile = mapConfig[envTag];
        try {
          return JSON.parse((await readFile(mapConfigFile)).toString());
        } catch (error) {
          console.log(`FAILED to read file ${mapConfigFile}`);
          console.log(error);
          return;
        }
      })
    );

    const devToTest = jsonDiff.diff(mapConfigFiles[0], mapConfigFiles[1]);
    console.log(devToTest);
    if (devToTest && Object.keys(devToTest).length > 0) {
      console.log(`CHANGED map-config ${mapConfig.id}`);
    }
    console.log();
  }
})();
