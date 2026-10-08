const User = require('../../../models/user.models.js')
const matchDB = require('../auth-functions/match.hash.plain.js')

async function generateJWT(request , reply ){
    const { email , password } = request.body
    if(!email || !password){
        return reply.status(400).send("You should enter username and password.")
    }
    const user = await User.findOne({email:email}).select('+password')
    if(!user){
        return reply.status(403).send("User name is incorrect.")
    }
    if(!(await matchDB(user , password))){
        return reply.status(403).send("The password is incorrect.")
    }
    const { firstName , lastName } = user
    const token = request.server.jwt.sign({
        payload: {
            firstName: firstName ,
            lastName: lastName, 
            email: email
        }
    }, {
        expiresIn: '1h'
    })

    return reply.status(200).send({
        "message": "You are authorized.",
        "token": token
    })
}   

module.exports = generateJWT