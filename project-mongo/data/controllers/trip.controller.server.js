const tripdao=require('../daos/trips.dao.server')

module.exports =(app) =>{
    app.post('/trips/takenby/user', (req, res) =>
        tripdao.triptakenbyuser(req.body.name)
            .then(result => res.send(result)))

    app.post('/trips/between/stations',(req, res) =>
        tripdao.tripbetweenstations(req.body.name[0], req.body.name[1])
            .then(result => {

                res.send(result)
            }))
}