const costoftripModel=require('../models/cost-of-trips/cost-of-trip.model.server')

const createcostoftrip=(costoftrip)=> costoftripModel.create(costoftrip);

const totalammount=()=>costoftripModel.aggregate([{$group: {
        _id: null,
        sum:  {$sum : "$ammount"}

    }}])

module.exports={
    createcostoftrip,
    totalammount
}