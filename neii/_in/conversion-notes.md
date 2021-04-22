# NEII catalogs

Converted on 22/04/2021

I have renamed `get_viewer_config-v7-2021-04-20.json` to `nemsr/(dev | test | prod).json`

## Aggregated errors

```json
Unknown types: {
  "wfs": 2
}
Unknown properties: {
  "WebFeatureServiceCatalogGroup": {
    "typeNames": 1
  },
  "WebMapServiceCatalogItem": {
    "abstract": 14,
    "dataUrlType": 2,
    "dataUrl": 14
  },
  "CatalogGroup": {
    "custodian": 1,
    "preserveOrder": 57
  },
  "EsriMapServerCatalogItem": {
    "metadataUrl": 10
  }
}
```

### NEII-aii

```
Succeeded with 1 errors and 7 warnings
Error: Unknown or unsupported type "wfs"
  in North Australia Automated Marine Weather And Oceanographic Stations (AIMS)
     Air (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Rainfall
     Grids
     Australian Climate (BoM)
     Air (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Temperature
     Grids
     Australian Climate (BoM)
     Air (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Solar
     Grids
     Australian Climate (BoM)
     Air (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Grids
     Australian Climate (BoM)
     Air (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Sites and Stations
     Australian Climate (BoM)
     Air (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Boundaries
     Australian Climate (BoM)
     Air (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Australian Climate (BoM)
     Air (3)
     NEII Data Services – Conformant
     catalog

Error stats:
{
  "unknownProps": 0,
  "missingRequiredProps": 0,
  "unknownTypes": 1,
  "inputNotPlainObjects": 0
}
Warning stats:
{
  "unknownProps": 7,
  "missingRequiredProps": 0,
  "unknownTypes": 0,
  "inputNotPlainObjects": 0
}
Unknown types: {
  "wfs": 1
}
Unknown properties: {
  "CatalogGroup": {
    "preserveOrder": 7
  }
}
```

### biota

```
Succeeded with 0 errors and 16 warnings
Warning: Unknown property "preserveOrder" was encountered
  in National Vegetation Information System (DoAWE)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "dataUrl" was encountered
  in Grey Reef shark (Carcharhinus amblyrhynchos)
     Fish abundance (eAtlas)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "dataUrl" was encountered
  in Red Emperor (Lutjanus sebae) abundance
     Fish abundance (eAtlas)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "dataUrl" was encountered
  in Large-mouth nannygai (Lutjanus malabaricus) abundance
     Fish abundance (eAtlas)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "dataUrl" was encountered
  in Small-mouth nannygai (Lutjanus erythropterus) abundance
     Fish abundance (eAtlas)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "dataUrl" was encountered
  in Venus Tuskfish (Choerodon venustus) abundance
     Fish abundance (eAtlas)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "dataUrl" was encountered
  in Coral Trout (Plectropomus leopardus) abundance
     Fish abundance (eAtlas)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "dataUrl" was encountered
  in Red-throat Emperor (Lethrinus miniatus) abundance
     Fish abundance (eAtlas)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "dataUrl" was encountered
  in Collared Sea Bream (Gymnocranius audleyi) abundance
     Fish abundance (eAtlas)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "dataUrl" was encountered
  in Starry Triggerfish (Abalistes stellatus) abundance
     Fish abundance (eAtlas)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "dataUrl" was encountered
  in By catch abundance
     Fish abundance (eAtlas)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "dataUrl" was encountered
  in Total abundance
     Fish abundance (eAtlas)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "dataUrl" was encountered
  in Species Richness
     Fish abundance (eAtlas)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Fish abundance (eAtlas)
     Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Biota (3)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in NEII Data Services – Conformant
     catalog

Error stats:
{
  "unknownProps": 0,
  "missingRequiredProps": 0,
  "unknownTypes": 0,
  "inputNotPlainObjects": 0
}
Warning stats:
{
  "unknownProps": 16,
  "missingRequiredProps": 0,
  "unknownTypes": 0,
  "inputNotPlainObjects": 0
}
Unknown types: {}
Unknown properties: {
  "CatalogGroup": {
    "preserveOrder": 4
  },
  "WebMapServiceCatalogItem": {
    "dataUrl": 12
  }
}
```

### contextual

```
Succeeded with 0 errors and 4 warnings
Warning: Unknown property "dataUrlType" was encountered
  in States & Territories
     Contextual layers
     catalog

Warning: Unknown property "dataUrl" was encountered
  in States & Territories
     Contextual layers
     catalog

Warning: Unknown property "dataUrlType" was encountered
  in Natural Resource Management Regions
     Contextual layers
     catalog

Warning: Unknown property "dataUrl" was encountered
  in Natural Resource Management Regions
     Contextual layers
     catalog

Error stats:
{
  "unknownProps": 0,
  "missingRequiredProps": 0,
  "unknownTypes": 0,
  "inputNotPlainObjects": 0
}
Warning stats:
{
  "unknownProps": 4,
  "missingRequiredProps": 0,
  "unknownTypes": 0,
  "inputNotPlainObjects": 0
}
Unknown types: {}
Unknown properties: {
  "WebMapServiceCatalogItem": {
    "dataUrlType": 2,
    "dataUrl": 2
  }
}
```

### land

```
Succeeded with 0 errors and 3 warnings
Warning: Unknown property "preserveOrder" was encountered
  in Detailed Structure
     Detailed 1:100k
     Queensland Geology Detailed Web Map Service (Department of Natural Resources, Mines and Energy, Queensland Government)
     Land (15)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Detailed 1:100k
     Queensland Geology Detailed Web Map Service (Department of Natural Resources, Mines and Energy, Queensland Government)
     Land (15)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Queensland Geology Detailed Web Map Service (Department of Natural Resources, Mines and Energy, Queensland Government)
     Land (15)
     NEII Data Services – Conformant
     catalog

Error stats:
{
  "unknownProps": 0,
  "missingRequiredProps": 0,
  "unknownTypes": 0,
  "inputNotPlainObjects": 0
}
Warning stats:
{
  "unknownProps": 3,
  "missingRequiredProps": 0,
  "unknownTypes": 0,
  "inputNotPlainObjects": 0
}
Unknown types: {}
Unknown properties: {
  "CatalogGroup": {
    "preserveOrder": 3
  }
}
```

### oceans

```
Succeeded with 1 errors and 20 warnings
Error: Unknown or unsupported type "wfs"
  in AIMS Sea Water Temperature Observing System (AIMS Temperature Logger Program)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "typeNames" was encountered
  in  NSW Marine protected areas (NSW DPI)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Coloured dissolved organic matter (annual median)
     Annual median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Non-algal particles (annual median)
     Annual median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Chlorophyll-a concentration (seasonal)
     Seasonal median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Coloured dissolved organic matter (seasonal)
     Seasonal median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Non-algal particles (seasonal)
     Seasonal median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Chlorophyll-a concentration (monthly)
     Monthly median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Coloured dissolved organic matter (monthly)
     Monthly median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Non-algal particles (monthly)
     Monthly median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Chlorophyll-a concentration (weekly)
     Weekly median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Coloured dissolved organic matter (weekly)
     Weekly median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Non-algal particles (weekly)
     Weekly median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Chlorophyll-a concentration (daily)
     Daily median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Coloured dissolved organic matter (daily)
     Daily median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "abstract" was encountered
  in Non-algal particles (daily)
     Daily median
     Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Marine water quality (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Reef temperature (eReefs) (BoM)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Marine key ecological features (DotEE)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "metadataUrl" was encountered
  in Geomorphic Features of Australia's Marine Jurisdiction (GA)
     Oceans (14)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Oceans (14)
     NEII Data Services – Conformant
     catalog

Error stats:
{
  "unknownProps": 0,
  "missingRequiredProps": 0,
  "unknownTypes": 1,
  "inputNotPlainObjects": 0
}
Warning stats:
{
  "unknownProps": 20,
  "missingRequiredProps": 0,
  "unknownTypes": 0,
  "inputNotPlainObjects": 0
}
Unknown types: {
  "wfs": 1
}
Unknown properties: {
  "WebFeatureServiceCatalogGroup": {
    "typeNames": 1
  },
  "WebMapServiceCatalogItem": {
    "abstract": 14
  },
  "CatalogGroup": {
    "preserveOrder": 4
  },
  "EsriMapServerCatalogItem": {
    "metadataUrl": 1
  }
}
```

### other

```
Succeeded with 0 errors and 22 warnings
Warning: Unknown property "preserveOrder" was encountered
  in Daily observations
     Water Observations from Space
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Seasonal summaries
     Water Observations from Space
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Annual Summaries
     Water Observations from Space
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in All of time Summaries
     Water Observations from Space
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Water Observations from Space
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Annual Landsat Geomedian
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Barest Earth (Landsat 8)
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Sentinel-2 Definitive
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Near Real-Time
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Fractional Cover Percentiles Annual
     Fractional Cover Percentiles
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Fractional Cover Percentiles Seasonal
     Fractional Cover Percentiles
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Fractional Cover Percentiles
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Marine and Tidal Regions
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Weathering Intensity
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Multi-Scale Topographic Position
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in GSKY Blended Service
     Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Satellite Imagery
     Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Other (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "metadataUrl" was encountered
  in 2018 National Seismic Hazard Assessment for Australia (Geoscience Australia)
     Natural Hazards (including fire) (5)
     Processes (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Natural Hazards (including fire) (5)
     Processes (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Processes (1)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in NEII Data Services – Conformant
     catalog

Error stats:
{
  "unknownProps": 0,
  "missingRequiredProps": 0,
  "unknownTypes": 0,
  "inputNotPlainObjects": 0
}
Warning stats:
{
  "unknownProps": 22,
  "missingRequiredProps": 0,
  "unknownTypes": 0,
  "inputNotPlainObjects": 0
}
Unknown types: {}
Unknown properties: {
  "CatalogGroup": {
    "preserveOrder": 21
  },
  "EsriMapServerCatalogItem": {
    "metadataUrl": 1
  }
}
```

### Water

```
Succeeded with 0 errors and 17 warnings
Warning: Unknown property "custodian" was encountered
  in Water Regulations Data (BoM)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "metadataUrl" was encountered
  in Basins
     Australian Surface Hydrology (Web Mercator)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "metadataUrl" was encountered
  in Catchments
     Australian Surface Hydrology (Web Mercator)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "metadataUrl" was encountered
  in Surface HydroLines Regional
     Australian Surface Hydrology (Web Mercator)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "metadataUrl" was encountered
  in Surface HydroPolys Regional
     Australian Surface Hydrology (Web Mercator)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "metadataUrl" was encountered
  in Surface HydroPoints Regional
     Australian Surface Hydrology (Web Mercator)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "metadataUrl" was encountered
  in Surface HydroLines National
     Australian Surface Hydrology (Web Mercator)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "metadataUrl" was encountered
  in Surface HydroPolys National
     Australian Surface Hydrology (Web Mercator)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "metadataUrl" was encountered
  in Surface HydroPoints National
     Australian Surface Hydrology (Web Mercator)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Canal
     Queensland watercourse and water area web map service (Department of Natural Resources, Mines and Energy, Queensland Government)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Queensland watercourse and water area web map service (Department of Natural Resources, Mines and Energy, Queensland Government)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Aquifer Groundwater Chemistry
     Great Artesian Basin Digital Data (Geoscience Australia)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Geological Formation Contact Surfaces
     Great Artesian Basin Digital Data (Geoscience Australia)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Potentiometric Surfaces
     Great Artesian Basin Digital Data (Geoscience Australia)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Polygonal Faulting
     Great Artesian Basin Digital Data (Geoscience Australia)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Watertable Elevation
     Great Artesian Basin Digital Data (Geoscience Australia)
     Water (7)
     NEII Data Services – Conformant
     catalog

Warning: Unknown property "preserveOrder" was encountered
  in Great Artesian Basin Digital Data (Geoscience Australia)
     Water (7)
     NEII Data Services – Conformant
     catalog

Error stats:
{
  "unknownProps": 0,
  "missingRequiredProps": 0,
  "unknownTypes": 0,
  "inputNotPlainObjects": 0
}
Warning stats:
{
  "unknownProps": 17,
  "missingRequiredProps": 0,
  "unknownTypes": 0,
  "inputNotPlainObjects": 0
}
Unknown types: {}
Unknown properties: {
  "CatalogGroup": {
    "custodian": 1,
    "preserveOrder": 8
  },
  "EsriMapServerCatalogItem": {
    "metadataUrl": 8
  }
}
```
