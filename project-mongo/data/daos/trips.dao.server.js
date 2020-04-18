const tripModel=require('../models/trips/trips.model.schema')

const createtrip=(trip)=>
    tripModel.create(trip)

module.exports={
    createtrip
}