const stationModel=require('../models/stations/station.model.server');

const createstation=(station) => stationModel.create(station);

const findallstations =() => stationModel.find();

const findStationByName = (stationName) =>{
    stationModel.findOne({name : stationName})
};
const findStationById = (stationId) => {
    stationModel.findById(stationId)
};

module.exports={
    createstation,
    findallstations,
    findStationByName,
    findStationById
};