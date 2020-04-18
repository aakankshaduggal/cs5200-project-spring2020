const mongoose=require('mongoose')

const stationSchema=require('./station.schema.server')

const stationModel=mongoose.model('StationModel',stationSchema)

module.exports=stationModel