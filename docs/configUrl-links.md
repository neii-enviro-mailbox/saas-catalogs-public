# `#configUrl` links

The `#configUrl` hash parameter can be used to load a map-config file.  
This means you can test all the maps locally (or in TerriaJS CI - eg http://ci.terria.io/next/).

For example - Digital Earth Australia production map-config:

- **CI link** http://ci.terria.io/next/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/de-australia/map-config/prod.json
- **Localhost link** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/de-australia/map-config/prod.json

## Limitations

Maps with MagdaReferences will not work.

These links will only add **client-side** configuration. Terriajs-server config will still be local - so you may need to add proxy settings etc... for maps to work correctly (or you can add `proxyAllDomains: true`)

## de-africa

- **Dev** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/de-africa/map-config/dev.json
- **Test** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/de-africa/map-config/test.json
- **Prod** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/de-africa/map-config/prod.json

## de-australia

- **Dev** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/de-australia/map-config/dev.json
- **Test** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/de-australia/map-config/test.json
- **Prod** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/de-australia/map-config/prod.json

## geo-rapp

- **Dev** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/geo-rapp/map-config/dev.json
- **Test** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/geo-rapp/map-config/test.json
- **Prod** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/geo-rapp/map-config/prod.json

## kaleidoscope

- **Dev** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/kaleidoscope/map-config/dev.json
- **Test** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/kaleidoscope/map-config/test.json
- **Prod** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/kaleidoscope/map-config/prod.json

## nationalmap

- Note: dev doesn't work as it has two Magda groups ~**Dev** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/nationalmap/map-config/dev.json~
- **Test** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/nationalmap/map-config/test.json
- **Prod** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/nationalmap/map-config/prod.json

## neii

- **Dev** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/neii/map-config/dev.json
- **Test** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/neii/map-config/test.json
- **Prod** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/neii/map-config/prod.json

## pacificmap

- **Dev** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/pacificmap/map-config/dev.json
- **Test** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/pacificmap/map-config/test.json
- **Prod** http://localhost:3001/#configUrl=https://raw.githubusercontent.com/TerriaJS/saas-catalogs-public/main/pacificmap/map-config/prod.json
