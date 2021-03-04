# saas-catalogs

Catalogs for SaaS (until we come up with something better)

## Format

Each map has a directory, in that directory there is:

- an `in` folder for old v7/v8 catalogs
- `dev-map-config.json` - dev map-config
- `test-map-config.json` - test map-config
- `prod-map-config.json` - prod map-config
- `dev.json` - dev catalog
- `test.json` - test catalog
- `prod.json` - prod catalog

A map may have a few levels of catalogs - for example `de-australia`:

`de-australia/`

- `in/`
  - `de-australia-v7-2020-02-26.json`
  - `de-australia-v8-2020-02-26.json`
- `dev.json`
- `test.json`
- `prod.json`
- `terria-cube/`
  - `in/`
    - `terria-cube-v7-2020-02-26.json`
    - `terria-cube-v8-2020-02-26.json`
  - `dev.json`
  - `test.json`
  - `prod.json`
