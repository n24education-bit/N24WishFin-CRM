const jwt = require('jsonwebtoken');
const {UnauthorizedError} = require('../errors');

// Middleware for authentication and role-based access control
const auth = (roles = []) => {
    // If roles is a string, convert it to an array
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return (req, res, next) => {
        // Get token from headers
        const token = req.headers['authorization']?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        try {
            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            // Check if the user's role is allowed
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Access forbidden: insufficient rights.' });
            }

            next();
        } catch (err) {
            return res.status(400).json({ message: 'Invalid token.' });
        }
    };
};

module.exports = auth;
