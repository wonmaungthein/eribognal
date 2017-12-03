const connection = require('./connection')
const Answer = require('../models/Answer');

const addAnswer = (query) => {
    return Answer.create(query);
};

module.exports = { addAnswer };