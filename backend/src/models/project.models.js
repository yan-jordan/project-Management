const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        projectManagerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        teamMembers: {
            type: String,
            enum:["software engineer" , "product designer" , "product manager" , "HRBP"],
            default: "software engineer"
        }
    }
)


const Project = mongoose.model(
    "Project" , ProjectSchema
)

module.exports = Project
