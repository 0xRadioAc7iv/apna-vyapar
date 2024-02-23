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
            required: false,
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
            type: String,
            required: true,
        },
        founders: { // Founders of the Company
            type: Array,
            required: true,
        },
        environmentalScore: {
            type: String,
            require: true,
        },
        socialScore: {
            type: String,
            require: true,
        },
        governanceScore: {
            type: String,
            require: true,
        },
        companySize: {
            type: String,
            require: true,
        },
        sustainabilityRating: {
            type: Number,
            required: false,
        }
    },
    { timestamps: true }
);

const Company = mongoose.model('Company', companySchema);

export default Company;
