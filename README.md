# saas-catalogs

Catalogs for SaaS (until we come up with something better)

**Map-config JSON files are pushed to Magda from `main` branch** - See [GitHub actions README.md](https://github.com/TerriaJS/saas-catalogs-public/tree/main/.github/workflows) for more info.

To update `map-config` files you must create a PR:

- Pushes to `dev` will be automatically approved
- Pushes to `test` and `prod` must be approved by someone

**Catalog JSON files are hosted here (in GitHub)** for example `https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/kaleidoscope/prod.json`

## Scripts

### `node diff-maps.js`

Will show JSON-diff for `map-config` files between `dev -> test` and `test -> prod`.

Example output:

```bash
CHECKING MAP CONFIG map-config-nationalmap

DIFF DEV -> TEST: map-config-nationalmap
____________________________________________________________________________________________________

 {
   aspects: {
     terria-config: {
       initializationUrls: [
-        "https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/nationalmap/dev.json"
+        "https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/nationalmap/test.json"
       ]
     }
     group: {
       members: [
-        "1a122c9d-ca4c-4776-bce4-2e1bcacc1593"
-        "dga-portal"
       ]
     }
   }
 }

____________________________________________________________________________________________________
```

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

The data inside map-config should correspond to the following GET request:

`GET https://<magdaApiFQDN>/api/v0/registry/records/<magdaConfigRecordId>?optionalAspect=terria-group&optionalAspect=terria-init&optionalAspect=group&optionalAspect=terria&optionalAspect=terria-config-backup&optionalAspect=terria-config&optionalAspect=terria-saas-about-pages&optionalAspect=terria-saas`

#### `group-DISABLED` or similar properties in `map-config`

These are just holding the old `group` aspect - which contains IDs to Magda records. They are remnants of older maps which used catalog-editor - I left them here if they ever need to be resurrected.
