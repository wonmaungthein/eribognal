const connection =require('./connection')
const Place = require('../models/Place');

const addNewPlace = (query, callback) => {
    Place.create(query).then(callback)
};

const getPlaces = (query, callback) => {
    Place.find(query).then(callback)
}
module.exports = { addNewPlace, getPlaces };