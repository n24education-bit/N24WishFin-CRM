const express = require('express');
const router = express.Router();

// Mock database for payouts
let payouts = [];  // This will simulate our database

// API route: Create a new payout request
router.post('/payouts', (req, res) => {
    const payoutRequest = req.body;
    payouts.push(payoutRequest);
    res.status(201).send({ message: 'Payout request created successfully', payoutRequest });
});

// API route: Get all payout requests
router.get('/payouts', (req, res) => {
    res.status(200).send(payouts);
});

// API route: Update payout request status
router.put('/payouts/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const payout = payouts.find(p => p.id === id);
    if (!payout) {
        return res.status(404).send({ message: 'Payout request not found' });
    }
    payout.status = status;
    res.send({ message: 'Payout status updated successfully', payout });
});

// API route: Delete a payout request
router.delete('/payouts/:id', (req, res) => {
    const { id } = req.params;
    payouts = payouts.filter(p => p.id !== id);
    res.send({ message: 'Payout request deleted successfully' });
});

module.exports = router;