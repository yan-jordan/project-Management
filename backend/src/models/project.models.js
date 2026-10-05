const mongoose = require('mongoose')
const User = require('./user.models')

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
        projectManager: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            validate: {
                validator: async function (v) {
                const user = await User.findById(v)
                return !!user && ["admin" , "project manager"].includes(user.role)
            },
                message: (props) => `User role must be 'admin' or 'project manager'`
            }

        },
        teamMembers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
)


const Project = mongoose.model(
    "Project" , ProjectSchema
)

module.exports = Project
