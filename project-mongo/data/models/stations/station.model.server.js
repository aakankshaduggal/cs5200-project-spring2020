const mongoose=require('mongoose')

const stationSchema=require('./station.schema.server')

const stationModel=mongoose.Model('StationModel',stationSchema)

module.exports=stationModel