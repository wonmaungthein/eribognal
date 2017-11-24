const connection = require('./connection')
const Answer = require('../models/Answer');

const addAnswer = (query, callback) => {
    Answer.create(query).then(callback)
};

module.exports = { addAnswer };