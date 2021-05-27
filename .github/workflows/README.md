# GitHub Actions

## `publish-(dev | test | prod)`

There are three pieces:

- The `map-configs.json` file [./map-configs.json](https://github.com/TerriaJS/saas-catalogs-public/blob/main/map-configs.json)
- The workflow: [.github/workflows/publish-dev.yml](https://github.com/TerriaJS/saas-catalogs-public/blob/main/.github/workflows/publish-dev.yml)
- The JavaScript file: [./index.js](https://github.com/TerriaJS/saas-catalogs-public/blob/main/index.js)

### The `map-configs.json` file

This defines mapping between Magda record ID and map-config files - for example:

```json
[
  {
    "id": "map-config-de-australia",
    "dev": "de-australia/map-config/dev.json",
    "test": "de-australia/map-config/test.json",
    "prod": "de-australia/map-config/prod.json"
  }
]
```

In `dev` will publish `de-australia/map-config/dev.json` to record ID `map-config-de-australia`.

### Workflow

1. Uses `jitterbit/get-changed-files@v1` action to create a list of files which have changed in the current commit
2. Checks out this repo
3. `yarn install` for JS script
4. Runs JS script - `node index.js` + and adds env vars from secrets

#### Workflow env vars

Different values for dev, test or prod environments

- `ENVIRONMENT_TAG`: `dev`, `test` or `prod`
- `MAGDA_FQDN`: Github secret `DEV_MAGDA_FQDN`, `TEST_MAGDA_FQDN` or `PROD_MAGDA_FQDN`
- `MAGDA_API_ID`: Github secret `DEV_MAGDA_API_ID`, `TEST_MAGDA_API_ID` or `PROD_MAGDA_API_ID`
- `MAGDA_API_KEY`: Github secret `DEV_MAGDA_API_KEY`, `TEST_MAGDA_API_KEY` or `PROD_MAGDA_API_KEY`

**Note** Magda API key/id is for `terriamaps@gmail.com` Google account

### JavaScript file

1. Looks at which files have changed in a commit to `main` branch
2. Matches them with map-config from `map-configs.json`
3. Publish records to Magda
