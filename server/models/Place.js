const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: String,
    description: String
});

const Place = mongoose.model('Place', schema);

module.exports = Place;