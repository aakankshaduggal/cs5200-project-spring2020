const stationdao=require('../daos/stations.dao.server')

module.exports =(app) =>{
    app.get('/admindashboard/stations', (req, res)=>
        stationdao.findallstations()
            .then(stations => res.json(stations)))
}