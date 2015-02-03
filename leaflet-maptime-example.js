/*
 * This is an example of using Leaflet to style map data. The data is from Urban Reviewer:
 *   http://www.urbanreviewer.org/#map=16/40.6797/-73.9168&plan=Saratoga+Square
 *
 * The GeoJSON is available on GitHub:
 *   https://github.com/596acres/urbanreviewer/blob/gh-pages/data/geojson/us/ny/nyc/Brooklyn/Saratoga%20Square.geojson
 *
 * The data is embedded in the HTML portion of the bin for simplicity's sake.
 */
$(document).ready(function () {
  // Boilerplate: Create an OSM tile layer
  var openStreetMap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  });

  // Boilerplate: Create a map and add the OSM layer to it.
  var map = new L.Map('map', {
    layers: [openStreetMap],
    center: new L.LatLng(40.680288, -73.916563),
    zoom: 16
  });

  // Here's where we add our GeoJSON file and style it
  L.geoJson(parcels, {
    style: {
      color: '#0f0',
      stroke: false
    }
  }).addTo(map);
});