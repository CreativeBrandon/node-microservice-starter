const mongoose = require('mongoose')

var dispensarySchema = mongoose.Schema({
    name: String,
    phone: Number,
    location: String,
})

var Dispensary = mongoose.model('dispensary', dispensarySchema);

module.exports = Dispensary
