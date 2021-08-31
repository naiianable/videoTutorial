const { body, validationResult } = require('express-validator');

let validationBodyRules = [

    body('username', 'Username must be at least 5 characters long')
    .trim()
    .isLength({ min: 5 }),


    body('password', 'Password must be at least 5 characters long')
    .trim()
    .isLength()


];

module.exports = validationBodyRules;