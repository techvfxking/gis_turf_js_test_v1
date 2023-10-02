let map = undefined;
let osm = undefined;
const ShowMap = () => {
    let latLngArr = [22.424140180440386, 88.4039354324341]
    if (map) {
      map.remove()
    };

    map = L.map('mapSection').setView(latLngArr, 13);
    osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 22,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    osm.addTo(map);
    let homeTownMarker = new L.marker(latLngArr);
    homeTownMarker.addTo(map);
    let homeTownPopup = new L.popup()
        .setLatLng(latLngArr)
        .setContent(
            `The location coordinates is: <br>Lat: ${latLngArr[0]}<br>Lng: ${latLngArr[1]}`
    );
    homeTownMarker.bindPopup(homeTownPopup);
    map.on('click', (e) => {
        let dynamicPopup = L.popup()
        dynamicPopup
          .setLatLng(e.latlng)
          .setContent(
            `The location coordinates is:  <br>Lat: ${e.latlng.lat}<br>Lng: ${e.latlng.lng}`
          )
          .openOn(map)
    });
  
  L.geoJSON(indiaGeoJsonData).addTo(map);

};

const Main = () => {
    ShowMap();
};

Main();
