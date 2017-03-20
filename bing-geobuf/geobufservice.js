const pbf = require("pbf")
const geobuf = require("geobuf")
const fs = require("fs");

exports.bingBuf = () => {
  if (fs.existsSync("./public/countries.json")) {
    var countries = fs.readFileSync("./public/countries.json")
    var geoJson = JSON.parse(countries)
    var content = geobuf.encode(geoJson, new pbf())
    var buffer = Buffer.from(content)
    return buffer
  }
}