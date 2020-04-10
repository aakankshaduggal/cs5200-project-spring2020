const mongoose= require('mongoose')

const costoftripsSchema=require('./cost-of-trip.schema.server')

const costoftripsModel=mongoose.model('CostOfTripsModel', costoftripsSchema)

module.exports=costoftripsModel