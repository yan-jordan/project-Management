const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        title: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        status: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        assignedTo: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        projectManager: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task",
            required: true
        }
    }
)

const Task = mongoose.model(
    "Task" , TaskSchema
)

module.exports = Task