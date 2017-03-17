
var bingGeobuf = (function () {

    var bingGeobuf = function () {
        this.map = new Microsoft.Maps.Map(document.querySelector("#map"), {
            credentials : 'AtdwAaBSnuace6JXHBTvVptnkPHfkrovH-OKVwNm4xYpokb3wAcuSDqHSxtuIgDO',
            center: new Microsoft.Maps.Location(0,0),
            zoom: 1
        });

        Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function () {
            fechBuffer(this.geoData);
        });    
    }

    var fechBuffer = function (geoData) {

        fetch("http://localhost:3000/service/getCountries").then(function(response){
            // return response.json();
            return response.arrayBuffer();
        })
        .then(function(geoBuffer){
            document.querySelector(".info-text").innerHTML = 
                "Data transferred: " + parseFloat(geoBuffer.byteLength / 1024 / 1024).toPrecision(2) + "MB <br />"
                + "Originally size: 23.5 MB";
            var geojson = geobuf.decode(new Pbf(geoBuffer));
            var geoms = Microsoft.Maps.GeoJson.read(geojson);
            client.map.entities.push(geoms);
        });
    }

    return bingGeobuf;
})();

var client;
document.onreadystatechange = function() {
    if (document.readyState === "complete")
        client = new bingGeobuf();
};