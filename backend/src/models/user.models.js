const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        firstName : {
            type: String,
            required: true,
            trim: true
        },
        lastName : {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        role: {
            type: String,
            enum: ['admin' , 'project manager' , 'team member'],
            default: 'team member'
        }
    }
)

const User = mongoose.model("User" , UserSchema)

module.exports = User