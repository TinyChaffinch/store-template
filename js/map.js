ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.950231, 30.317569],
        zoom: 16
    });
    var myPlacemark = new ymaps.Placemark([59.950231, 30.317569], null, {
        preset: 'islands#blueDotIcon'
    });
    myMap.geoObjects.add(myPlacemark);
}