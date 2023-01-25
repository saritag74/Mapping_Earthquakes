// Add console.log to check to see if our code is working.
console.log("working");

API_KEY = "pk.eyJ1Ijoic2FyaXRhZzc0IiwiYSI6ImNsY3F4MGU3aTBhY3EzcHF2cjIxMHVnZGcifQ.T0V0REXzVz9Py0z2gYBSFg"

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1Ijoic2FyaXRhZzc0IiwiYSI6ImNsY3F4MGU3aTBhY3EzcHF2cjIxMHVnZGcifQ.T0V0REXzVz9Py0z2gYBSSFg"
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

