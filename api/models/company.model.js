import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
    {
        companyName: { // Name of the Company
            type: String,
            required: true,
            unique: true,
        },
        logo: { // URL of the Image stored on Cloudinary
            type: String,
            required: true,
        },
        industry: { // Type of the Industry
            type: String,
            required: true,
        },
        description: { // Description of the Company
            type: String,
            required: true,
        },
        companyAddress: { // Address of the Company
            type: String,
            required: true,
        },
        phoneNumber: { // Phone Number of the Company for Customer Help
            type: String,
            required: true,
        },
        email: { // Email of the Company
            type: String,
            required: true,
        },
        websiteUrl: { // Website URL of the Company
            type: String,
            required: true,
        },
        socials: { // URLs of the Social Media Profiles of the Company
            type: Array,
            required: true,
        },
        foundingDate: { // Date on which the Company was Registered
            type: Date,
            required: true,
        },
        founders: { // Founders of the Company
            type: Array,
            required: true,
        },
        sustainabilityRating: {
            type: Number,
            required: false,
        }
        // fundingInformation: { // Total Rounds of which Funding has been done (No. of Rounds and Equity)
        //     type: Array,
        //     required: true,
        // },
    },
    { timestamps: true }
);

const Company = mongoose.model('Company', companySchema);

export default Company;
