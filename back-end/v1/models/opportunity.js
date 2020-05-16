const mongoose = require('../database');

const OpportunitySchema = new mongoose.Schema({
    ownerId: {
        type: String,
        required: true,
    },
    branch: {
        type: Number
    },
    area: {
        type: Number
    },
    description: {
        type: String
    },
    company: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    }
});

const Opportunity = mongoose.model('Opportunity', OpportunitySchema);

module.exports = Opportunity;