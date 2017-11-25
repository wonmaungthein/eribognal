const connection = require('./connection')
const Place = require('../models/Place');

const addNewPlace = (query) => {
  return Place.create(query);
}

const getPlaces = (query, callback) => {
  Place.find(query).exec(callback)
}

module.exports = { addNewPlace, getPlaces };