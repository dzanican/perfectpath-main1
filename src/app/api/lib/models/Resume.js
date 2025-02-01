import mongoose from 'mongoose' ;

const ResumeSchema = new mongoose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    originalContent: {
        type: String,
        required: true
    },
    optimizedContent: {
        type: String
    },
    parsedData: {
        workExperience: [String],
        skills: [String],
        education: [String]
    },
    status: {
        type: String,
        enum: ['uploaded', 'parsed', 'optimized'],
        default: 'uploaded'
    },
    jobDescription: {
        type: String
    }
}, { timestamps: true });

const Resume = mongoose.models.Resume || mongoose.model('Resume', ResumeSchema);

export default Resume; 