const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    bornDate: {
        type: Date,
        // required: true
    },
    cpfCnpj: {
        type: String,
        unique: true
    },
    desiredSalary: {
        type: Number
    },
    areaOfInterest: {
        type: Number
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
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

UserSchema.pre('save', async function (next) {
    if (this.isNew || typeof this.password == "string") {
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
    }
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;