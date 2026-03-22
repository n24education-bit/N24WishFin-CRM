// logger.js

/**
 * Middleware for logging HTTP requests.
 */
const logger = (req, res, next) => {
    const currentDateTime = new Date().toISOString();
    console.log(`[${currentDateTime}] ${req.method} ${req.originalUrl}`);
    next();
};

module.exports = logger;
