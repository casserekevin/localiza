const mongoose = require('../database');

const personProfileEnums = require('../enums/personProfileEnums');

const PersonProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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
        type: personProfileEnums.EnglishLevel,
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
        type: personProfileEnums.MainCompentence,
    },
    experience: {
        type: personProfileEnums.Experience,
    },
    skills: [
        {
            type: personProfileEnums.Skills
        }
    ],
    companyType: {
        type: personProfileEnums.CompanyType,
    },
    professionalExperiences: [
        {
            companyProfile: {
                type: personProfileEnums.CompanyProfile,
            },
            companyType: {
                type: personProfileEnums.CompanyType,
            },
            profession: {
                type: personProfileEnums.Professions,
            },
            startedAt: {
                type: Date
            },
            endedAt: {
                type: Date
            },
            skills: [
                {
                    type: personProfileEnums.Skills
                }
            ],
            description: {
                type: String,
            },
        }
    ],
    lookingFor: {
        companyType: {
            type: personProfileEnums.CompanyType
        },
        typeOfContract: [
            {
                type: personProfileEnums.TypeOfContract
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
        type: personProfileEnums.HowDidYouFind,
    },
    cpf: {
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
    }
});

PersonProfileSchema.pre('save', async function (next) {
    if (this.isNew || typeof this.user.password == "string") {
        const hash = await bcrypt.hash(this.user.password, 10);
        this.user.password = hash;
    }
    next();
});

const PersonProfile = mongoose.model('PersonProfile', PersonProfileSchema);

module.exports = PersonProfile;