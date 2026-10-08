const fp = require('fastify-plugin')
const jwt = require('@fastify/jwt')

module.exports = fp(
    async function (fastify , options){
        fastify.register(jwt , 
            {
                secret: process.env.SECRET_JWT_KEY
            }
        )

        fastify.decorate('jwtAuth' , async function (request , reply) {
        try{
            await request.jwtVerify()
        }catch(error){
            reply.status(401).send('You are unauthorized.')
            console.log("---- ---- ---- error is : " , error)
        }
    })
    }
)