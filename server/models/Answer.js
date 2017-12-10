const mongoose = require('mongoose');
const { Schema } = mongoose;


const schema = new Schema({
    answers: [
        {
            options: {
                type: [{
                    text: String,
                    value: Number,
                    selected: Boolean
                }]
            },
            questionType: {
                type: String,
                required: [true, 'Question Type field is required']
            },
            title: {
                type: String,
                required: [true, 'Title field is required']
            }
        }],

});

const Answer = mongoose.model('Answer', schema);

module.exports = Answer;
