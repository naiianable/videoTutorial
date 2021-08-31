const { body, validationResult } = require('express-validator');

let validationBodyRules = [
    body('title', 'Title must be at least 4 characters')
    .trim()
    .isLength({ min: 4 })
    .isAlpha(),

    body('description', 'Description must be at least 20 characters')
    .trim()
    .isLength({ min: 20 })
    .matches(/[A-Za-z,;'\"\s.!?]+/),

    body('imageUrl', 'Invalid image URL')
    .trim()
    .isURL(),

];

module.exports = validationBodyRules;