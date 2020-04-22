const tripModel=require('../models/trips/trips.model.schema')

const createtrip=(trip)=>
    tripModel.create(trip)

const findlasttrip=()=>
    tripModel.find().sort({_id:-1}).limit(1)

const findtripbyuser=(userid)=>
    tripModel.findOne({user: userid})

const triptakenbyuser=(id)=>
    tripModel.find({user: id})

const tripbetweenstations=(from_id, to_id)=>
    tripModel.find({from_station:from_id, to_station:to_id })

const findlasttripofuser=(id)=>
    tripModel.find({user: id}).sort({_id: -1}).limit(1)

const updatetrip=(id,costoftrip)=> {
    console.log(id,costoftrip)
    return tripModel.updateOne({ _id: id}, {"$set": {"cost_of_trip" : costoftrip}})
}

module.exports={
    createtrip,
    triptakenbyuser,
    findlasttrip,
    tripbetweenstations,
    findtripbyuser,
    findlasttripofuser,
    updatetrip
}