const stationModel=require('../models/stations/station.model.server')

const createstation=(station) => stationModel.create(station);

const findallstations =() => stationModel.find();

const updatestation=(id) => stationModel.update({_id : id},{$inc : { dpcapacity: -1} })


module.exports={
    createstation,
    findallstations,
    updatestation
}