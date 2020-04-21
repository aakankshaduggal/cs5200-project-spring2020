const costoftripModel=require('../models/cost-of-trips/cost-of-trip.model.server')

const createcostoftrip=(costoftrip)=> costoftripModel.create(costoftrip);

module.exports={
    createcostoftrip
}