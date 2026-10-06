const User = require('../models/user.models.js')

async function getAllUsers(request , reply) {
    try{
        const users = await User.find()
        reply.send(users)
    } catch(err) {
        reply.status(500).send("sth went wrong.\nerror is :" , err)
    }
}

async function getUserById(request , reply) {
    try{
        const user = await User.findById(request.params.id);
        reply.send(user)
    } catch(err) {
        reply.status(500).send( { err : err.message } )
    }
}

async function createUser(request , reply) {
    try{
        const user = new User(request.body)
        const result = user.save()
        reply.send(result)
    } catch(err) {
        reply.status(500).send( { err: err.message } )
    }
}

async function updateUser(request , reply) {
    try{
        const user = await User.findByIdAndUpdate( request.params.id , request.body , {
            new : true
        })
        reply.status(200).send({
            user: user, 
            image: ""
        })
    } catch(err) {
        reply.status(500).send("sth went wrong.\nerror is :" , err)
    }
}

async function deleteUser(request , reply) {
    try{
        await User.findByIdAndDelete(request.params.id)
        reply.status(204).send(" x ")
    } catch(err) {
        reply.status(500).send( { err: err.message})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}

