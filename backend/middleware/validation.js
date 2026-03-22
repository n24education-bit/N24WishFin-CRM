const { body, validationResult } = require('express-validator');

const validateRequest = [
    body('fieldName')
        .isString()
        .withMessage('Field name must be a string')
        .notEmpty()
        .withMessage('Field name cannot be empty'),
    // Add more validations as needed

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateRequest;