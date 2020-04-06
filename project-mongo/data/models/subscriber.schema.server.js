const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    
	subscriptionPlan: String,
    OccupationType: {type: String, enum: ['STUDENT', 'DOCTOR', 'ENGINEER', 'ARCHITECT', 'LAWYER']}

});
module.exports = customerSchema;