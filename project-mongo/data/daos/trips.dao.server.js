const tripModel=require('../models/trips/trips.model.schema');

const createtrip=(trip)=>
    tripModel.create(trip);
const findtripbyuser=(userid)=>
    tripModel.findOne({user: userid});

const findCountOfTripsByUsers = (userId) =>{
    tripModel.countDocuments({user:userId})
};
const triptakenbyuser=(id)=>
    tripModel.find({user: id});

const tripbetweenstations=(from_id, to_id)=>
    tripModel.find({from_station:from_id, to_station:to_id });

const numberofTripsFromStations = (from_id,to_id) =>
     tripModel.countDocuments({from_station: from_id, to_station: to_id});

const CostOfTripFromStations = (from_id,to_id) =>{
    tripModel.find({from_station:from_id, to_station:to_id},{cost_of_trip : 1 })
};

const numberOFTripsOnDate = (startDate) =>{
    tripModel.countDocuments({startDate : startDate})
};



module.exports={
    createtrip,
    triptakenbyuser,
    tripbetweenstations,
    findtripbyuser,
    numberofTripsFromStations,
    findCountOfTripsByUsers,
    CostOfTripFromStations,
    numberOFTripsOnDate
};