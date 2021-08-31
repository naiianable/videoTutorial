const { body, validationResult } = require('express-validator');
const User = require('../Models/User');

let validationBodyRules = [

    body('username', 'Username Invalid')
    .trim()
    .isAlphanumeric()
    .isLength({ min: 5 })
    .custom((value, { req, loc, path }) => {
        return User.findOne({ username: value }).then(user => {
            if(!user) {
                return Promise.reject('Username does not exist');
            }
        });
    }),


    body('password', 'Password Invalid')
    .trim()
    .isAlphanumeric()
    .isLength({ min: 5 }),


];

module.exports = validationBodyRules;