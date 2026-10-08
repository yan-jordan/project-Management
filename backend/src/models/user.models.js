const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

UserSchema.pre(
    "save" , async function(){
            if (this.isNew || this.isModified('password')){
                const salt = await bcrypt.genSalt(10)
                const hash = await bcrypt.hash(this.password , salt)
                this.password = hash
            }
        }
)

UserSchema.methods.compare = async function(password){
    const isValid = await bcrypt.compare(password , this.password)
    if(isValid){
        return true
    }else{
        return false
    }
}

const User = mongoose.model("User" , UserSchema)
module.exports = User
