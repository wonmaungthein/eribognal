const connection = require('./connection')
const Place = require('../models/Place');

const addNewPlace = (query) => {
  return Place.create(query);
}


const getPlaces = (query, callback) => {
  Place.find(query).exec(callback)
}

const approvePlace = (query, callback) => {
  Place.findOneAndUpdate(query, { $set: { status: 'Approved' } }, callback)

}
module.exports = { addNewPlace, getPlaces, approvePlace };