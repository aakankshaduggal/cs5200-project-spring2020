const tripModel=require('../models/trips/trips.model.schema')

const createtrip=(trip)=>
    tripModel.create(trip)
const findtripbyuser=(userid)=>
    tripModel.findOne({user: userid})

const triptakenbyuser=(id)=>
    tripModel.find({user: id})

const tripbetweenstations=(from_id, to_id)=>
    tripModel.find({from_station:from_id, to_station:to_id })

module.exports={
    createtrip,
    triptakenbyuser,
    tripbetweenstations,
    findtripbyuser
}