const mongoose=require('mongoose')

const costoftripSchmea=mongoose.Schema({
    _id: Number,
    trip:{
        type: mongoose.Schema.Types.Number,
        ref: 'TripModel'
    },
    payment:{
        type: mongoose.Schema.Types.Number,
        ref: 'PaymentModel'
    },
    user:{
        type: mongoose.Schema.Types.Number,
        ref: 'UserModel'
    },
    ammount: Number
},{collection : 'costoftrips'})

module.exports= costoftripSchmea