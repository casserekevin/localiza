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
    phone: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    englishLevel: {
        type: Number,
    },
    linkedInUrl: {
        type: String,
    },
    gitUrl: {
        type: String,
    },
    photo: {
        type: Buffer,
    },
    curriculum: {
        type: Buffer,
    },
    gitUrl: {
        type: String,
    },
    mainCompetence: {
        type: Number,
    },
    experience: {
        type: Number,
    },
    skills: [
        {
            type: Number
        }
    ],
    companyType: {
        type: Number,
    },
    professionalExperiences: [
        {
            companyProfile: {
                type: Number,
            },
            companyType: {
                type: Number,
            },
            profession: {
                type: Number,
            },
            startedAt: {
                type: Date
            },
            endedAt: {
                type: Date
            },
            skills: [
                {
                    type: Number
                }
            ],
            description: {
                type: String,
            },
        }
    ],
    lookingFor: {
        companyType: {
            type: Number
        },
        typeOfContract: [
            {
                type: Number
            }
        ],
        desiredSalary: {
            type: Number
        },
        acceptRemoteWork: {
            type: Boolean
        },
        isPhysicallyHandicapped: {
            type: Boolean
        }
    },
    bornDate: {
        type: Date,
        // required: true
    },
    website: {
        type: String,
    },
    videoUrl: {
        type: String,
    },
    howDidYouFind: {
        type: Number,
    },
    cpfCnpj: {
        type: String,
        unique: true
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