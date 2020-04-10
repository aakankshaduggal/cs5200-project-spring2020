const mongoose =require('mongoose')

const stationSchema=require('../stations/station.schema.server')

const userSchema=require('../users/user.schema.server')

const costoftripSchema=require('../cost-of-trips/cost-of-trip.schema.server')

const tripSchema=mongoose.Schema({
    _id: Number,
    start_time: Date,
    stop_time: Date,
    trip_duration: Number,
    user : {
        type : mongoose.Schema.Types.Number,
        ref : 'UserModel'
    },
    from_station :{
        type: mongoose.Schema.Types.Number,
        ref: 'From_StationModel'
    },
    to_station :{
        type: mongoose.Schema.Types.Number,
        ref: 'To_StationModel'
    },
    cost_of_trip:{
        type: mongoose.Schema.Types.Number,
        ref:'Cost_of_trip'
    }
},{collection: 'trips'})

module.exports = tripSchema