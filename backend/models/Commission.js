// Commission model for commission tracking

const mongoose = require('mongoose');

const commissionSchema = new mongoose.Schema({
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', required: true }, // Reference to the agent
    amount: { type: Number, required: true }, // Amount of the commission
    date: { type: Date, default: Date.now }, // Date of commission
    status: { type: String, enum: ['pending', 'paid', 'cancelled'], default: 'pending' }, // Status of the commission
    description: { type: String, required: false }, // Additional description
});

const Commission = mongoose.model('Commission', commissionSchema);

module.exports = Commission;
