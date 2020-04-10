const mongoose =require('mongoose')

const tripSchema=require('./trips.schema.server')

const tripModel = mongoose.model('TripModel', tripSchema)

module.exports =tripModel