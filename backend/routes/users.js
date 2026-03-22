const express = require('express');
const router = express.Router();

// Mock user data
let users = [];

// Create User
router.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

// Read Users
router.get('/users', (req, res) => {
    res.json(users);
});

// Update User
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    users = users.map(user => (user.id === id ? updatedUser : user));
    res.json(updatedUser);
});

// Role Management
router.post('/users/:id/role', (req, res) => {
    const { id } = req.params;
    const { role } = req.body;
    const user = users.find(user => user.id === id);
    if (user) {
        user.role = role;
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;