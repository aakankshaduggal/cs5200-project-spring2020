const mongoose = require('mongoose');
const customerSchema = require('./customer.schema.server.js');
const subscriberSchema = require('./subscriber.schema.server.js');

userSchema = mongoose.Schema({
	 _id: Number,
	 gender: String,
	 phoneNumber: Number,
	 userType: {type: String, enum: ['CUSTOMER', 'SUBSCRIBER']},
	 customer: customerSchema,
	 subscriber: subscriberSchema
	}, {collection: 'users'});

module.exports = userSchema;