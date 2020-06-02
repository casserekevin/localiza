const mongoose = require('../database');

const CompanyProfileSchema = new mongoose.Schema({
    logo: {
        type: Buffer
    },
    phone: {
        type: String,
    },
    cnpj: {
        type: String,
        unique: true
    },
    website: {
        type: String
    },
    companyName: {
        type: String
    },
    companyType: {
        
    }
})