//var express = require('express')
var express =require('express')
var app = express()
const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://priyankachapala:2004Priyanka@project-ssy8s.mongodb.net/project', {useNewUrlParser: true, useUnifiedTopology: true});


// load body parser library to parse JSON from HTTP BODY
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// configure CORS to give clients access from other domains
app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.set('json spaces', 10)

require('./data/controllers/user.controller.server')(app)
require('./data/controllers/stations.controller.server')(app)
require('./data/controllers/trip.controller.server')(app)
require('./data/controllers/costoftrips.controller.server')(app)
// start server listening at port 3000 for HTTP requests
app.listen(4000)