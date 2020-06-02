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
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    profileType: {
        type: String,
        enum: ['PERSON', 'COMPANY'],
        required: true
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