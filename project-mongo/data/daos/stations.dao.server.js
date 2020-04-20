const stationModel=require('../models/stations/station.model.server')

const createstation=(station) => stationModel.create(station);

const findallstations =() => stationModel.find();

module.exports={
    createstation,
    findallstations
}