// • Is Public - boolean, default - false,
// • Created at – Date or String, required
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

let newCourse = new Schema({
    title: {
        type: String,
        min: 4,
        required: true
    },
    description: {
        type: String,
        min: 20,
        required: true,
        //max length
    },
    imageUrl: {
        type: String,
        required: true
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    creator: { type: Schema.Types.ObjectId, ref: 'User' }
});

let Course = mongoose.model('Course', newCourse);

module.exports = Course;