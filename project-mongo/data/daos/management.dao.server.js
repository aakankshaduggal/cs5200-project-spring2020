const mongoose=require('mongoose')

const moment=require('moment')

const testSchema=mongoose.Schema({
    trip_id: Number,
    year: Number,
    month: Number,
    week: Number,
    day: Number,
    hour: Number,
    usertype: {type: String, enum: ["Subscriber", "Customer"]},
    gender: {type: String, enum: ["Male", "Female"]},
    starttime: String,
    stoptime: String,
    tripduration: Number,
    temperature: Number,
    events: String,
    from_station_id: Number,
    from_station_name: String,
    latitude_start: Number,
    longitude_start: Number,
    dpcapacity_start: Number,
    to_station_id: Number,
    to_station_name: String,
    latitude_end: Number,
    longitude_end: Number,
    dpcapacity_end: Number
},{collection: 'test'})

const testModel= mongoose.model('TestModel', testSchema);
const userdao=require('./user.dao.server')

var sub_type =['YEARLY', 'MONTHLY', 'QUARTERLY'];
var occu_type=['STUDENT', 'DOCTOR', 'ENGINEER', 'ARCHITECT', 'LAWYER'];

const populateusers=()=>{
    testModel.find()
        .then(res =>{
            for(i=0 ; i<res.length; i++){
                if((res[i].usertype).valueOf()=='Subscriber'.valueOf()){
                    var sub_ran= Math.floor(Math.random()*sub_type.length);
                    var occu_ran=Math.floor(Math.random()*sub_type.length);
                    userdao.createuser({_id: i, gender: res[i].gender, phoneNumber: Math.floor(1000000000 + Math.random() * 9000000000), userType: res[i].usertype,
                        subscriber: {subscriptionPlan: sub_type[sub_ran], OccupationType: occu_type[occu_ran]}})
                }
                else{
                    userdao.createuser({_id: i, gender: res[i].gender, phoneNumber: Math.floor(1000000000 + Math.random() * 9000000000), userType: res[i].usertype,
                        customer: {isTourist: true}})


                }
            }


        })
        .then(res=>
            console.log("Inserted Users"))

}

const stationdao=require('./stations.dao.server')

const populatestations=() =>{
    var stationset= new Set();

    testModel.find()
        .then(result => {
            for(i=0; i<result.length; i++){
                if(stationset.has(result[i].from_station_id)){

                }
                else{
                    stationdao.createstation({_id: result[i].from_station_id, latitude: result[i].latitude_start,
                        longitude:result[i].longitude_start, name: result[i].from_station_name, dpcapacity: result[i].dpcapacity_start});
                stationset.add(result[i].from_station_id)
                }

                if(stationset.has(result[i].to_station_id)){

                }
                else{
                    stationdao.createstation({_id: result[i].to_station_id, latitude: result[i].latitude_end,
                        longitude:result[i].longitude_end, name: result[i].to_station_name, dpcapacity: result[i].dpcapacity_end});
                stationset.add(result[i].to_station_id)
                }
            }
        })
        .then(result =>console.log('Stations Inserted')
        )
}


const paymentdao=require('./payments.dao.server')
const populatepayments=() =>{
    paymentdao.createpayment({_id: 1, mode_of_payment:'CASH'})
        .then(paymentdao.createpayment({_id: 2, mode_of_payment: 'CREDIT'}))
        .then(paymentdao.createpayment({_id:3, mode_of_payment:'DEBIT'}))
        .then(paymentdao.createpayment({_id:4, mode_of_payment:'PAYPAL'}))
        .then(result => console.log("Payments Inserted"))
}

const tripdao=require('./trips.dao.server');
const costoftripdao=require('./cost-of-trips.dao.server')

const populatetrips=()=>{
    testModel.find()
        .then(res =>{

            for(i=0; i<res.length; i++){
                //console.log(res[i])
                //var startmoment=moment(res[i].starttime)
                //var stopmoment=moment(res[i].stoptime)
                tripdao.createtrip({_id:res[i].trip_id, start_time: Date(res[i].starttime), stop_time: Date(res[i].stoptime),
                    trip_duration: res[i].tripduration, user:Math.floor(Math.random() * (103000 - 1 + 1)) + 1, from_station:res[i].from_station_id,
                to_station: res[i].to_station_id, cost_of_trip: i });
                costoftripdao.createcostoftrip({_id: i, trip: res[i].trip_id, payment: Math.floor(Math.random() * (4 - 1 + 1)) + 1 ,
                    ammount:res[i].tripduration});

            }
        })
        .then(result => console.log(" Trips Inserted"))

}



module.exports={
    populateusers,
    populatestations,
    populatepayments,
    populatetrips
}