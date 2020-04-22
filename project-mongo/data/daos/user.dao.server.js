const userModel= require('../models/users/user.model.server')
const mongoose =require('mongoose')
const createuser =(user) =>
    userModel.create(user);

const finduser =(id) =>
    userModel.findOne({_id : id});

const examinerole =(id) =>
    userModel.findOne({_id:id});

const findallusers=()=>
    userModel.find()

const findammount=(id)=> {
    var pipeline = "[{$lookup: {from: 'trips', localField: '_id', foreignField: 'user', " +
        "as: 'trip_info' }}, {$unwind: {path: '$trip_info'}}, {$lookup: {from: 'costoftrips'," +
        "localField: 'trip_info.cost_of_trip',foreignField: '_id', as: 'price'}}, {$match: {_id:" +
        id + "}}]";

    return userModel.aggregate(eval(pipeline))
}

const deleteuser=(id)=>
    userModel.remove({_id: id})

const updatesubscriberplan=(id,plan,ocuupation)=>
    userModel.update({_id:id}, {$set:{subscriber: { subscriptionPlan: plan,
                OccupationType: ocuupation}}})

const updatesubscribertocustomer =(id)=>
    userModel.update({_id: id}, {$unset: {subscriber: 1}})
        .then(res=> userModel.update({_id: id},{$set: {userType: "Customer"}}))


module.exports={
    createuser,
    finduser,
    examinerole,
    findallusers,
    findammount,
    deleteuser,
    updatesubscriberplan,
    updatesubscribertocustomer
}