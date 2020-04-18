const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    isTourist: Boolean
},{collection : 'customers'})
module.exports = customerSchema