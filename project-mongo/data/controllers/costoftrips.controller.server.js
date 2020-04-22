const costoftrip=require('../daos/cost-of-trips.dao.server')

module.exports = (app) => {
    app.get('/totalammount', (req, res) =>
        costoftrip.totalammount()
            .then(result => {
                res.send(" The total ammount for all trips ="+result[0].sum)
            }))
}