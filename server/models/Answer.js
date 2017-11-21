const mongoose = require('mongoose');
const { Schema } = mongoose;


const schema = new Schema({
options: {
    type: [{
        text: String,
        value: Number,
        selected: Boolean
    }],
    required: [true, 'Name field is required']
},
questionType: {
    type: String,
    required: [true, 'Name field is required']
},
title: {
    type: String,
    required: [true, 'Name field is required']
}
});

const Answer = mongoose.model('Answer', schema);

module.exports = Answer;
