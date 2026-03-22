const express = require('express');
const router = express.Router();

// Mocked user data
let users = [];

// Register route
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }
    // Normally, you would hash the password and save the user to the database.
    users.push({ username, password });
    return res.status(201).json({ message: 'User registered successfully.' });
});

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials.' });
    }
    return res.status(200).json({ message: 'Login successful.' });
});

// Logout route
router.post('/logout', (req, res) => {
    // Here you would handle session termination or token invalidation.
    return res.status(200).json({ message: 'Logout successful.' });
});

// User profile route
router.get('/profile', (req, res) => {
    // In a real app, you would get user info based on authentication.
    return res.status(200).json({ message: 'User profile information.' });
});

module.exports = router;