AmCharts.makeChart("map",{
    "type": "map",
    "addClassNames": true,
    "fontSize": 15,
    "color": "#FFFFFF",
    "projection": "mercator",
    "backgroundAlpha": 1,
    "backgroundColor": "rgba(0,0,0,0)",
    "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true,
        "areas": [
            {
                "id": "FR",
                "title": "France",
                "color": "#ffffcc",
                "class" : "FR"
            },
            {
                "id": "GB",
                "title": "United Kingdom",
                "color": "#0f5ca0"
            },
            {
                "id": "ID",
                "title": "Indonesia",
                "color": "#a5d1f4"
            },
            {
                "id": "JP",
                "title": "Japan",
                "color": "#d7847e"
            }
        ]
    },
    "areasSettings": {
        "color": "rgba(187,255,228,1)",
        "outlineColor": "rgba(0,0,0,0)",
        "rollOverOutlineColor": "rgba(0,0,0,0)",
        "rollOverBrightness": 20,
        "selectedBrightness": 20,
        "selectable": true,
        "unlistedAreasAlpha": 0,
        "unlistedAreasOutlineAlpha": 0
    },
    "imagesSettings": {
        "alpha": 1,
        "color": "rgba(187,255,228,1)",
        "outlineAlpha": 0,
        "rollOverOutlineAlpha": 0,
        "outlineColor": "rgba(0,0,0,0)",
        "rollOverBrightness": 20,
        "selectedBrightness": 20,
        "selectable": true
    },
    "zoomControl": {
        "zoomControlEnabled": false,
        "homeButtonEnabled": false,
        "panControlEnabled": false
    }
});
$(function() {
    $('.item').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
            $(this).stop().addClass('index_example');
        }
        else{
            $(this).stop().removeClass('index_example');
        }
    });
    $('.logo').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
            $(this).stop().addClass('logo_show');
        }
        else{
            $(this).stop().removeClass('logo_show');
        }
    });
});