const matchDB = require('../auth-functions/match.hash.plain.js')
const User = require('../../../models/user.models.js')

async function basicAuth(request , reply){
    // 1. getting Authorization key from headers from request
    const authHeader = request.headers.authorization

    // 2.check if header exists at all
    if (!authHeader){
        return reply.status(404).send("You do not have authorization on this action.")
    }

    // 3.getting Authorization values --> a.type of authorization  b.encoded(username:password) with Base64 algorithm
    const [ authType , authValue ] = authHeader.split(" ")

    // 4.Checking type of authorization and value of authorization
    if (authType !== 'Basic' || !authValue){
        return reply.status(404).send("The type of authorization is false or the value is missing")
    }

    // 5.Decode the Base64 algorithm string
    const decode = Buffer.from(authValue , 'Base64').toString('utf8')
    const [ username , password ] = decode.split(':')

    // 6.retrieve the user
    const user = await User.findOne({
        email: username
    }).select('+password')

    if (!user){
        return reply.status(401).send("this user does not exist in db")
    }
    const userRole = user.role

    // 7. checking with database logic
    const authorized = await matchDB(user , password)
    if (!authorized){
        return reply.status(401).send("You are not authorized.")
    } 
    else if (userRole !== 'admin'){
        return reply.status(401).send("only admin can see and rewrite this")
    }

    // 8.save this on request
    request.username = username
}

module.exports = basicAuth