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
    const { firstName , lastName , email , password , role } = request.body
    try{
        const isUserAlreadyExist = await User.findOne({
            email: email
        })
        if (isUserAlreadyExist){
            return reply.status(409).type("text/html").send('<img width=400 height=400 src="https://http.cat/409" /> <h1>The email  already has saved!</h1>')
        }
        else{
        const user = new User({ firstName , lastName , email , password , role })
        const result = await user.save()
        const savedUser = result.toObject()
        delete savedUser.password
        reply.status(201).send(savedUser)
        }
    } catch(err) {
        reply.status(500).send( { err: err.message } )
    }
}

async function updateUser(request , reply) {
    try{
        const user = await User.findById(request.params.id)
        if (!user) return reply.status(404).send({ error: 'User not found' })
        const { firstName, lastName, email, password, role } = request.body
        for (const [field, value] of Object.entries({ firstName, lastName, email, password, role })) {
            if (value !== undefined) user[field] = value
        }
        await user.save()
        const savedUser = user.toObject()
        delete savedUser.password
        reply.status(200).send({
            user: savedUser, 
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
