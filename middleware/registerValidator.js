const User = require('../Models/User');
const { body, validationResult } = require('express-validator');


let validationBodyRules = [
    body('username', 'Invalid Username')
    .trim()
    .isAlphanumeric()
    .isLength({ min: 5 })
    .custom((value) => {
        return User.findOne({ username: value }).then(user => {
           if(user) {
               return Promise.reject('Username Exists');
           }
        });
        
    }),
    body('password', 'Invalid Password')
    .trim()
    .isAlphanumeric()
    .isLength({ min: 5 })
    .custom((value, { req, loc, path }) => {
        let repeatPass = req.body.repeatPassword;
        if(value !== repeatPass) {
            throw new Error('Passwords do not match');
        } else {
            return value;
        }
    })
    
];

module.exports = validationBodyRules;