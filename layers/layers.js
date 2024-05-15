ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([121.347484, 6.821117, 124.295387, 8.757089]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriTopoWorld_2 = new ol.layer.Tile({
            'title': 'Esri Topo World',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenTopoMap_3 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_4 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Isabela_5 = new ol.format.GeoJSON();
var features_Isabela_5 = format_Isabela_5.readFeatures(json_Isabela_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Isabela_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isabela_5.addFeatures(features_Isabela_5);
var lyr_Isabela_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isabela_5, 
                style: style_Isabela_5,
                popuplayertitle: "Isabela",
                interactive: true,
                title: '<img src="styles/legend/Isabela_5.png" /> Isabela'
            });
var format_ZamboangadelSur_6 = new ol.format.GeoJSON();
var features_ZamboangadelSur_6 = format_ZamboangadelSur_6.readFeatures(json_ZamboangadelSur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZamboangadelSur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZamboangadelSur_6.addFeatures(features_ZamboangadelSur_6);
var lyr_ZamboangadelSur_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZamboangadelSur_6, 
                style: style_ZamboangadelSur_6,
                popuplayertitle: "Zamboanga del Sur",
                interactive: true,
                title: '<img src="styles/legend/ZamboangadelSur_6.png" /> Zamboanga del Sur'
            });
var format_ZamboangaSibugay_7 = new ol.format.GeoJSON();
var features_ZamboangaSibugay_7 = format_ZamboangaSibugay_7.readFeatures(json_ZamboangaSibugay_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZamboangaSibugay_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZamboangaSibugay_7.addFeatures(features_ZamboangaSibugay_7);
var lyr_ZamboangaSibugay_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZamboangaSibugay_7, 
                style: style_ZamboangaSibugay_7,
                popuplayertitle: "Zamboanga Sibugay",
                interactive: true,
                title: '<img src="styles/legend/ZamboangaSibugay_7.png" /> Zamboanga Sibugay'
            });
var format_ZamboangadelNorte_8 = new ol.format.GeoJSON();
var features_ZamboangadelNorte_8 = format_ZamboangadelNorte_8.readFeatures(json_ZamboangadelNorte_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZamboangadelNorte_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZamboangadelNorte_8.addFeatures(features_ZamboangadelNorte_8);
var lyr_ZamboangadelNorte_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZamboangadelNorte_8, 
                style: style_ZamboangadelNorte_8,
                popuplayertitle: "Zamboanga del Norte",
                interactive: true,
                title: '<img src="styles/legend/ZamboangadelNorte_8.png" /> Zamboanga del Norte'
            });
var format_R9_Landslides_Susceptibility_9 = new ol.format.GeoJSON();
var features_R9_Landslides_Susceptibility_9 = format_R9_Landslides_Susceptibility_9.readFeatures(json_R9_Landslides_Susceptibility_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R9_Landslides_Susceptibility_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R9_Landslides_Susceptibility_9.addFeatures(features_R9_Landslides_Susceptibility_9);
var lyr_R9_Landslides_Susceptibility_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R9_Landslides_Susceptibility_9, 
                style: style_R9_Landslides_Susceptibility_9,
                popuplayertitle: "R9_Landslides_Susceptibility",
                interactive: true,
    title: 'R9_Landslides_Susceptibility<br />\
    <img src="styles/legend/R9_Landslides_Susceptibility_9_0.png" /> DF<br />\
    <img src="styles/legend/R9_Landslides_Susceptibility_9_1.png" /> Low Landslide Susceptibility<br />\
    <img src="styles/legend/R9_Landslides_Susceptibility_9_2.png" /> Moderate Landslide Susceptibility<br />\
    <img src="styles/legend/R9_Landslides_Susceptibility_9_3.png" /> Very High Landslide Susceptibility<br />\
    <img src="styles/legend/R9_Landslides_Susceptibility_9_4.png" /> High Landslide Susceptibility<br />'
        });
var format_R9_Flood_Susceptibility_10 = new ol.format.GeoJSON();
var features_R9_Flood_Susceptibility_10 = format_R9_Flood_Susceptibility_10.readFeatures(json_R9_Flood_Susceptibility_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R9_Flood_Susceptibility_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R9_Flood_Susceptibility_10.addFeatures(features_R9_Flood_Susceptibility_10);
var lyr_R9_Flood_Susceptibility_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R9_Flood_Susceptibility_10, 
                style: style_R9_Flood_Susceptibility_10,
                popuplayertitle: "R9_Flood_Susceptibility",
                interactive: true,
    title: 'R9_Flood_Susceptibility<br />\
    <img src="styles/legend/R9_Flood_Susceptibility_10_0.png" /> Low FLood Susceptibility<br />\
    <img src="styles/legend/R9_Flood_Susceptibility_10_1.png" /> Moderate Flood Susceptibility<br />\
    <img src="styles/legend/R9_Flood_Susceptibility_10_2.png" /> High Flood Susceptibility<br />\
    <img src="styles/legend/R9_Flood_Susceptibility_10_3.png" /> Very High FLood Susceptibility<br />'
        });
var format_Critical_Watershed_11 = new ol.format.GeoJSON();
var features_Critical_Watershed_11 = format_Critical_Watershed_11.readFeatures(json_Critical_Watershed_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Critical_Watershed_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Critical_Watershed_11.addFeatures(features_Critical_Watershed_11);
var lyr_Critical_Watershed_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Critical_Watershed_11, 
                style: style_Critical_Watershed_11,
                popuplayertitle: "Critical_Watershed",
                interactive: false,
                title: '<img src="styles/legend/Critical_Watershed_11.png" /> Critical_Watershed'
            });
var format_R9_eNIPAS_12 = new ol.format.GeoJSON();
var features_R9_eNIPAS_12 = format_R9_eNIPAS_12.readFeatures(json_R9_eNIPAS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R9_eNIPAS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R9_eNIPAS_12.addFeatures(features_R9_eNIPAS_12);
var lyr_R9_eNIPAS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R9_eNIPAS_12, 
                style: style_R9_eNIPAS_12,
                popuplayertitle: "R9_eNIPAS",
                interactive: false,
                title: '<img src="styles/legend/R9_eNIPAS_12.png" /> R9_eNIPAS'
            });
var format_R9_NGP_20112021_13 = new ol.format.GeoJSON();
var features_R9_NGP_20112021_13 = format_R9_NGP_20112021_13.readFeatures(json_R9_NGP_20112021_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R9_NGP_20112021_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R9_NGP_20112021_13.addFeatures(features_R9_NGP_20112021_13);
var lyr_R9_NGP_20112021_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R9_NGP_20112021_13, 
                style: style_R9_NGP_20112021_13,
                popuplayertitle: "R9_NGP_2011-2021",
                interactive: false,
                title: '<img src="styles/legend/R9_NGP_20112021_13.png" /> R9_NGP_2011-2021'
            });
var format_R9_Priority_Watershed_14 = new ol.format.GeoJSON();
var features_R9_Priority_Watershed_14 = format_R9_Priority_Watershed_14.readFeatures(json_R9_Priority_Watershed_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R9_Priority_Watershed_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R9_Priority_Watershed_14.addFeatures(features_R9_Priority_Watershed_14);
var lyr_R9_Priority_Watershed_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R9_Priority_Watershed_14, 
                style: style_R9_Priority_Watershed_14,
                popuplayertitle: "R9_Priority_Watershed",
                interactive: false,
                title: '<img src="styles/legend/R9_Priority_Watershed_14.png" /> R9_Priority_Watershed'
            });
var format_R9_Tenure_15 = new ol.format.GeoJSON();
var features_R9_Tenure_15 = format_R9_Tenure_15.readFeatures(json_R9_Tenure_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R9_Tenure_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R9_Tenure_15.addFeatures(features_R9_Tenure_15);
var lyr_R9_Tenure_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R9_Tenure_15, 
                style: style_R9_Tenure_15,
                popuplayertitle: "R9_Tenure",
                interactive: false,
                title: '<img src="styles/legend/R9_Tenure_15.png" /> R9_Tenure'
            });
var format_EMBIXLaboratory_16 = new ol.format.GeoJSON();
var features_EMBIXLaboratory_16 = format_EMBIXLaboratory_16.readFeatures(json_EMBIXLaboratory_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EMBIXLaboratory_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMBIXLaboratory_16.addFeatures(features_EMBIXLaboratory_16);
var lyr_EMBIXLaboratory_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMBIXLaboratory_16, 
                style: style_EMBIXLaboratory_16,
                popuplayertitle: "EMB IX Laboratory",
                interactive: true,
                title: '<img src="styles/legend/EMBIXLaboratory_16.png" /> EMB IX Laboratory'
            });
var format_EMBIXOffices_17 = new ol.format.GeoJSON();
var features_EMBIXOffices_17 = format_EMBIXOffices_17.readFeatures(json_EMBIXOffices_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EMBIXOffices_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMBIXOffices_17.addFeatures(features_EMBIXOffices_17);
var lyr_EMBIXOffices_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMBIXOffices_17, 
                style: style_EMBIXOffices_17,
                popuplayertitle: "EMB IX Offices",
                interactive: true,
                title: '<img src="styles/legend/EMBIXOffices_17.png" /> EMB IX Offices'
            });
var format_SolidWasteGeneration2022_18 = new ol.format.GeoJSON();
var features_SolidWasteGeneration2022_18 = format_SolidWasteGeneration2022_18.readFeatures(json_SolidWasteGeneration2022_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SolidWasteGeneration2022_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolidWasteGeneration2022_18.addFeatures(features_SolidWasteGeneration2022_18);
var lyr_SolidWasteGeneration2022_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolidWasteGeneration2022_18, 
                style: style_SolidWasteGeneration2022_18,
                popuplayertitle: "Solid Waste Generation (2022)",
                interactive: true,
    title: 'Solid Waste Generation (2022)<br />\
    <img src="styles/legend/SolidWasteGeneration2022_18_0.png" /> 1012 - 1687<br />\
    <img src="styles/legend/SolidWasteGeneration2022_18_1.png" /> 1687 - 2993<br />\
    <img src="styles/legend/SolidWasteGeneration2022_18_2.png" /> 2993 - 4083<br />\
    <img src="styles/legend/SolidWasteGeneration2022_18_3.png" /> 4083 - 5556<br />\
    <img src="styles/legend/SolidWasteGeneration2022_18_4.png" /> 5556 - 7014<br />\
    <img src="styles/legend/SolidWasteGeneration2022_18_5.png" /> 7014 - 9453<br />\
    <img src="styles/legend/SolidWasteGeneration2022_18_6.png" /> 9453 - 15222<br />\
    <img src="styles/legend/SolidWasteGeneration2022_18_7.png" /> 15222 - 23144<br />\
    <img src="styles/legend/SolidWasteGeneration2022_18_8.png" /> 23144 - 55478<br />\
    <img src="styles/legend/SolidWasteGeneration2022_18_9.png" /> 55478 - 259619<br />'
        });
var format_SanitaryLandfill_19 = new ol.format.GeoJSON();
var features_SanitaryLandfill_19 = format_SanitaryLandfill_19.readFeatures(json_SanitaryLandfill_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SanitaryLandfill_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanitaryLandfill_19.addFeatures(features_SanitaryLandfill_19);
var lyr_SanitaryLandfill_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanitaryLandfill_19, 
                style: style_SanitaryLandfill_19,
                popuplayertitle: "Sanitary Landfill",
                interactive: true,
                title: '<img src="styles/legend/SanitaryLandfill_19.png" /> Sanitary Landfill'
            });
var format_MRFLGUInitiated_20 = new ol.format.GeoJSON();
var features_MRFLGUInitiated_20 = format_MRFLGUInitiated_20.readFeatures(json_MRFLGUInitiated_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MRFLGUInitiated_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MRFLGUInitiated_20.addFeatures(features_MRFLGUInitiated_20);
var lyr_MRFLGUInitiated_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MRFLGUInitiated_20, 
                style: style_MRFLGUInitiated_20,
                popuplayertitle: "MRF (LGU Initiated)",
                interactive: true,
                title: '<img src="styles/legend/MRFLGUInitiated_20.png" /> MRF (LGU Initiated)'
            });
var format_MRFEMBFunded_21 = new ol.format.GeoJSON();
var features_MRFEMBFunded_21 = format_MRFEMBFunded_21.readFeatures(json_MRFEMBFunded_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MRFEMBFunded_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MRFEMBFunded_21.addFeatures(features_MRFEMBFunded_21);
var lyr_MRFEMBFunded_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MRFEMBFunded_21, 
                style: style_MRFEMBFunded_21,
                popuplayertitle: "MRF (EMB Funded)",
                interactive: true,
                title: '<img src="styles/legend/MRFEMBFunded_21.png" /> MRF (EMB Funded)'
            });
var format_DisposalFacility_22 = new ol.format.GeoJSON();
var features_DisposalFacility_22 = format_DisposalFacility_22.readFeatures(json_DisposalFacility_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DisposalFacility_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisposalFacility_22.addFeatures(features_DisposalFacility_22);
var lyr_DisposalFacility_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DisposalFacility_22, 
                style: style_DisposalFacility_22,
                popuplayertitle: "Disposal Facility",
                interactive: true,
                title: '<img src="styles/legend/DisposalFacility_22.png" /> Disposal Facility'
            });
var format_WQMAStretch_23 = new ol.format.GeoJSON();
var features_WQMAStretch_23 = format_WQMAStretch_23.readFeatures(json_WQMAStretch_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WQMAStretch_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WQMAStretch_23.addFeatures(features_WQMAStretch_23);
var lyr_WQMAStretch_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WQMAStretch_23, 
                style: style_WQMAStretch_23,
                popuplayertitle: "WQMA Stretch",
                interactive: true,
                title: '<img src="styles/legend/WQMAStretch_23.png" /> WQMA Stretch'
            });
var format_WaterbodyRiverLakeEsteroBayMarine_24 = new ol.format.GeoJSON();
var features_WaterbodyRiverLakeEsteroBayMarine_24 = format_WaterbodyRiverLakeEsteroBayMarine_24.readFeatures(json_WaterbodyRiverLakeEsteroBayMarine_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WaterbodyRiverLakeEsteroBayMarine_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterbodyRiverLakeEsteroBayMarine_24.addFeatures(features_WaterbodyRiverLakeEsteroBayMarine_24);
var lyr_WaterbodyRiverLakeEsteroBayMarine_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterbodyRiverLakeEsteroBayMarine_24, 
                style: style_WaterbodyRiverLakeEsteroBayMarine_24,
                popuplayertitle: "Waterbody (River-Lake-Estero-Bay-Marine)",
                interactive: true,
                title: '<img src="styles/legend/WaterbodyRiverLakeEsteroBayMarine_24.png" /> Waterbody (River-Lake-Estero-Bay-Marine)'
            });
var format_WaterQualityManagementArea_25 = new ol.format.GeoJSON();
var features_WaterQualityManagementArea_25 = format_WaterQualityManagementArea_25.readFeatures(json_WaterQualityManagementArea_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WaterQualityManagementArea_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterQualityManagementArea_25.addFeatures(features_WaterQualityManagementArea_25);
var lyr_WaterQualityManagementArea_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterQualityManagementArea_25, 
                style: style_WaterQualityManagementArea_25,
                popuplayertitle: "Water Quality Management Area",
                interactive: true,
                title: '<img src="styles/legend/WaterQualityManagementArea_25.png" /> Water Quality Management Area'
            });
var format_RegularMonitoringStretch_26 = new ol.format.GeoJSON();
var features_RegularMonitoringStretch_26 = format_RegularMonitoringStretch_26.readFeatures(json_RegularMonitoringStretch_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RegularMonitoringStretch_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegularMonitoringStretch_26.addFeatures(features_RegularMonitoringStretch_26);
var lyr_RegularMonitoringStretch_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegularMonitoringStretch_26, 
                style: style_RegularMonitoringStretch_26,
                popuplayertitle: "Regular Monitoring Stretch",
                interactive: true,
                title: '<img src="styles/legend/RegularMonitoringStretch_26.png" /> Regular Monitoring Stretch'
            });
var format_RecreationalWatersStretch_27 = new ol.format.GeoJSON();
var features_RecreationalWatersStretch_27 = format_RecreationalWatersStretch_27.readFeatures(json_RecreationalWatersStretch_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RecreationalWatersStretch_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecreationalWatersStretch_27.addFeatures(features_RecreationalWatersStretch_27);
var lyr_RecreationalWatersStretch_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecreationalWatersStretch_27, 
                style: style_RecreationalWatersStretch_27,
                popuplayertitle: "Recreational Waters Stretch",
                interactive: true,
                title: '<img src="styles/legend/RecreationalWatersStretch_27.png" /> Recreational Waters Stretch'
            });
var format_PriorityRiverStretch_28 = new ol.format.GeoJSON();
var features_PriorityRiverStretch_28 = format_PriorityRiverStretch_28.readFeatures(json_PriorityRiverStretch_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PriorityRiverStretch_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityRiverStretch_28.addFeatures(features_PriorityRiverStretch_28);
var lyr_PriorityRiverStretch_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityRiverStretch_28, 
                style: style_PriorityRiverStretch_28,
                popuplayertitle: "Priority River Stretch",
                interactive: true,
                title: '<img src="styles/legend/PriorityRiverStretch_28.png" /> Priority River Stretch'
            });
var format_PriorityRecreationalStretch_29 = new ol.format.GeoJSON();
var features_PriorityRecreationalStretch_29 = format_PriorityRecreationalStretch_29.readFeatures(json_PriorityRecreationalStretch_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PriorityRecreationalStretch_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityRecreationalStretch_29.addFeatures(features_PriorityRecreationalStretch_29);
var lyr_PriorityRecreationalStretch_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityRecreationalStretch_29, 
                style: style_PriorityRecreationalStretch_29,
                popuplayertitle: "Priority Recreational Stretch",
                interactive: true,
                title: '<img src="styles/legend/PriorityRecreationalStretch_29.png" /> Priority Recreational Stretch'
            });
var format_ModelWaterbodyStetch_30 = new ol.format.GeoJSON();
var features_ModelWaterbodyStetch_30 = format_ModelWaterbodyStetch_30.readFeatures(json_ModelWaterbodyStetch_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ModelWaterbodyStetch_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModelWaterbodyStetch_30.addFeatures(features_ModelWaterbodyStetch_30);
var lyr_ModelWaterbodyStetch_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ModelWaterbodyStetch_30, 
                style: style_ModelWaterbodyStetch_30,
                popuplayertitle: "Model Waterbody Stetch",
                interactive: true,
                title: '<img src="styles/legend/ModelWaterbodyStetch_30.png" /> Model Waterbody Stetch'
            });
var format_MercuryMonitoringStretch_31 = new ol.format.GeoJSON();
var features_MercuryMonitoringStretch_31 = format_MercuryMonitoringStretch_31.readFeatures(json_MercuryMonitoringStretch_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MercuryMonitoringStretch_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MercuryMonitoringStretch_31.addFeatures(features_MercuryMonitoringStretch_31);
var lyr_MercuryMonitoringStretch_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MercuryMonitoringStretch_31, 
                style: style_MercuryMonitoringStretch_31,
                popuplayertitle: "Mercury Monitoring Stretch",
                interactive: true,
                title: '<img src="styles/legend/MercuryMonitoringStretch_31.png" /> Mercury Monitoring Stretch'
            });
var format_ClassifiedWaterbodiesStretch_32 = new ol.format.GeoJSON();
var features_ClassifiedWaterbodiesStretch_32 = format_ClassifiedWaterbodiesStretch_32.readFeatures(json_ClassifiedWaterbodiesStretch_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ClassifiedWaterbodiesStretch_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClassifiedWaterbodiesStretch_32.addFeatures(features_ClassifiedWaterbodiesStretch_32);
var lyr_ClassifiedWaterbodiesStretch_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClassifiedWaterbodiesStretch_32, 
                style: style_ClassifiedWaterbodiesStretch_32,
                popuplayertitle: "Classified Waterbodies Stretch",
                interactive: true,
                title: '<img src="styles/legend/ClassifiedWaterbodiesStretch_32.png" /> Classified Waterbodies Stretch'
            });
var format_AdoptanEsteroStretch_33 = new ol.format.GeoJSON();
var features_AdoptanEsteroStretch_33 = format_AdoptanEsteroStretch_33.readFeatures(json_AdoptanEsteroStretch_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AdoptanEsteroStretch_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdoptanEsteroStretch_33.addFeatures(features_AdoptanEsteroStretch_33);
var lyr_AdoptanEsteroStretch_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdoptanEsteroStretch_33, 
                style: style_AdoptanEsteroStretch_33,
                popuplayertitle: "Adopt-an-Estero Stretch",
                interactive: true,
                title: '<img src="styles/legend/AdoptanEsteroStretch_33.png" /> Adopt-an-Estero Stretch'
            });
var format_WQMAClassification_34 = new ol.format.GeoJSON();
var features_WQMAClassification_34 = format_WQMAClassification_34.readFeatures(json_WQMAClassification_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WQMAClassification_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WQMAClassification_34.addFeatures(features_WQMAClassification_34);
var lyr_WQMAClassification_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WQMAClassification_34, 
                style: style_WQMAClassification_34,
                popuplayertitle: "WQMA Classification",
                interactive: true,
                title: '<img src="styles/legend/WQMAClassification_34.png" /> WQMA Classification'
            });
var format_RegularMonitoringClassification_35 = new ol.format.GeoJSON();
var features_RegularMonitoringClassification_35 = format_RegularMonitoringClassification_35.readFeatures(json_RegularMonitoringClassification_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RegularMonitoringClassification_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegularMonitoringClassification_35.addFeatures(features_RegularMonitoringClassification_35);
var lyr_RegularMonitoringClassification_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegularMonitoringClassification_35, 
                style: style_RegularMonitoringClassification_35,
                popuplayertitle: "Regular Monitoring Classification",
                interactive: true,
                title: '<img src="styles/legend/RegularMonitoringClassification_35.png" /> Regular Monitoring Classification'
            });
var format_RecreationalWatersClassification_36 = new ol.format.GeoJSON();
var features_RecreationalWatersClassification_36 = format_RecreationalWatersClassification_36.readFeatures(json_RecreationalWatersClassification_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RecreationalWatersClassification_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecreationalWatersClassification_36.addFeatures(features_RecreationalWatersClassification_36);
var lyr_RecreationalWatersClassification_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecreationalWatersClassification_36, 
                style: style_RecreationalWatersClassification_36,
                popuplayertitle: "Recreational Waters Classification",
                interactive: true,
                title: '<img src="styles/legend/RecreationalWatersClassification_36.png" /> Recreational Waters Classification'
            });
var format_PriorityRiverClassification_37 = new ol.format.GeoJSON();
var features_PriorityRiverClassification_37 = format_PriorityRiverClassification_37.readFeatures(json_PriorityRiverClassification_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PriorityRiverClassification_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityRiverClassification_37.addFeatures(features_PriorityRiverClassification_37);
var lyr_PriorityRiverClassification_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityRiverClassification_37, 
                style: style_PriorityRiverClassification_37,
                popuplayertitle: "Priority River Classification",
                interactive: true,
                title: '<img src="styles/legend/PriorityRiverClassification_37.png" /> Priority River Classification'
            });
var format_PriorityRecreationalWatersClassification_38 = new ol.format.GeoJSON();
var features_PriorityRecreationalWatersClassification_38 = format_PriorityRecreationalWatersClassification_38.readFeatures(json_PriorityRecreationalWatersClassification_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PriorityRecreationalWatersClassification_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityRecreationalWatersClassification_38.addFeatures(features_PriorityRecreationalWatersClassification_38);
var lyr_PriorityRecreationalWatersClassification_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityRecreationalWatersClassification_38, 
                style: style_PriorityRecreationalWatersClassification_38,
                popuplayertitle: "Priority Recreational Waters Classification",
                interactive: true,
                title: '<img src="styles/legend/PriorityRecreationalWatersClassification_38.png" /> Priority Recreational Waters Classification'
            });
var format_ModelWaterbodyClassification_39 = new ol.format.GeoJSON();
var features_ModelWaterbodyClassification_39 = format_ModelWaterbodyClassification_39.readFeatures(json_ModelWaterbodyClassification_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ModelWaterbodyClassification_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModelWaterbodyClassification_39.addFeatures(features_ModelWaterbodyClassification_39);
var lyr_ModelWaterbodyClassification_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ModelWaterbodyClassification_39, 
                style: style_ModelWaterbodyClassification_39,
                popuplayertitle: "Model Waterbody Classification",
                interactive: true,
                title: '<img src="styles/legend/ModelWaterbodyClassification_39.png" /> Model Waterbody Classification'
            });
var format_MercuryMonitoringClassification_40 = new ol.format.GeoJSON();
var features_MercuryMonitoringClassification_40 = format_MercuryMonitoringClassification_40.readFeatures(json_MercuryMonitoringClassification_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MercuryMonitoringClassification_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MercuryMonitoringClassification_40.addFeatures(features_MercuryMonitoringClassification_40);
var lyr_MercuryMonitoringClassification_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MercuryMonitoringClassification_40, 
                style: style_MercuryMonitoringClassification_40,
                popuplayertitle: "Mercury Monitoring Classification",
                interactive: true,
                title: '<img src="styles/legend/MercuryMonitoringClassification_40.png" /> Mercury Monitoring Classification'
            });
var format_ClassifiedWaterbodiesClassification_41 = new ol.format.GeoJSON();
var features_ClassifiedWaterbodiesClassification_41 = format_ClassifiedWaterbodiesClassification_41.readFeatures(json_ClassifiedWaterbodiesClassification_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ClassifiedWaterbodiesClassification_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClassifiedWaterbodiesClassification_41.addFeatures(features_ClassifiedWaterbodiesClassification_41);
var lyr_ClassifiedWaterbodiesClassification_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClassifiedWaterbodiesClassification_41, 
                style: style_ClassifiedWaterbodiesClassification_41,
                popuplayertitle: "Classified Waterbodies Classification",
                interactive: true,
                title: '<img src="styles/legend/ClassifiedWaterbodiesClassification_41.png" /> Classified Waterbodies Classification'
            });
var format_AdoptanEsteroClassification_42 = new ol.format.GeoJSON();
var features_AdoptanEsteroClassification_42 = format_AdoptanEsteroClassification_42.readFeatures(json_AdoptanEsteroClassification_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AdoptanEsteroClassification_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdoptanEsteroClassification_42.addFeatures(features_AdoptanEsteroClassification_42);
var lyr_AdoptanEsteroClassification_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdoptanEsteroClassification_42, 
                style: style_AdoptanEsteroClassification_42,
                popuplayertitle: "Adopt-an-Estero Classification",
                interactive: true,
                title: '<img src="styles/legend/AdoptanEsteroClassification_42.png" /> Adopt-an-Estero Classification'
            });
var format_WQMASamplingStations_43 = new ol.format.GeoJSON();
var features_WQMASamplingStations_43 = format_WQMASamplingStations_43.readFeatures(json_WQMASamplingStations_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WQMASamplingStations_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WQMASamplingStations_43.addFeatures(features_WQMASamplingStations_43);
var lyr_WQMASamplingStations_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WQMASamplingStations_43, 
                style: style_WQMASamplingStations_43,
                popuplayertitle: "WQMA Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/WQMASamplingStations_43.png" /> WQMA Sampling Stations'
            });
var format_RegularMonitoringSamplingStations_44 = new ol.format.GeoJSON();
var features_RegularMonitoringSamplingStations_44 = format_RegularMonitoringSamplingStations_44.readFeatures(json_RegularMonitoringSamplingStations_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RegularMonitoringSamplingStations_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegularMonitoringSamplingStations_44.addFeatures(features_RegularMonitoringSamplingStations_44);
var lyr_RegularMonitoringSamplingStations_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegularMonitoringSamplingStations_44, 
                style: style_RegularMonitoringSamplingStations_44,
                popuplayertitle: "Regular Monitoring Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/RegularMonitoringSamplingStations_44.png" /> Regular Monitoring Sampling Stations'
            });
var format_RecreationalWatersSamplingStations_45 = new ol.format.GeoJSON();
var features_RecreationalWatersSamplingStations_45 = format_RecreationalWatersSamplingStations_45.readFeatures(json_RecreationalWatersSamplingStations_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RecreationalWatersSamplingStations_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecreationalWatersSamplingStations_45.addFeatures(features_RecreationalWatersSamplingStations_45);
var lyr_RecreationalWatersSamplingStations_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecreationalWatersSamplingStations_45, 
                style: style_RecreationalWatersSamplingStations_45,
                popuplayertitle: "Recreational Waters Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/RecreationalWatersSamplingStations_45.png" /> Recreational Waters Sampling Stations'
            });
var format_PriorityRiverSamplingStations_46 = new ol.format.GeoJSON();
var features_PriorityRiverSamplingStations_46 = format_PriorityRiverSamplingStations_46.readFeatures(json_PriorityRiverSamplingStations_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PriorityRiverSamplingStations_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityRiverSamplingStations_46.addFeatures(features_PriorityRiverSamplingStations_46);
var lyr_PriorityRiverSamplingStations_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityRiverSamplingStations_46, 
                style: style_PriorityRiverSamplingStations_46,
                popuplayertitle: "Priority River Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/PriorityRiverSamplingStations_46.png" /> Priority River Sampling Stations'
            });
var format_ModelWaterbodySamplingStations_47 = new ol.format.GeoJSON();
var features_ModelWaterbodySamplingStations_47 = format_ModelWaterbodySamplingStations_47.readFeatures(json_ModelWaterbodySamplingStations_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ModelWaterbodySamplingStations_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModelWaterbodySamplingStations_47.addFeatures(features_ModelWaterbodySamplingStations_47);
var lyr_ModelWaterbodySamplingStations_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ModelWaterbodySamplingStations_47, 
                style: style_ModelWaterbodySamplingStations_47,
                popuplayertitle: "Model Waterbody Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/ModelWaterbodySamplingStations_47.png" /> Model Waterbody Sampling Stations'
            });
var format_PriorityRecreationalWatersSamplingStations_48 = new ol.format.GeoJSON();
var features_PriorityRecreationalWatersSamplingStations_48 = format_PriorityRecreationalWatersSamplingStations_48.readFeatures(json_PriorityRecreationalWatersSamplingStations_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PriorityRecreationalWatersSamplingStations_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityRecreationalWatersSamplingStations_48.addFeatures(features_PriorityRecreationalWatersSamplingStations_48);
var lyr_PriorityRecreationalWatersSamplingStations_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityRecreationalWatersSamplingStations_48, 
                style: style_PriorityRecreationalWatersSamplingStations_48,
                popuplayertitle: "Priority Recreational Waters Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/PriorityRecreationalWatersSamplingStations_48.png" /> Priority Recreational Waters Sampling Stations'
            });
var format_MercuryMonitoringSamplingStations_49 = new ol.format.GeoJSON();
var features_MercuryMonitoringSamplingStations_49 = format_MercuryMonitoringSamplingStations_49.readFeatures(json_MercuryMonitoringSamplingStations_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MercuryMonitoringSamplingStations_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MercuryMonitoringSamplingStations_49.addFeatures(features_MercuryMonitoringSamplingStations_49);
var lyr_MercuryMonitoringSamplingStations_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MercuryMonitoringSamplingStations_49, 
                style: style_MercuryMonitoringSamplingStations_49,
                popuplayertitle: "Mercury Monitoring Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/MercuryMonitoringSamplingStations_49.png" /> Mercury Monitoring Sampling Stations'
            });
var format_ClassifiedWaterbodySamplingStations_50 = new ol.format.GeoJSON();
var features_ClassifiedWaterbodySamplingStations_50 = format_ClassifiedWaterbodySamplingStations_50.readFeatures(json_ClassifiedWaterbodySamplingStations_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ClassifiedWaterbodySamplingStations_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClassifiedWaterbodySamplingStations_50.addFeatures(features_ClassifiedWaterbodySamplingStations_50);
var lyr_ClassifiedWaterbodySamplingStations_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClassifiedWaterbodySamplingStations_50, 
                style: style_ClassifiedWaterbodySamplingStations_50,
                popuplayertitle: "Classified Waterbody Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/ClassifiedWaterbodySamplingStations_50.png" /> Classified Waterbody Sampling Stations'
            });
var format_AdoptanEsteroSamplingStations_51 = new ol.format.GeoJSON();
var features_AdoptanEsteroSamplingStations_51 = format_AdoptanEsteroSamplingStations_51.readFeatures(json_AdoptanEsteroSamplingStations_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AdoptanEsteroSamplingStations_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdoptanEsteroSamplingStations_51.addFeatures(features_AdoptanEsteroSamplingStations_51);
var lyr_AdoptanEsteroSamplingStations_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdoptanEsteroSamplingStations_51, 
                style: style_AdoptanEsteroSamplingStations_51,
                popuplayertitle: "Adopt-an-Estero Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/AdoptanEsteroSamplingStations_51.png" /> Adopt-an-Estero Sampling Stations'
            });
var format_Airshed_52 = new ol.format.GeoJSON();
var features_Airshed_52 = format_Airshed_52.readFeatures(json_Airshed_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Airshed_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airshed_52.addFeatures(features_Airshed_52);
var lyr_Airshed_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airshed_52, 
                style: style_Airshed_52,
                popuplayertitle: "Airshed",
                interactive: true,
                title: '<img src="styles/legend/Airshed_52.png" /> Airshed'
            });
var format_PrivateEmissionTestingCenter_53 = new ol.format.GeoJSON();
var features_PrivateEmissionTestingCenter_53 = format_PrivateEmissionTestingCenter_53.readFeatures(json_PrivateEmissionTestingCenter_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PrivateEmissionTestingCenter_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateEmissionTestingCenter_53.addFeatures(features_PrivateEmissionTestingCenter_53);
var lyr_PrivateEmissionTestingCenter_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrivateEmissionTestingCenter_53, 
                style: style_PrivateEmissionTestingCenter_53,
                popuplayertitle: "Private Emission Testing Center",
                interactive: true,
                title: '<img src="styles/legend/PrivateEmissionTestingCenter_53.png" /> Private Emission Testing Center'
            });
var format_AirQualityMonitoringStation_54 = new ol.format.GeoJSON();
var features_AirQualityMonitoringStation_54 = format_AirQualityMonitoringStation_54.readFeatures(json_AirQualityMonitoringStation_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AirQualityMonitoringStation_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirQualityMonitoringStation_54.addFeatures(features_AirQualityMonitoringStation_54);
var lyr_AirQualityMonitoringStation_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AirQualityMonitoringStation_54, 
                style: style_AirQualityMonitoringStation_54,
                popuplayertitle: "Air Quality Monitoring Station",
                interactive: true,
                title: '<img src="styles/legend/AirQualityMonitoringStation_54.png" /> Air Quality Monitoring Station'
            });
var format_ECC2022Pointnoduplicates_55 = new ol.format.GeoJSON();
var features_ECC2022Pointnoduplicates_55 = format_ECC2022Pointnoduplicates_55.readFeatures(json_ECC2022Pointnoduplicates_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2022Pointnoduplicates_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2022Pointnoduplicates_55.addFeatures(features_ECC2022Pointnoduplicates_55);
var lyr_ECC2022Pointnoduplicates_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2022Pointnoduplicates_55, 
                style: style_ECC2022Pointnoduplicates_55,
                popuplayertitle: "ECC2022(Point)noduplicates)",
                interactive: true,
                title: '<img src="styles/legend/ECC2022Pointnoduplicates_55.png" /> ECC2022(Point)noduplicates)'
            });
var format_ECC2021Pointnoduplicates_56 = new ol.format.GeoJSON();
var features_ECC2021Pointnoduplicates_56 = format_ECC2021Pointnoduplicates_56.readFeatures(json_ECC2021Pointnoduplicates_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2021Pointnoduplicates_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2021Pointnoduplicates_56.addFeatures(features_ECC2021Pointnoduplicates_56);
var lyr_ECC2021Pointnoduplicates_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2021Pointnoduplicates_56, 
                style: style_ECC2021Pointnoduplicates_56,
                popuplayertitle: "ECC2021(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2021Pointnoduplicates_56.png" /> ECC2021(Point)noduplicates'
            });
var format_ECC2020Pointnoduplicates_57 = new ol.format.GeoJSON();
var features_ECC2020Pointnoduplicates_57 = format_ECC2020Pointnoduplicates_57.readFeatures(json_ECC2020Pointnoduplicates_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2020Pointnoduplicates_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2020Pointnoduplicates_57.addFeatures(features_ECC2020Pointnoduplicates_57);
var lyr_ECC2020Pointnoduplicates_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2020Pointnoduplicates_57, 
                style: style_ECC2020Pointnoduplicates_57,
                popuplayertitle: "ECC2020(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2020Pointnoduplicates_57.png" /> ECC2020(Point)noduplicates'
            });
var format_ECC2019Pointnoduplicates_58 = new ol.format.GeoJSON();
var features_ECC2019Pointnoduplicates_58 = format_ECC2019Pointnoduplicates_58.readFeatures(json_ECC2019Pointnoduplicates_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2019Pointnoduplicates_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2019Pointnoduplicates_58.addFeatures(features_ECC2019Pointnoduplicates_58);
var lyr_ECC2019Pointnoduplicates_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2019Pointnoduplicates_58, 
                style: style_ECC2019Pointnoduplicates_58,
                popuplayertitle: "ECC2019(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2019Pointnoduplicates_58.png" /> ECC2019(Point)noduplicates'
            });
var format_ECC2018Pointnoduplicates_59 = new ol.format.GeoJSON();
var features_ECC2018Pointnoduplicates_59 = format_ECC2018Pointnoduplicates_59.readFeatures(json_ECC2018Pointnoduplicates_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2018Pointnoduplicates_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2018Pointnoduplicates_59.addFeatures(features_ECC2018Pointnoduplicates_59);
var lyr_ECC2018Pointnoduplicates_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2018Pointnoduplicates_59, 
                style: style_ECC2018Pointnoduplicates_59,
                popuplayertitle: "ECC2018(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2018Pointnoduplicates_59.png" /> ECC2018(Point)noduplicates'
            });
var format_ECC2017Pointnoduplicates_60 = new ol.format.GeoJSON();
var features_ECC2017Pointnoduplicates_60 = format_ECC2017Pointnoduplicates_60.readFeatures(json_ECC2017Pointnoduplicates_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2017Pointnoduplicates_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2017Pointnoduplicates_60.addFeatures(features_ECC2017Pointnoduplicates_60);
var lyr_ECC2017Pointnoduplicates_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2017Pointnoduplicates_60, 
                style: style_ECC2017Pointnoduplicates_60,
                popuplayertitle: "ECC2017(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2017Pointnoduplicates_60.png" /> ECC2017(Point)noduplicates'
            });
var format_ECC2016Pointnoduplicates_61 = new ol.format.GeoJSON();
var features_ECC2016Pointnoduplicates_61 = format_ECC2016Pointnoduplicates_61.readFeatures(json_ECC2016Pointnoduplicates_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2016Pointnoduplicates_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2016Pointnoduplicates_61.addFeatures(features_ECC2016Pointnoduplicates_61);
var lyr_ECC2016Pointnoduplicates_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2016Pointnoduplicates_61, 
                style: style_ECC2016Pointnoduplicates_61,
                popuplayertitle: "ECC2016(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2016Pointnoduplicates_61.png" /> ECC2016(Point)noduplicates'
            });
var format_ECC2015Pointnoduplicates_62 = new ol.format.GeoJSON();
var features_ECC2015Pointnoduplicates_62 = format_ECC2015Pointnoduplicates_62.readFeatures(json_ECC2015Pointnoduplicates_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2015Pointnoduplicates_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2015Pointnoduplicates_62.addFeatures(features_ECC2015Pointnoduplicates_62);
var lyr_ECC2015Pointnoduplicates_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2015Pointnoduplicates_62, 
                style: style_ECC2015Pointnoduplicates_62,
                popuplayertitle: "ECC2015(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2015Pointnoduplicates_62.png" /> ECC2015(Point)noduplicates'
            });
var group_ECC = new ol.layer.Group({
                                layers: [lyr_ECC2022Pointnoduplicates_55,lyr_ECC2021Pointnoduplicates_56,lyr_ECC2020Pointnoduplicates_57,lyr_ECC2019Pointnoduplicates_58,lyr_ECC2018Pointnoduplicates_59,lyr_ECC2017Pointnoduplicates_60,lyr_ECC2016Pointnoduplicates_61,lyr_ECC2015Pointnoduplicates_62,],
                                fold: "open",
                                title: "ECC"});
var group_AQMAirQualityManagement = new ol.layer.Group({
                                layers: [lyr_Airshed_52,lyr_PrivateEmissionTestingCenter_53,lyr_AirQualityMonitoringStation_54,],
                                fold: "open",
                                title: "AQM (Air Quality Management)"});
var group_WaterQualitySamplingStations = new ol.layer.Group({
                                layers: [lyr_WQMASamplingStations_43,lyr_RegularMonitoringSamplingStations_44,lyr_RecreationalWatersSamplingStations_45,lyr_PriorityRiverSamplingStations_46,lyr_ModelWaterbodySamplingStations_47,lyr_PriorityRecreationalWatersSamplingStations_48,lyr_MercuryMonitoringSamplingStations_49,lyr_ClassifiedWaterbodySamplingStations_50,lyr_AdoptanEsteroSamplingStations_51,],
                                fold: "open",
                                title: "Water Quality Sampling Stations"});
var group_WaterbodyClassificationBestUsage = new ol.layer.Group({
                                layers: [lyr_WQMAClassification_34,lyr_RegularMonitoringClassification_35,lyr_RecreationalWatersClassification_36,lyr_PriorityRiverClassification_37,lyr_PriorityRecreationalWatersClassification_38,lyr_ModelWaterbodyClassification_39,lyr_MercuryMonitoringClassification_40,lyr_ClassifiedWaterbodiesClassification_41,lyr_AdoptanEsteroClassification_42,],
                                fold: "open",
                                title: "Waterbody Classification (Best Usage)"});
var group_WaterbodyStretch = new ol.layer.Group({
                                layers: [lyr_WQMAStretch_23,lyr_WaterbodyRiverLakeEsteroBayMarine_24,lyr_WaterQualityManagementArea_25,lyr_RegularMonitoringStretch_26,lyr_RecreationalWatersStretch_27,lyr_PriorityRiverStretch_28,lyr_PriorityRecreationalStretch_29,lyr_ModelWaterbodyStetch_30,lyr_MercuryMonitoringStretch_31,lyr_ClassifiedWaterbodiesStretch_32,lyr_AdoptanEsteroStretch_33,],
                                fold: "open",
                                title: "Waterbody (Stretch)"});
var group_ESWMEcologicalSolidWasteManagement = new ol.layer.Group({
                                layers: [lyr_SolidWasteGeneration2022_18,lyr_SanitaryLandfill_19,lyr_MRFLGUInitiated_20,lyr_MRFEMBFunded_21,lyr_DisposalFacility_22,],
                                fold: "open",
                                title: "ESWM (Ecological Solid Waste Management)"});
var group_DENRONECONTROL = new ol.layer.Group({
                                layers: [lyr_R9_Landslides_Susceptibility_9,lyr_R9_Flood_Susceptibility_10,lyr_Critical_Watershed_11,lyr_R9_eNIPAS_12,lyr_R9_NGP_20112021_13,lyr_R9_Priority_Watershed_14,lyr_R9_Tenure_15,],
                                fold: "open",
                                title: "DENR ONE CONTROL"});
var group_PROVINCIALBASEMAP = new ol.layer.Group({
                                layers: [lyr_Isabela_5,lyr_ZamboangadelSur_6,lyr_ZamboangaSibugay_7,lyr_ZamboangadelNorte_8,],
                                fold: "open",
                                title: "PROVINCIAL BASEMAP"});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_EsriTopoWorld_2.setVisible(false);lyr_OpenTopoMap_3.setVisible(false);lyr_OSMStandard_4.setVisible(true);lyr_Isabela_5.setVisible(false);lyr_ZamboangadelSur_6.setVisible(false);lyr_ZamboangaSibugay_7.setVisible(false);lyr_ZamboangadelNorte_8.setVisible(false);lyr_R9_Landslides_Susceptibility_9.setVisible(false);lyr_R9_Flood_Susceptibility_10.setVisible(false);lyr_Critical_Watershed_11.setVisible(false);lyr_R9_eNIPAS_12.setVisible(false);lyr_R9_NGP_20112021_13.setVisible(false);lyr_R9_Priority_Watershed_14.setVisible(false);lyr_R9_Tenure_15.setVisible(false);lyr_EMBIXLaboratory_16.setVisible(false);lyr_EMBIXOffices_17.setVisible(true);lyr_SolidWasteGeneration2022_18.setVisible(false);lyr_SanitaryLandfill_19.setVisible(false);lyr_MRFLGUInitiated_20.setVisible(false);lyr_MRFEMBFunded_21.setVisible(false);lyr_DisposalFacility_22.setVisible(false);lyr_WQMAStretch_23.setVisible(false);lyr_WaterbodyRiverLakeEsteroBayMarine_24.setVisible(false);lyr_WaterQualityManagementArea_25.setVisible(false);lyr_RegularMonitoringStretch_26.setVisible(false);lyr_RecreationalWatersStretch_27.setVisible(false);lyr_PriorityRiverStretch_28.setVisible(false);lyr_PriorityRecreationalStretch_29.setVisible(false);lyr_ModelWaterbodyStetch_30.setVisible(false);lyr_MercuryMonitoringStretch_31.setVisible(false);lyr_ClassifiedWaterbodiesStretch_32.setVisible(false);lyr_AdoptanEsteroStretch_33.setVisible(false);lyr_WQMAClassification_34.setVisible(false);lyr_RegularMonitoringClassification_35.setVisible(false);lyr_RecreationalWatersClassification_36.setVisible(false);lyr_PriorityRiverClassification_37.setVisible(false);lyr_PriorityRecreationalWatersClassification_38.setVisible(false);lyr_ModelWaterbodyClassification_39.setVisible(false);lyr_MercuryMonitoringClassification_40.setVisible(false);lyr_ClassifiedWaterbodiesClassification_41.setVisible(false);lyr_AdoptanEsteroClassification_42.setVisible(false);lyr_WQMASamplingStations_43.setVisible(false);lyr_RegularMonitoringSamplingStations_44.setVisible(false);lyr_RecreationalWatersSamplingStations_45.setVisible(false);lyr_PriorityRiverSamplingStations_46.setVisible(false);lyr_ModelWaterbodySamplingStations_47.setVisible(false);lyr_PriorityRecreationalWatersSamplingStations_48.setVisible(false);lyr_MercuryMonitoringSamplingStations_49.setVisible(false);lyr_ClassifiedWaterbodySamplingStations_50.setVisible(false);lyr_AdoptanEsteroSamplingStations_51.setVisible(false);lyr_Airshed_52.setVisible(false);lyr_PrivateEmissionTestingCenter_53.setVisible(false);lyr_AirQualityMonitoringStation_54.setVisible(false);lyr_ECC2022Pointnoduplicates_55.setVisible(false);lyr_ECC2021Pointnoduplicates_56.setVisible(false);lyr_ECC2020Pointnoduplicates_57.setVisible(false);lyr_ECC2019Pointnoduplicates_58.setVisible(false);lyr_ECC2018Pointnoduplicates_59.setVisible(false);lyr_ECC2017Pointnoduplicates_60.setVisible(false);lyr_ECC2016Pointnoduplicates_61.setVisible(false);lyr_ECC2015Pointnoduplicates_62.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_EsriTopoWorld_2,lyr_OpenTopoMap_3,lyr_OSMStandard_4,group_PROVINCIALBASEMAP,group_DENRONECONTROL,lyr_EMBIXLaboratory_16,lyr_EMBIXOffices_17,group_ESWMEcologicalSolidWasteManagement,group_WaterbodyStretch,group_WaterbodyClassificationBestUsage,group_WaterQualitySamplingStations,group_AQMAirQualityManagement,group_ECC];
lyr_Isabela_5.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', });
lyr_ZamboangadelSur_6.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', });
lyr_ZamboangaSibugay_7.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', });
lyr_ZamboangadelNorte_8.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', });
lyr_R9_Landslides_Susceptibility_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LndslideSu': 'LndslideSu', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_R9_Flood_Susceptibility_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FloodSusc': 'FloodSusc', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Critical_Watershed_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'AREA': 'AREA', 'NAME': 'NAME', 'NUMBER': 'NUMBER', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_R9_eNIPAS_12.set('fieldAliases', {'PANAME': 'PANAME', 'STATUS': 'STATUS', 'HECTARES': 'HECTARES', });
lyr_R9_NGP_20112021_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DISTRICT': 'DISTRICT', 'CENRO': 'CENRO', 'PENRO': 'PENRO', 'BARANGAY': 'BARANGAY', 'NAME_ORG': 'NAME_ORG', 'CONT_PERS': 'CONT_PERS', 'TYPE_ORG': 'TYPE_ORG', 'COMPONENT': 'COMPONENT', 'TENURE': 'TENURE', 'RIV_BASIN': 'RIV_BASIN', 'REMARKS': 'REMARKS', 'AREA': 'AREA', 'MUNI_CITY': 'MUNI_CITY', 'PROVINCE': 'PROVINCE', 'NO_LOA': 'NO_LOA', 'WATERSHED': 'WATERSHED', 'SPECIES': 'SPECIES', 'COMMODITY': 'COMMODITY', 'RES_PERSON': 'RES_PERSON', 'AREA_CD': 'AREA_CD', 'LOT_HOLDER': 'LOT_HOLDER', 'YEAR': 'YEAR', 'ZONE': 'ZONE', 'AREA_GENER': 'AREA_GENER', 'ZONE_CAT': 'ZONE_CAT', 'YR_CD': 'YR_CD', 'PSGC_CD': 'PSGC_CD', 'SITE_ID': 'SITE_ID', 'UNIQ_ID': 'UNIQ_ID', 'SUR_RATE': 'SUR_RATE', 'FUNDING_SO': 'FUNDING_SO', 'SITIO': 'SITIO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'ID': 'ID', 'NAME': 'NAME', 'NORTHING': 'NORTHING', 'EASTING': 'EASTING', 'areax': 'areax', 'sid': 'sid', 'PSGC': 'PSGC', 'Name_of_Or': 'Name_of_Or', 'Area_1': 'Area_1', 'YEAR_': 'YEAR_', 'ZONE_': 'ZONE_', 'CORNER': 'CORNER', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'Area1': 'Area1', 'OBJECTID_4': 'OBJECTID_4', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Le_3': 'Shape_Le_3', 'OBJECTID_5': 'OBJECTID_5', 'OBJECTID_6': 'OBJECTID_6', 'Shape_Le_1': 'Shape_Le_1', 'OBJECTID_7': 'OBJECTID_7', 'DIRECTION': 'DIRECTION', 'Shape_Le_4': 'Shape_Le_4', 'Shape_Le_5': 'Shape_Le_5', 'AREA_AAA': 'AREA_AAA', 'Shape_Le_6': 'Shape_Le_6', 'OID_': 'OID_', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Area_Cal': 'Area_Cal', 'SOIL_pH': 'SOIL_pH', 'SOIL_N': 'SOIL_N', 'SOIL_P': 'SOIL_P', 'SOIL_K': 'SOIL_K', 'AREA_HA': 'AREA_HA', });
lyr_R9_Priority_Watershed_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'AREA': 'AREA', 'NAME': 'NAME', 'NO': 'NO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_R9_Tenure_15.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'TENURE': 'TENURE', 'REGION': 'REGION', 'PENRO': 'PENRO', 'DISTRICT': 'DISTRICT', 'MUNI_CITY': 'MUNI_CITY', 'BARANGAY': 'BARANGAY', 'PO_NAME': 'PO_NAME', 'PO_ALIAS': 'PO_ALIAS', 'PO_ADD': 'PO_ADD', 'REG_NO': 'REG_NO', 'REG_AGNCY': 'REG_AGNCY', 'CBFMA_NO': 'CBFMA_NO', 'DATE_ISSD': 'DATE_ISSD', 'DATE_EXPD': 'DATE_EXPD', 'AREA_HA': 'AREA_HA', 'WATERSHED': 'WATERSHED', 'REMARKS': 'REMARKS', 'CENRO': 'CENRO', 'TEN_CD': 'TEN_CD', 'PSGC_CD': 'PSGC_CD', 'NO_OF_PAR': 'NO_OF_PAR', 'SITE_ID': 'SITE_ID', 'AREA_CD': 'AREA_CD', 'UNIQ_ID': 'UNIQ_ID', 'REG_DTE': 'REG_DTE', 'Shape_Leng': 'Shape_Leng', 'ID': 'ID', 'ID2': 'ID2', 'Id21': 'Id21', 'OBJECTID': 'OBJECTID', 'CTRL_NO': 'CTRL_NO', 'CONT_PERS': 'CONT_PERS', 'HOLD_ADD': 'HOLD_ADD', 'NAME': 'NAME', 'AREA': 'AREA', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_EMBIXLaboratory_16.set('fieldAliases', {'Name': 'Name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_EMBIXOffices_17.set('fieldAliases', {'Name': 'Name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_SolidWasteGeneration2022_18.set('fieldAliases', {'MUNCITY': 'MUNCITY', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', 'SWG2022': 'SWG2022', });
lyr_SanitaryLandfill_19.set('fieldAliases', {'Name': 'Name', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'Status': 'Status', 'Category': 'Category', 'LifeExp(yr': 'LifeExp(yr', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_MRFLGUInitiated_20.set('fieldAliases', {'City/Muni': 'City/Muni', 'Region': 'Region', 'Province': 'Province', 'Barangay': 'Barangay', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'OprStatus': 'OprStatus', });
lyr_MRFEMBFunded_21.set('fieldAliases', {'City/Muni': 'City/Muni', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Region': 'Region', 'Province': 'Province', 'Barangay': 'Barangay', 'OprStatus': 'OprStatus', 'FundStatus': 'FundStatus', 'Coverage': 'Coverage', });
lyr_DisposalFacility_22.set('fieldAliases', {'City/Muni': 'City/Muni', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Region': 'Region', 'Province': 'Province', 'Barangay': 'Barangay', 'SCRP': 'SCRP', 'Status': 'Status', });
lyr_WQMAStretch_23.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Length(m)': 'Length(m)', });
lyr_WaterbodyRiverLakeEsteroBayMarine_24.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Length(m)': 'Length(m)', 'Region': 'Region', });
lyr_WaterQualityManagementArea_25.set('fieldAliases', {'WQMAName': 'WQMAName', 'Region': 'Region', 'Policy': 'Policy', 'Area(hec)': 'Area(hec)', });
lyr_RegularMonitoringStretch_26.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Length(m)': 'Length(m)', 'Region': 'Region', });
lyr_RecreationalWatersStretch_27.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Length(m)': 'Length(m)', });
lyr_PriorityRiverStretch_28.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Length(m)': 'Length(m)', 'Region': 'Region', });
lyr_PriorityRecreationalStretch_29.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Length(m)': 'Length(m)', 'Region': 'Region', });
lyr_ModelWaterbodyStetch_30.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Length(m)': 'Length(m)', });
lyr_MercuryMonitoringStretch_31.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Length(m)': 'Length(m)', });
lyr_ClassifiedWaterbodiesStretch_32.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Length(m)': 'Length(m)', });
lyr_AdoptanEsteroStretch_33.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Length(m)': 'Length(m)', });
lyr_WQMAClassification_34.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Region': 'Region', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_RegularMonitoringClassification_35.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Region': 'Region', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_RecreationalWatersClassification_36.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_PriorityRiverClassification_37.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_PriorityRecreationalWatersClassification_38.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_ModelWaterbodyClassification_39.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Region': 'Region', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_MercuryMonitoringClassification_40.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_ClassifiedWaterbodiesClassification_41.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Region': 'Region', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_AdoptanEsteroClassification_42.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Region': 'Region', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_WQMASamplingStations_43.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_RegularMonitoringSamplingStations_44.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbyType': 'WtrbyType', 'Station': 'Station', 'Class': 'Class', });
lyr_RecreationalWatersSamplingStations_45.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_PriorityRiverSamplingStations_46.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', });
lyr_ModelWaterbodySamplingStations_47.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_PriorityRecreationalWatersSamplingStations_48.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', });
lyr_MercuryMonitoringSamplingStations_49.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_ClassifiedWaterbodySamplingStations_50.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'Station': 'Station', 'Class': 'Class', 'WtrbdyType': 'WtrbdyType', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_AdoptanEsteroSamplingStations_51.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Airshed_52.set('fieldAliases', {'Region': 'Region', 'Airshed': 'Airshed', 'Type': 'Type', 'Policy': 'Policy', 'Category': 'Category', });
lyr_PrivateEmissionTestingCenter_53.set('fieldAliases', {'Name': 'Name', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'Status': 'Status', 'Opacimeter': 'Opacimeter', 'GasAnlysr': 'GasAnlysr', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_AirQualityMonitoringStation_54.set('fieldAliases', {'StnName': 'StnName', 'Region': 'Region', 'AreaType': 'AreaType', 'StnStype': 'StnStype', 'StnAddress': 'StnAddress', 'OprStatus': 'OprStatus', 'CalStatus': 'CalStatus', 'TSP': 'TSP', 'PM10': 'PM10', 'PM2.5': 'PM2.5', 'SO2': 'SO2', 'NO2': 'NO2', 'O3': 'O3', 'CO': 'CO', 'HG': 'HG', 'MET': 'MET', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_ECC2022Pointnoduplicates_55.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2021Pointnoduplicates_56.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2020Pointnoduplicates_57.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2019Pointnoduplicates_58.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2018Pointnoduplicates_59.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2017Pointnoduplicates_60.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2016Pointnoduplicates_61.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2015Pointnoduplicates_62.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_Isabela_5.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'ID_3': 'Range', 'NAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', });
lyr_ZamboangadelSur_6.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'ID_3': 'Range', 'NAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', });
lyr_ZamboangaSibugay_7.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'ID_3': 'Range', 'NAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', });
lyr_ZamboangadelNorte_8.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'ID_3': 'Range', 'NAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', });
lyr_R9_Landslides_Susceptibility_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'LndslideSu': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_R9_Flood_Susceptibility_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'FloodSusc': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Critical_Watershed_11.set('fieldImages', {'OBJECTID': '', 'ID': '', 'GRIDCODE': '', 'AREA': '', 'NAME': '', 'NUMBER': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_R9_eNIPAS_12.set('fieldImages', {'PANAME': '', 'STATUS': '', 'HECTARES': '', });
lyr_R9_NGP_20112021_13.set('fieldImages', {'OBJECTID': '', 'REGION': '', 'DISTRICT': '', 'CENRO': '', 'PENRO': '', 'BARANGAY': '', 'NAME_ORG': '', 'CONT_PERS': '', 'TYPE_ORG': '', 'COMPONENT': '', 'TENURE': '', 'RIV_BASIN': '', 'REMARKS': '', 'AREA': '', 'MUNI_CITY': '', 'PROVINCE': '', 'NO_LOA': '', 'WATERSHED': '', 'SPECIES': '', 'COMMODITY': '', 'RES_PERSON': '', 'AREA_CD': '', 'LOT_HOLDER': '', 'YEAR': '', 'ZONE': '', 'AREA_GENER': '', 'ZONE_CAT': '', 'YR_CD': '', 'PSGC_CD': '', 'SITE_ID': '', 'UNIQ_ID': '', 'SUR_RATE': '', 'FUNDING_SO': '', 'SITIO': '', 'Shape_Leng': '', 'Shape_Area': '', 'OBJECTID_1': '', 'OBJECTID_2': '', 'OBJECTID_3': '', 'ID': '', 'NAME': '', 'NORTHING': '', 'EASTING': '', 'areax': '', 'sid': '', 'PSGC': '', 'Name_of_Or': '', 'Area_1': '', 'YEAR_': '', 'ZONE_': '', 'CORNER': '', 'LONGITUDE': '', 'LATITUDE': '', 'Area1': '', 'OBJECTID_4': '', 'Shape_Le_2': '', 'Shape_Le_3': '', 'OBJECTID_5': '', 'OBJECTID_6': '', 'Shape_Le_1': '', 'OBJECTID_7': '', 'DIRECTION': '', 'Shape_Le_4': '', 'Shape_Le_5': '', 'AREA_AAA': '', 'Shape_Le_6': '', 'OID_': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Area_Cal': '', 'SOIL_pH': '', 'SOIL_N': '', 'SOIL_P': '', 'SOIL_K': '', 'AREA_HA': '', });
lyr_R9_Priority_Watershed_14.set('fieldImages', {'OBJECTID': '', 'ID': '', 'GRIDCODE': '', 'AREA': '', 'NAME': '', 'NO': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_R9_Tenure_15.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID_2': '', 'TENURE': '', 'REGION': '', 'PENRO': '', 'DISTRICT': '', 'MUNI_CITY': '', 'BARANGAY': '', 'PO_NAME': '', 'PO_ALIAS': '', 'PO_ADD': '', 'REG_NO': '', 'REG_AGNCY': '', 'CBFMA_NO': '', 'DATE_ISSD': '', 'DATE_EXPD': '', 'AREA_HA': '', 'WATERSHED': '', 'REMARKS': '', 'CENRO': '', 'TEN_CD': '', 'PSGC_CD': '', 'NO_OF_PAR': '', 'SITE_ID': '', 'AREA_CD': '', 'UNIQ_ID': '', 'REG_DTE': '', 'Shape_Leng': '', 'ID': '', 'ID2': '', 'Id21': '', 'OBJECTID': '', 'CTRL_NO': '', 'CONT_PERS': '', 'HOLD_ADD': '', 'NAME': '', 'AREA': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_EMBIXLaboratory_16.set('fieldImages', {'Name': '', 'Longitude': '', 'Latitude': '', });
lyr_EMBIXOffices_17.set('fieldImages', {'Name': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_SolidWasteGeneration2022_18.set('fieldImages', {'MUNCITY': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', 'SWG2022': 'TextEdit', });
lyr_SanitaryLandfill_19.set('fieldImages', {'Name': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'Status': '', 'Category': '', 'LifeExp(yr': '', 'Longitude': '', 'Latitude': '', });
lyr_MRFLGUInitiated_20.set('fieldImages', {'City/Muni': '', 'Region': '', 'Province': '', 'Barangay': '', 'Longitude': '', 'Latitude': '', 'OprStatus': '', });
lyr_MRFEMBFunded_21.set('fieldImages', {'City/Muni': '', 'Longitude': '', 'Latitude': '', 'Region': '', 'Province': '', 'Barangay': '', 'OprStatus': '', 'FundStatus': '', 'Coverage': '', });
lyr_DisposalFacility_22.set('fieldImages', {'City/Muni': '', 'Longitude': '', 'Latitude': '', 'Region': '', 'Province': '', 'Barangay': '', 'SCRP': '', 'Status': '', });
lyr_WQMAStretch_23.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Length(m)': '', });
lyr_WaterbodyRiverLakeEsteroBayMarine_24.set('fieldImages', {'WtrbdyName': '', 'Length(m)': '', 'Region': '', });
lyr_WaterQualityManagementArea_25.set('fieldImages', {'WQMAName': 'TextEdit', 'Region': 'Range', 'Policy': 'TextEdit', 'Area(hec)': 'TextEdit', });
lyr_RegularMonitoringStretch_26.set('fieldImages', {'WtrbdyName': '', 'Length(m)': '', 'Region': '', });
lyr_RecreationalWatersStretch_27.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Length(m)': '', });
lyr_PriorityRiverStretch_28.set('fieldImages', {'WtrbdyName': '', 'Length(m)': '', 'Region': '', });
lyr_PriorityRecreationalStretch_29.set('fieldImages', {'WtrbdyName': '', 'Length(m)': '', 'Region': '', });
lyr_ModelWaterbodyStetch_30.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Length(m)': '', });
lyr_MercuryMonitoringStretch_31.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Length(m)': '', });
lyr_ClassifiedWaterbodiesStretch_32.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Length(m)': '', });
lyr_AdoptanEsteroStretch_33.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Length(m)': '', });
lyr_WQMAClassification_34.set('fieldImages', {'WtrbdyName': '', 'WtrbdyType': '', 'Class': '', 'Region': '', 'Station': '', 'Length(m)': '', });
lyr_RegularMonitoringClassification_35.set('fieldImages', {'WtrbdyName': '', 'WtrbdyType': '', 'Class': '', 'Region': '', 'Station': '', 'Length(m)': '', });
lyr_RecreationalWatersClassification_36.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'WtrbdyType': '', 'Class': '', 'Station': '', 'Length(m)': '', });
lyr_PriorityRiverClassification_37.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'WtrbdyType': '', 'Class': '', 'Station': '', 'Length(m)': '', });
lyr_PriorityRecreationalWatersClassification_38.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'WtrbdyType': '', 'Class': '', 'Station': '', 'Length(m)': '', });
lyr_ModelWaterbodyClassification_39.set('fieldImages', {'WtrbdyName': '', 'WtrbdyType': '', 'Class': '', 'Region': '', 'Station': '', 'Length(m)': '', });
lyr_MercuryMonitoringClassification_40.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'WtrbdyType': '', 'Class': '', 'Station': '', 'Length(m)': '', });
lyr_ClassifiedWaterbodiesClassification_41.set('fieldImages', {'WtrbdyName': '', 'WtrbdyType': '', 'Class': '', 'Region': '', 'Station': '', 'Length(m)': '', });
lyr_AdoptanEsteroClassification_42.set('fieldImages', {'WtrbdyName': '', 'WtrbdyType': '', 'Class': '', 'Region': '', 'Station': '', 'Length(m)': '', });
lyr_WQMASamplingStations_43.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', 'Longitude': '', 'Latitude': '', });
lyr_RegularMonitoringSamplingStations_44.set('fieldImages', {'WtrbdyName': '', 'Longitude': '', 'Latitude': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbyType': '', 'Station': '', 'Class': '', });
lyr_RecreationalWatersSamplingStations_45.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', 'Longitude': '', 'Latitude': '', });
lyr_PriorityRiverSamplingStations_46.set('fieldImages', {'WtrbdyName': '', 'Longitude': '', 'Latitude': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', });
lyr_ModelWaterbodySamplingStations_47.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', 'Longitude': '', 'Latitude': '', });
lyr_PriorityRecreationalWatersSamplingStations_48.set('fieldImages', {'WtrbdyName': '', 'Longitude': '', 'Latitude': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', });
lyr_MercuryMonitoringSamplingStations_49.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', 'Longitude': '', 'Latitude': '', });
lyr_ClassifiedWaterbodySamplingStations_50.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'Station': '', 'Class': '', 'WtrbdyType': '', 'Longitude': '', 'Latitude': '', });
lyr_AdoptanEsteroSamplingStations_51.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', 'Longitude': '', 'Latitude': '', });
lyr_Airshed_52.set('fieldImages', {'Region': 'Range', 'Airshed': 'TextEdit', 'Type': 'TextEdit', 'Policy': 'TextEdit', 'Category': 'TextEdit', });
lyr_PrivateEmissionTestingCenter_53.set('fieldImages', {'Name': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'Status': '', 'Opacimeter': '', 'GasAnlysr': '', 'Longitude': '', 'Latitude': '', });
lyr_AirQualityMonitoringStation_54.set('fieldImages', {'StnName': '', 'Region': '', 'AreaType': '', 'StnStype': '', 'StnAddress': '', 'OprStatus': '', 'CalStatus': '', 'TSP': '', 'PM10': '', 'PM2.5': '', 'SO2': '', 'NO2': '', 'O3': '', 'CO': '', 'HG': '', 'MET': '', 'Longitude': '', 'Latitude': '', });
lyr_ECC2022Pointnoduplicates_55.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_ECC2021Pointnoduplicates_56.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_ECC2020Pointnoduplicates_57.set('fieldImages', {'ECCNo': 'TextEdit', 'ProjGUID': 'TextEdit', 'Region': 'TextEdit', 'ProjType': 'TextEdit', 'ProjSubTyp': 'TextEdit', 'ProjSpecTy': 'TextEdit', 'ProjSpecSu': 'TextEdit', 'ProjName': 'TextEdit', 'MailAdd': 'TextEdit', 'Rep': 'TextEdit', 'Email': 'TextEdit', 'ZoneClass': 'TextEdit', 'Mun': 'TextEdit', 'Province': 'TextEdit', 'LandArea': 'TextEdit', 'Descript': 'TextEdit', 'ProjSize': 'TextEdit', 'NoEmployee': 'TextEdit', 'ProjCost': 'TextEdit', 'AreaType': 'TextEdit', 'Area': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', });
lyr_ECC2019Pointnoduplicates_58.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_ECC2018Pointnoduplicates_59.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_ECC2017Pointnoduplicates_60.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_ECC2016Pointnoduplicates_61.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_ECC2015Pointnoduplicates_62.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_Isabela_5.set('fieldLabels', {'ID_0': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'ID_1': 'hidden field', 'NAME_1': 'inline label - visible with data', 'ID_2': 'hidden field', 'NAME_2': 'inline label - visible with data', 'ID_3': 'hidden field', 'NAME_3': 'inline label - visible with data', 'NL_NAME_3': 'hidden field', 'VARNAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'PROVINCE': 'hidden field', 'REGION': 'hidden field', });
lyr_ZamboangadelSur_6.set('fieldLabels', {'ID_0': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'ID_1': 'hidden field', 'NAME_1': 'inline label - visible with data', 'ID_2': 'hidden field', 'NAME_2': 'inline label - visible with data', 'ID_3': 'hidden field', 'NAME_3': 'inline label - visible with data', 'NL_NAME_3': 'hidden field', 'VARNAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'PROVINCE': 'hidden field', 'REGION': 'hidden field', });
lyr_ZamboangaSibugay_7.set('fieldLabels', {'ID_0': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'ID_1': 'hidden field', 'NAME_1': 'inline label - visible with data', 'ID_2': 'hidden field', 'NAME_2': 'inline label - visible with data', 'ID_3': 'hidden field', 'NAME_3': 'inline label - visible with data', 'NL_NAME_3': 'hidden field', 'VARNAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'PROVINCE': 'hidden field', 'REGION': 'hidden field', });
lyr_ZamboangadelNorte_8.set('fieldLabels', {'ID_0': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'ID_1': 'hidden field', 'NAME_1': 'inline label - visible with data', 'ID_2': 'hidden field', 'NAME_2': 'inline label - visible with data', 'ID_3': 'hidden field', 'NAME_3': 'inline label - visible with data', 'NL_NAME_3': 'hidden field', 'VARNAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'PROVINCE': 'hidden field', 'REGION': 'hidden field', });
lyr_R9_Landslides_Susceptibility_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'LndslideSu': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_R9_Flood_Susceptibility_10.set('fieldLabels', {'OBJECTID': 'hidden field', 'FloodSusc': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Critical_Watershed_11.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'GRIDCODE': 'hidden field', 'AREA': 'hidden field', 'NAME': 'hidden field', 'NUMBER': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_R9_eNIPAS_12.set('fieldLabels', {'PANAME': 'hidden field', 'STATUS': 'hidden field', 'HECTARES': 'hidden field', });
lyr_R9_NGP_20112021_13.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'hidden field', 'DISTRICT': 'hidden field', 'CENRO': 'hidden field', 'PENRO': 'hidden field', 'BARANGAY': 'hidden field', 'NAME_ORG': 'hidden field', 'CONT_PERS': 'hidden field', 'TYPE_ORG': 'hidden field', 'COMPONENT': 'hidden field', 'TENURE': 'hidden field', 'RIV_BASIN': 'hidden field', 'REMARKS': 'hidden field', 'AREA': 'hidden field', 'MUNI_CITY': 'hidden field', 'PROVINCE': 'hidden field', 'NO_LOA': 'hidden field', 'WATERSHED': 'hidden field', 'SPECIES': 'hidden field', 'COMMODITY': 'hidden field', 'RES_PERSON': 'hidden field', 'AREA_CD': 'hidden field', 'LOT_HOLDER': 'hidden field', 'YEAR': 'hidden field', 'ZONE': 'hidden field', 'AREA_GENER': 'hidden field', 'ZONE_CAT': 'hidden field', 'YR_CD': 'hidden field', 'PSGC_CD': 'hidden field', 'SITE_ID': 'hidden field', 'UNIQ_ID': 'hidden field', 'SUR_RATE': 'hidden field', 'FUNDING_SO': 'hidden field', 'SITIO': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID_3': 'hidden field', 'ID': 'hidden field', 'NAME': 'hidden field', 'NORTHING': 'hidden field', 'EASTING': 'hidden field', 'areax': 'hidden field', 'sid': 'hidden field', 'PSGC': 'hidden field', 'Name_of_Or': 'hidden field', 'Area_1': 'hidden field', 'YEAR_': 'hidden field', 'ZONE_': 'hidden field', 'CORNER': 'hidden field', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'Area1': 'hidden field', 'OBJECTID_4': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Le_3': 'hidden field', 'OBJECTID_5': 'hidden field', 'OBJECTID_6': 'hidden field', 'Shape_Le_1': 'hidden field', 'OBJECTID_7': 'hidden field', 'DIRECTION': 'hidden field', 'Shape_Le_4': 'hidden field', 'Shape_Le_5': 'hidden field', 'AREA_AAA': 'hidden field', 'Shape_Le_6': 'hidden field', 'OID_': 'hidden field', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'AltMode': 'hidden field', 'Base': 'hidden field', 'Clamped': 'hidden field', 'Extruded': 'hidden field', 'Snippet': 'hidden field', 'PopupInfo': 'hidden field', 'Area_Cal': 'hidden field', 'SOIL_pH': 'hidden field', 'SOIL_N': 'hidden field', 'SOIL_P': 'hidden field', 'SOIL_K': 'hidden field', 'AREA_HA': 'hidden field', });
lyr_R9_Priority_Watershed_14.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'GRIDCODE': 'hidden field', 'AREA': 'hidden field', 'NAME': 'hidden field', 'NO': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_R9_Tenure_15.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'TENURE': 'hidden field', 'REGION': 'hidden field', 'PENRO': 'hidden field', 'DISTRICT': 'hidden field', 'MUNI_CITY': 'hidden field', 'BARANGAY': 'hidden field', 'PO_NAME': 'hidden field', 'PO_ALIAS': 'hidden field', 'PO_ADD': 'hidden field', 'REG_NO': 'hidden field', 'REG_AGNCY': 'hidden field', 'CBFMA_NO': 'hidden field', 'DATE_ISSD': 'hidden field', 'DATE_EXPD': 'hidden field', 'AREA_HA': 'hidden field', 'WATERSHED': 'hidden field', 'REMARKS': 'hidden field', 'CENRO': 'hidden field', 'TEN_CD': 'hidden field', 'PSGC_CD': 'hidden field', 'NO_OF_PAR': 'hidden field', 'SITE_ID': 'hidden field', 'AREA_CD': 'hidden field', 'UNIQ_ID': 'hidden field', 'REG_DTE': 'hidden field', 'Shape_Leng': 'hidden field', 'ID': 'hidden field', 'ID2': 'hidden field', 'Id21': 'hidden field', 'OBJECTID': 'hidden field', 'CTRL_NO': 'hidden field', 'CONT_PERS': 'hidden field', 'HOLD_ADD': 'hidden field', 'NAME': 'hidden field', 'AREA': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_EMBIXLaboratory_16.set('fieldLabels', {'Name': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_EMBIXOffices_17.set('fieldLabels', {'Name': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_SolidWasteGeneration2022_18.set('fieldLabels', {'MUNCITY': 'inline label - visible with data', 'PROVINCE': 'inline label - visible with data', 'REGION': 'inline label - visible with data', 'SWG2022': 'inline label - visible with data', });
lyr_SanitaryLandfill_19.set('fieldLabels', {'Name': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Category': 'inline label - visible with data', 'LifeExp(yr': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_MRFLGUInitiated_20.set('fieldLabels', {'City/Muni': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'OprStatus': 'inline label - visible with data', });
lyr_MRFEMBFunded_21.set('fieldLabels', {'City/Muni': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'OprStatus': 'inline label - visible with data', 'FundStatus': 'inline label - visible with data', 'Coverage': 'inline label - visible with data', });
lyr_DisposalFacility_22.set('fieldLabels', {'City/Muni': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'SCRP': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_WQMAStretch_23.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_WaterbodyRiverLakeEsteroBayMarine_24.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', 'Region': 'inline label - visible with data', });
lyr_WaterQualityManagementArea_25.set('fieldLabels', {'WQMAName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Policy': 'inline label - visible with data', 'Area(hec)': 'inline label - visible with data', });
lyr_RegularMonitoringStretch_26.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', 'Region': 'inline label - visible with data', });
lyr_RecreationalWatersStretch_27.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_PriorityRiverStretch_28.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', 'Region': 'inline label - visible with data', });
lyr_PriorityRecreationalStretch_29.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', 'Region': 'inline label - visible with data', });
lyr_ModelWaterbodyStetch_30.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_MercuryMonitoringStretch_31.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_ClassifiedWaterbodiesStretch_32.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_AdoptanEsteroStretch_33.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_WQMAClassification_34.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_RegularMonitoringClassification_35.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_RecreationalWatersClassification_36.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_PriorityRiverClassification_37.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_PriorityRecreationalWatersClassification_38.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_ModelWaterbodyClassification_39.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_MercuryMonitoringClassification_40.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_ClassifiedWaterbodiesClassification_41.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_AdoptanEsteroClassification_42.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_WQMASamplingStations_43.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_RegularMonitoringSamplingStations_44.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', });
lyr_RecreationalWatersSamplingStations_45.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_PriorityRiverSamplingStations_46.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', });
lyr_ModelWaterbodySamplingStations_47.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_PriorityRecreationalWatersSamplingStations_48.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', });
lyr_MercuryMonitoringSamplingStations_49.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_ClassifiedWaterbodySamplingStations_50.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_AdoptanEsteroSamplingStations_51.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_Airshed_52.set('fieldLabels', {'Region': 'inline label - visible with data', 'Airshed': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Policy': 'inline label - visible with data', 'Category': 'inline label - visible with data', });
lyr_PrivateEmissionTestingCenter_53.set('fieldLabels', {'Name': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Opacimeter': 'inline label - visible with data', 'GasAnlysr': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_AirQualityMonitoringStation_54.set('fieldLabels', {'StnName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'AreaType': 'inline label - visible with data', 'StnStype': 'inline label - visible with data', 'StnAddress': 'inline label - visible with data', 'OprStatus': 'inline label - visible with data', 'CalStatus': 'inline label - visible with data', 'TSP': 'inline label - visible with data', 'PM10': 'inline label - visible with data', 'PM2.5': 'inline label - visible with data', 'SO2': 'inline label - visible with data', 'NO2': 'inline label - visible with data', 'O3': 'inline label - visible with data', 'CO': 'inline label - visible with data', 'HG': 'inline label - visible with data', 'MET': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_ECC2022Pointnoduplicates_55.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2021Pointnoduplicates_56.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2020Pointnoduplicates_57.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2019Pointnoduplicates_58.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2018Pointnoduplicates_59.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2017Pointnoduplicates_60.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2016Pointnoduplicates_61.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2015Pointnoduplicates_62.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2015Pointnoduplicates_62.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});