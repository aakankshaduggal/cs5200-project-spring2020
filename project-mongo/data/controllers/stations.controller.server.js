const stationdao=require('../daos/stations.dao.server')
const tripdao=require('../daos/trips.dao.server')
const costoftripdao=require('../daos/cost-of-trips.dao.server')
module.exports =(app) =>{
    app.get('/admindashboard/stations', (req, res)=>
        stationdao.findallstations()
            .then(stations => res.json(stations)))

    app.post('/book/ride/subscriber', (req, res)=> {
        stationdao.updatestation(req.body.name[1])
            .then(result => {
                //console.log(req.body.name)
                //res.send(" Ride is Booked and Bike is Reserved in the Station")
                return tripdao.findlasttrip()
            })
            .then(lasttrip =>{
                var id=lasttrip[0]._id;
                var dt = new Date();
                var costoftripid=Math.floor(1000000000 + Math.random() * 9000000000)
                return tripdao.createtrip({_id: id+1, user: req.body.name[0], from_station: req.body.name[1],
                    to_station: req.body.name[2], cost_of_trip: costoftripid})
            })
            .then(result =>res.redirect("http://localhost:3001/finish/ride"))
    })

    app.post('/finish/ride',(req, res)=>
        tripdao.findlasttripofuser(req.body.name)
            .then(result=>{
                return costoftripdao.createcostoftrip({_id:result[0].cost_of_trip, trip:result[0]._id, payment:req.body.payment, ammount:Math.floor(10 + Math.random() * 9)})
            })
            .then(result=>res.send("Thanks For Riding"))

    )
}