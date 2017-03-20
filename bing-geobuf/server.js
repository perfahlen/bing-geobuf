const express = require('express')
const bmBuf = require('./geobufservice')
const app = express()

var port = process.env.PORT || 1337;

app.use(express.static('public'))

app.get('/service/getCountries', function (req, response) {
    var content = bmBuf.bingBuf()
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Request-Method', '*')
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
    response.setHeader('Access-Control-Allow-Headers', '*')
    response.writeHeader(200, { 'content-type': 'application/x-protobuf' })
    response.end(content)
})

app.listen(port, function () {})