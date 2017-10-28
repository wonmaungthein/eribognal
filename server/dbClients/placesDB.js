const connection =require('./connection')
const Place = require('../models/Place');
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const addNewPlace = (query, callback) => {
    mongoose.connect(connection);
    Place.create(query).then(callback)
};

module.exports = addNewPlace;