const connection = require('./connection')
const Answer = require('../models/Answer');

const addNewAnswer = (query, callback) => {
    Answer.create(query).then(callback)
};

module.exports = addNewAnswer;