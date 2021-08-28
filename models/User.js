const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newUser = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
});

const User = mongoose.model('User', newUser);

module.exports = User;