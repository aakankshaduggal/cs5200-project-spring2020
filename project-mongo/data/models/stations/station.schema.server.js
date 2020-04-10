const mongoose =require('mongoose')


const stationSchema=mongoose.Schema({
    _id: Number,
    latitude: Number,
    longitude: Number,
    name : String,
    dpcapacity: Number,

},{collection: 'stations'})

module.exports = stationSchema
