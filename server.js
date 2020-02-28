/*
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const app = express()
app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.use('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist') + '/index.html')
})
const port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)
*/

var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
app = express()
app.use(serveStatic(__dirname))
app.use('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)