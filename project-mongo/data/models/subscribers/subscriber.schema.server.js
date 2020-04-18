const mongoose = require('mongoose');

const subscriberSchema = mongoose.Schema({
    
	subscriptionPlan: String,
    OccupationType: {type: String, enum: ['STUDENT', 'DOCTOR', 'ENGINEER', 'ARCHITECT', 'LAWYER']}

},{collection :'subscribers'})

module.exports = subscriberSchema;