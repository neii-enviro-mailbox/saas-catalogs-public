const jsonDiff = require("json-diff");
const mapConfigs = require("./map-configs.json");

const fsPromises = require("fs/promises");
const colors = require("colors");

async function readFile(path) {
  try {
    const file = await fsPromises.readFile(path, "utf8");
    return file;
  } catch (error) {
    throw `ERROR reading file ${path} with encoding utf8: ${error}`;
  }
}

function removeCommonChangedProps(obj) {
  if (obj?.aspects?.["terria-config"]?.initializationUrls) {
    delete obj.aspects["terria-config"].initializationUrls;
  }

  if (obj?.aspects?.["terria-config"]?.parameters?.globalDisclaimer__deleted) {
    delete obj.aspects["terria-config"].parameters.globalDisclaimer__deleted;
  }

  if (obj?.aspects?.["terria-config"]?.parameters?.googleAnalyticsKey__added) {
    delete obj.aspects["terria-config"].parameters.googleAnalyticsKey__added;
  }

  if (
    obj?.aspects?.["terria-config"]?.parameters &&
    Object.keys(obj.aspects["terria-config"].parameters).length === 0
  ) {
    delete obj.aspects["terria-config"];
  }

  if (
    obj?.aspects?.["terria-config"] &&
    Object.keys(obj.aspects["terria-config"]).length === 0
  ) {
    delete obj.aspects["terria-config"];
  }
  if (obj?.aspects && Object.keys(obj.aspects).length === 0) {
    delete obj.aspects;
  }
}

(async () => {
  console.log(`\n\n MAP CONFIG DIFF CHECKER\n\n`.bgWhite.yellow.bold);
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

    console.log(`CHECKING MAP CONFIG ${mapConfig.id}\n`);

    const devToTest = jsonDiff.diff(mapConfigFiles[0], mapConfigFiles[1]);
    removeCommonChangedProps(devToTest);
    if (devToTest && Object.keys(devToTest).length > 0) {
      console.log(`DIFF DEV -> TEST: ${mapConfig.id}`.blue.bold);
      console.log(
        "____________________________________________________________________________________________________\n"
      );
      console.log(
        jsonDiff.diffString(mapConfigFiles[0], mapConfigFiles[1], {
          color: true,
        })
      );
      console.log(
        "____________________________________________________________________________________________________\n"
      );
    }

    const testToProd = jsonDiff.diff(mapConfigFiles[1], mapConfigFiles[2]);
    removeCommonChangedProps(testToProd);
    if (testToProd && Object.keys(testToProd).length > 0) {
      console.log(`DIFF TEST -> PROD: ${mapConfig.id}`.magenta.bold);
      console.log(
        "____________________________________________________________________________________________________\n"
      );
      console.log(
        jsonDiff.diffString(mapConfigFiles[1], mapConfigFiles[2], {
          color: true,
        })
      );
      console.log(
        "____________________________________________________________________________________________________\n"
      );
    }
  }
})();
