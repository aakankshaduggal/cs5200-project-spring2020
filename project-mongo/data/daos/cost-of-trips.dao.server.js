const costoftripModel=require('../models/cost-of-trips/cost-of-trip.model.server')

const createcostoftrip=(costoftrip)=> costoftripModel.create(costoftrip);

const totalammount=()=>costoftripModel.aggregate([{$group: {
        _id: null,
        sum:  {$sum : "$ammount"}

    }}])
const findlastid=()=> {
    return costoftripModel.findOne().sort({_id: -1}).limit(1)
}

module.exports={
    createcostoftrip,
    totalammount,
    costoftripModel,
    findlastid
}