const mongoose = require('../database');

const PersonSchema = new mongoose.Schema({
    userID: {
        type: String,
        default: ''
    },
    searchStatus: {
        type: Number
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    profileTitle: {
        type: String
    },
    description: {
        type: String
    },
    phone: {
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
    cpf: {
        type: String,
        required: true,
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
    }
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;