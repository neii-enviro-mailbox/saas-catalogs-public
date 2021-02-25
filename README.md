# saas-catalogs

Catalogs for SaaS (until we come up with something better)

## Format

Each map has a directory, in that directory there is:

- an `in` folder for old v7/v8 catalogs
- `dev.json`
- `test.json`
- `prod.json`

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
   
