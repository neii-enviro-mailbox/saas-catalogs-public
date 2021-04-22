# saas-catalogs

Catalogs for SaaS (until we come up with something better)

**Catalog JSON files are hosted here (in GitHub)** for example `https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/kaleidoscope/prod.json`

**Map-config JSON files are hosted as Magda records** - these will need to be update manually (for the moment)

## Format

Each map has a directory. The directory name should map to it's `map-config` ID stored in Magda (eg `pacificmap` folder maps to `map-config-pacificmap`).

The structure should follow:

- an `in` folder for old v7/v8 catalogs
- an `map-config` folder
- `map-config/dev.json` - dev map-config
- `map-config/test.json` - test map-config
- `map-config/prod.json` - prod map-config
- `dev.json` - dev catalog
- `test.json` - test catalog
- `prod.json` - prod catalog

A map may have a few levels of catalogs - for example `de-australia`:

`de-australia/`

- ...
- `terria-cube/`
  - `in/`
  - `dev.json`
  - `test.json`
  - `prod.json`

### Random notes

#### `group-DISABLED` or similar properties in `map-config`

These are just holding the old `group` aspect - which contains IDs to Magda records. They are remnants of older maps which used catalog-editor - I left them here if they ever need to be resurrected.
