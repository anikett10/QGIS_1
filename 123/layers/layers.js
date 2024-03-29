var wms_layers = [];

var format_Indian_States_0 = new ol.format.GeoJSON();
var features_Indian_States_0 = format_Indian_States_0.readFeatures(json_Indian_States_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indian_States_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indian_States_0.addFeatures(features_Indian_States_0);
var lyr_Indian_States_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Indian_States_0, 
                style: style_Indian_States_0,
                popuplayertitle: "Indian_States",
                interactive: true,
    title: 'Indian_States<br />\
    <img src="styles/legend/Indian_States_0_0.png" /> Andaman & Nicobar Island<br />\
    <img src="styles/legend/Indian_States_0_1.png" /> Andhra Pradesh<br />\
    <img src="styles/legend/Indian_States_0_2.png" /> Arunanchal Pradesh<br />\
    <img src="styles/legend/Indian_States_0_3.png" /> Assam<br />\
    <img src="styles/legend/Indian_States_0_4.png" /> Bihar<br />\
    <img src="styles/legend/Indian_States_0_5.png" /> Chandigarh<br />\
    <img src="styles/legend/Indian_States_0_6.png" /> Chhattisgarh<br />\
    <img src="styles/legend/Indian_States_0_7.png" /> Dadara & Nagar Havelli<br />\
    <img src="styles/legend/Indian_States_0_8.png" /> Daman & Diu<br />\
    <img src="styles/legend/Indian_States_0_9.png" /> Goa<br />\
    <img src="styles/legend/Indian_States_0_10.png" /> Gujarat<br />\
    <img src="styles/legend/Indian_States_0_11.png" /> Haryana<br />\
    <img src="styles/legend/Indian_States_0_12.png" /> Himachal Pradesh<br />\
    <img src="styles/legend/Indian_States_0_13.png" /> Jammu & Kashmir<br />\
    <img src="styles/legend/Indian_States_0_14.png" /> Jharkhand<br />\
    <img src="styles/legend/Indian_States_0_15.png" /> Karnataka<br />\
    <img src="styles/legend/Indian_States_0_16.png" /> Kerala<br />\
    <img src="styles/legend/Indian_States_0_17.png" /> Lakshadweep<br />\
    <img src="styles/legend/Indian_States_0_18.png" /> Madhya Pradesh<br />\
    <img src="styles/legend/Indian_States_0_19.png" /> Maharashtra<br />\
    <img src="styles/legend/Indian_States_0_20.png" /> Manipur<br />\
    <img src="styles/legend/Indian_States_0_21.png" /> Meghalaya<br />\
    <img src="styles/legend/Indian_States_0_22.png" /> Mizoram<br />\
    <img src="styles/legend/Indian_States_0_23.png" /> Nagaland<br />\
    <img src="styles/legend/Indian_States_0_24.png" /> NCT of Delhi<br />\
    <img src="styles/legend/Indian_States_0_25.png" /> Odisha<br />\
    <img src="styles/legend/Indian_States_0_26.png" /> Puducherry<br />\
    <img src="styles/legend/Indian_States_0_27.png" /> Punjab<br />\
    <img src="styles/legend/Indian_States_0_28.png" /> Rajasthan<br />\
    <img src="styles/legend/Indian_States_0_29.png" /> Sikkim<br />\
    <img src="styles/legend/Indian_States_0_30.png" /> Tamil Nadu<br />\
    <img src="styles/legend/Indian_States_0_31.png" /> Telangana<br />\
    <img src="styles/legend/Indian_States_0_32.png" /> Tripura<br />\
    <img src="styles/legend/Indian_States_0_33.png" /> Uttar Pradesh<br />\
    <img src="styles/legend/Indian_States_0_34.png" /> Uttarakhand<br />\
    <img src="styles/legend/Indian_States_0_35.png" /> West Bengal<br />\
    <img src="styles/legend/Indian_States_0_36.png" /> <br />'
        });

lyr_Indian_States_0.setVisible(true);
var layersList = [lyr_Indian_States_0];
lyr_Indian_States_0.set('fieldAliases', {'st_nm': 'st_nm', 'Child Labour in India_Category of States': 'Child Labour in India_Category of States', 'Child Labour in India_Agriculture': 'Child Labour in India_Agriculture', 'Child Labour in India_Manufacturing': 'Child Labour in India_Manufacturing', 'Child Labour in India_Construction': 'Child Labour in India_Construction', 'Child Labour in India_Trade Hotels & Restaurants': 'Child Labour in India_Trade Hotels & Restaurants', 'Child Labour in India_Community, Social and Personal Services': 'Child Labour in India_Community, Social and Personal Services', 'Child Labour in India_Others': 'Child Labour in India_Others', 'Child Labour in India_Total': 'Child Labour in India_Total', });
lyr_Indian_States_0.set('fieldImages', {'st_nm': 'TextEdit', 'Child Labour in India_Category of States': 'TextEdit', 'Child Labour in India_Agriculture': 'TextEdit', 'Child Labour in India_Manufacturing': 'TextEdit', 'Child Labour in India_Construction': 'TextEdit', 'Child Labour in India_Trade Hotels & Restaurants': 'TextEdit', 'Child Labour in India_Community, Social and Personal Services': 'TextEdit', 'Child Labour in India_Others': 'TextEdit', 'Child Labour in India_Total': 'Range', });
lyr_Indian_States_0.set('fieldLabels', {'st_nm': 'no label', 'Child Labour in India_Category of States': 'no label', 'Child Labour in India_Agriculture': 'no label', 'Child Labour in India_Manufacturing': 'no label', 'Child Labour in India_Construction': 'no label', 'Child Labour in India_Trade Hotels & Restaurants': 'no label', 'Child Labour in India_Community, Social and Personal Services': 'no label', 'Child Labour in India_Others': 'no label', 'Child Labour in India_Total': 'no label', });
lyr_Indian_States_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});