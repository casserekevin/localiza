const mongoose = require('../database');

const CompanySchema = new mongoose.Schema({
    userID: {
        type: String,
        default: ''
    },
    name: {
        type: String
    },
    phone: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    linkedInUrl: {
        type: String,
    },
    photo: {
        type: Buffer,
    },
    companyType: {
        type: Number,
    },
    bornDate: {
        type: Date,
    },
    website: {
        type: String,
    },
    videoUrl: {
        type: String,
    },
    cnpj: {
        type: String,
        required: true,
        unique: true
    },
    branch: {
        type: Number
    },
    address: {
        zipCode: {
            type: String
        },
        city: {
            type: String
        },
        number: {
            type: String
        },
        state: {
            type: String
        },
        addition: {
            type: String
        },
    }
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;