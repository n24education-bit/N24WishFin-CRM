'use strict';

/**
 * Format the current date and time in UTC.
 * @returns {string} - Formatted date and time.
 */
const getCurrentDateTimeUTC = () => {
    const date = new Date();
    return date.toISOString().slice(0, 19).replace('T', ' ');
};

/**
 * Generate a unique identifier.
 * @returns {string} - Unique identifier.
 */
const generateUniqueId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 9);
};

/**
 * Check if a value is empty.
 * @param {any} value - The value to check.
 * @returns {boolean} - True if empty, false otherwise.
 */
const isEmpty = (value) => {
    return value === null || value === undefined || value === '';
};

module.exports = {
    getCurrentDateTimeUTC,
    generateUniqueId,
    isEmpty,
};