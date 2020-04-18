const stationModel=require('../models/stations/station.model.server')

const createstation=(station) => stationModel.create(station);

module.exports={
    createstation
}