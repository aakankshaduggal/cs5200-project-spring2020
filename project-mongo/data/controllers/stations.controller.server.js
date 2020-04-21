const stationdao=require('../daos/stations.dao.server')


module.exports =(app) =>{
    app.get('/admindashboard/stations', (req, res)=>
        stationdao.findallstations()
            .then(stations => res.json(stations)))

    app.post('/book/ride/subscriber', (req, res)=> {
        stationdao.updatestation(req.body.name[1])
            .then(result => {
                console.log(req.body.name[1])
                res.send(" Ride is Booked and Bike is Reserved in the Station")
            })
    })
}