// Import necessary modules
const express = require('express');
const router = express.Router();

// Mock database (for demonstration purposes)
let cases = [];

// Create a new case
router.post('/cases', (req, res) => {
    const newCase = { id: cases.length + 1, ...req.body };
    cases.push(newCase);
    res.status(201).json(newCase);
});

// Update a case status
router.put('/cases/:id/status', (req, res) => {
    const { id } = req.params;
    const caseToUpdate = cases.find(c => c.id == id);
    if (caseToUpdate) {
        caseToUpdate.status = req.body.status;
        res.json(caseToUpdate);
    } else {
        res.status(404).json({ message: 'Case not found' });
    }
});

// Get all cases with optional filtering
router.get('/cases', (req, res) => {
    const { status } = req.query;
    const filteredCases = status ? cases.filter(c => c.status === status) : cases;
    res.json(filteredCases);
});

module.exports = router;