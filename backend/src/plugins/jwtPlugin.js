const fp = require('fastify-plugin')
const jwt = require('@fastify/jwt')

module.exports = fp(async function (fastify) {
    await fastify.register(jwt, {
        secret: process.env.SECRET_JWT_KEY
    })

    fastify.decorate('jwtAuth', async function (request, reply) {
        try {
            await request.jwtVerify()
        } catch (error) {
            return reply.code(401).send('Invalid or expired token')
        }
    })

    fastify.decorate('hasRole', function (allowedRole) {
        return async function (request, reply) {
            const userRole = request.user?.payload?.role

            if (userRole !== allowedRole) {
                return reply.code(403).send('Access denied')
            }
        }
    })
})