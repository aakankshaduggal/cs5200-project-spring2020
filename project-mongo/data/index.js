fs.createReadStream('/Users/priyankachapala/Downloads/data.csv')
    .pipe(csv())
    .on('data', (row) => {
        //console.log(row)
        //  var user_type = ['CUSTOMER', 'SUBSCRIBER'];
        //  var user_ran = Math.floor(Math.random()*user_type.length);
        //
        //  var sub_type =['YEARLY', 'MONTHLY', 'QUARTERLY'];
        //  var sub_ran= Math.floor(Math.random()*sub_type.length);
        //
        //  var occu_type=['STUDENT', 'DOCTOR', 'ENGINEER', 'ARCHITECT', 'LAWYER'];
        //  var occu_ran=Math.floor(Math.random()*sub_type.length);
        //
        // var user_id= Math.floor(Math.random() * (600000 - 1 + 1)) + 1
        // while(userIDs.has(user_id)){
        //     user_id= Math.floor(Math.random() * (600000 - 1 + 1)) + 1
        // }
        // userIDs.add(user_id)
        //
        //  if(user_ran == 1){
        //
        //      userModel.create({_id:user_id, gender: row.gender, phoneNumber:Math.floor(1000000000 + Math.random() * 9000000000),
        //          userType: user_type[user_ran],subscriber: {subscriptionPlan: sub_type[sub_ran], OccupationType: occu_type[occu_ran]}
        //      }).catch(err => console.log(err))
        //
        //  }
        //  else{
        //      userModel.create({_id:user_id, gender: row.gender, phoneNumber:Math.floor(1000000000 + Math.random() * 9000000000),
        //          userType: user_type[user_ran],customer :{isTourist: true}
        //      }).catch(err => console.log(err))
        //  }
        //  console.log('user inserted');

        // var from_station={_id : row.from_station_id, latitude : row.latitude_start, longitude : row.longitude_start, name :row.from_station_name, dpcapacity : row.dpcapacity_start}
        // var to_station={_id : row.to_station_id, latitude : row.latitude_end, longitude : row.longitude_end, name :row.to_station_name, dpcapacity : row.dpcapacity_end}
        //
        //
        // if(station_start.has(row.from_station_id)){
        //     console.log(station_start.has(row.from_station_id));
        // }else{
        //     station_start.add(row.from_station_id);
        //     stationModel.create(from_station).catch(err => console.log(err));
        // }
        //
        // if(station_end.has(row.to_station_id)){
        //     console.log(station_end.has(row.to_station_id));
        // }else{
        //     station_end.add(row.to_station_id);
        //     stationModel.create(to_station).catch(err=>console.log(err));
        // }

        var pay_type=['CASH','CREDIT','DEBIT','PAYPAL'];
        var pay_ran=Math.floor(Math.random()*pay_type.length);
        var pay_id=Math.floor(Math.random() * (100000000000 - 1 + 1)) + 1;
        while(payIDs.has(pay_id)){
            pay_id=Math.floor(Math.random() * (100000000000 - 1 + 1)) + 1;
        }
        payIDs.add(pay_id)

        paymentModel.create({_id:pay_id, mode_of_payment:pay_type[pay_ran]}).catch(err=>console.log(err));

        var cost_of_trip_id=Math.floor(Math.random() * (100000000000 - 1 + 1)) + 1;
        while(cotIDs.has(cost_of_trip_id)){
            cost_of_trip_id=Math.floor(Math.random() * (100000000000 - 1 + 1)) + 1;
        }
        cotIDs.add(cost_of_trip_id)


        costoftripModel.create({_id:cost_of_trip_id, trip:row.trip_id, payment: pay_id, user: user_id, ammount:Math.floor(100 + Math.random() * 90)}).catch(err=>console.log(err))



        tripModel.create({_id:row.trip_id, start_time:row.starttime, stop_time:row.stoptime, tripduration:row.tripduration,
            temperature:row.temperature, event:row.events, user:user_id, from_station:row.from_station_id, to_station:row.to_station_id, cost_of_trip:cost_of_trip_id });


    }).on('end', () => {

    console.log('CSV file successfully processed');
});
