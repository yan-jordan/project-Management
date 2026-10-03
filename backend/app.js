const fastify = require('fastify')( {
    logger : true
})

const mongoose = require('mongoose')

const PORT = 3000



// import my routes
const userRoutes = require('./src/routes/user.routes.js')
const projectRoutes = require('./src/routes/project.routes.js')

// connect to my db
try {
    mongoose.connect(
        process.env.MONGODB_URI 
    )
} catch (err) {
    fastify.log.err("--- --- --- ---data base connection has gone wrong!!!!1--- --- --- ---")
}


//start my server
fastify.register(userRoutes , { prefix : '/api/v1/users'})
fastify.register(projectRoutes , { prefix: '/api/v1/projects'})

const start = async () => {
     try { 
        await fastify.listen( { port : PORT } )
        fastify.log.info(`server is running on port : ${PORT}`)
     } catch(error) {
        fastify.log.error(error)
        process.exit(1)
     }
}

start()