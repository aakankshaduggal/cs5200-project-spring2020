const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    isTourist: Boolean
});
module.exports = customerSchema;