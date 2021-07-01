const jsonDiff = require("json-diff");
const mapConfigs = require("./map-configs.json");

const fsPromises = require("fs/promises");
require("colors");

async function readFile(path) {
  try {
    const file = await fsPromises.readFile(path, "utf8");
    return file;
  } catch (error) {
    throw `ERROR reading file ${path} with encoding utf8: ${error}`;
  }
}

/** This removes map-config properties which are almost always different between environments (eg initializationUrls).
 * As they would not be useful to see changes for
 */
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

async function diffFiles(fileNames, tag) {
  // Fetch all files
  const configFiles = await Promise.all(
    fileNames.map(async (fileName) => {
      try {
        return JSON.parse((await readFile(fileName)).toString());
      } catch (error) {
        console.log(`FAILED to read file ${fileName}`);
        console.log(error);
        return;
      }
    })
  );

  console.log(`CHECKING ${tag}\n`);

  // use jsonDiff.diff to check if changes have occurred - after removeCommonChangedProps()
  const devToTest = jsonDiff.diff(configFiles[0], configFiles[1]);
  removeCommonChangedProps(devToTest);
  if (devToTest && Object.keys(devToTest).length > 0) {
    console.log(`DIFF DEV -> TEST: ${tag}`.blue.bold);
    console.log(
      "____________________________________________________________________________________________________\n"
    );
    // use jsonDiff.diffString to prettify output
    console.log(
      jsonDiff.diffString(configFiles[0], configFiles[1], {
        color: true,
      })
    );
    console.log(
      "____________________________________________________________________________________________________\n"
    );
  }

  // use jsonDiff.diff to check if changes have occurred - after removeCommonChangedProps()
  const testToProd = jsonDiff.diff(configFiles[1], configFiles[2]);
  removeCommonChangedProps(testToProd);
  if (testToProd && Object.keys(testToProd).length > 0) {
    console.log(`DIFF TEST -> PROD: ${tag}`.magenta.bold);
    console.log(
      "____________________________________________________________________________________________________\n"
    );
    // use jsonDiff.diffString to prettify output
    console.log(
      jsonDiff.diffString(configFiles[1], configFiles[2], {
        color: true,
      })
    );
    console.log(
      "____________________________________________________________________________________________________\n"
    );
  }
}

(async () => {
  console.log(`\n\n MAP CONFIG DIFF CHECKER\n\n`.bgWhite.yellow.bold);

  console.log(`CHECKING MAP CONFIG FILES \n`.bgWhite.red.bold);

  /* Example map-config object
    {
      "id": "map-config-de-africa",
      "description": "DE Africa",
      "dev": "de-africa/map-config/dev.json",
      "test": "de-africa/map-config/test.json",
      "prod": "de-africa/map-config/prod.json",
      "files": [
        {
          "description": "Main catalog file",
          "dev": "de-africa/dev.json",
          "test": "de-africa/test.json",
          "prod": "de-africa/prod.json"
        }
      ]
    }
  */

  for (let i = 0; i < mapConfigs.length; i++) {
    const mapConfig = mapConfigs[i];
    // Get all `map-config` fileNames
    const fileNames = ["dev", "test", "prod"].map(
      (envTag) => mapConfig[envTag]
    );
    await diffFiles(fileNames, `${mapConfig.description} - map-config file`);
  }

  console.log(`CHECKING OTHER MAP FILES \n`.bgWhite.red.bold);

  for (let i = 0; i < mapConfigs.length; i++) {
    const mapConfig = mapConfigs[i];
    if (mapConfig.files) {
      // Get all filenames in `files` array
      for (let j = 0; j < mapConfig.files.length; j++) {
        const files = mapConfig.files[j];
        const fileNames = ["dev", "test", "prod"].map(
          (envTag) => files[envTag]
        );
        await diffFiles(
          fileNames,
          `${mapConfig.description} - ${files.description}`
        );
      }
    }
  }
})();
