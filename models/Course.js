// • Is Public - boolean, default - false,
// • Created at – Date or String, required
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

let newCourse = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        //max length
    },
    imageUrl: {
        type: String,
        required: true
    },
    users: [{ type: Schema.Types.Objectid, ref: 'User' }]
});

let Course = mongoose.model('Course', newCourse);

module.exports = Course;