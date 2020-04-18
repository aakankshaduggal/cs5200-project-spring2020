const mongoose = require('mongoose');
const customerSchema = require('../customers/customer.schema.server.js');
const subscriberSchema = require('../subscribers/subscriber.schema.server.js');

userSchema = mongoose.Schema({
	 _id: Number,
	 gender: String,
	 phoneNumber: Number,
	 userType: {type: String, enum: ["Subscriber", "Customer"]},
	 customer: customerSchema,
	 subscriber: subscriberSchema
	}, {collection: 'users'});

module.exports = userSchema;