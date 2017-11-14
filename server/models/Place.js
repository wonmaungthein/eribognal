const mongoose = require('mongoose');
const { Schema } = mongoose;

const statuses = {
    values: ['Approved', 'Rejected', 'Pending'],
    message: 'enum validator failed for path `{PATH}` with value `{VALUE}`'
};

const categories = {
    values: ['Growing Project', 'Night Out', 'Shopping', 'Eating Out'],
    message: 'enum validator failed for path `{PATH}` with value `{VALUE}`'
}

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    description: {
        type: String,
        required: [true, 'Description field is required']
    },
    category: {
        type: String,
        enum: categories
    },
    status: {
        type: String,
        enum: statuses
    }
});

const Place = mongoose.model('Place', schema);

module.exports = Place;
