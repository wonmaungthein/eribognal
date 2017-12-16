const connection = require('./connection')
const Answer = require('../models/Answer');

const addAnswer = (answerBody) => {

    const answer = new Answer(answerBody);
    if (!answerBody._id) {
        return answer.save()
    }
    else {
        const query = {
            _id: answer._id
        }
        return Answer.findOneAndUpdate(query, { $set: answerBody }, { upsert: true, new: true })
    }
};
module.exports = { addAnswer };


const getQuestionnaire = (query, callback) => {
    Answer.find(query).exec(callback)
  }
module.exports = { addAnswer,getQuestionnaire };

