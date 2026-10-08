// import fastify package
const fastify = require('fastify')({
  logger: {
    transport: { target: 'pino-pretty' }
  }
})

// import and register my fastify plugins
const jwtPlugin = require('./src/plugins/jwtPlugin.js')
fastify.register(jwtPlugin)

// import other stuffs
const basicAuth = require('./src/middlewares/auth/different-types-authentication/basic.auth.js')

// add my hooks 

// importing mongoose ODM(Object Document Mapping)
const mongoose = require('mongoose')

// declaring backend service port
const PORT = process.env.PORT

// import  routes
const userRoutes = require('./src/routes/user.routes.js')
const projectRoutes = require('./src/routes/project.routes.js')
const taskRoutes = require('./src/routes/task.routes.js')

// registering routes
fastify.register(userRoutes , { prefix : '/api/v1/users'})
fastify.register(projectRoutes , { prefix: '/api/v1/projects'})
fastify.register(taskRoutes , { prefix: '/api/v1/tasks'})

// start the server
const start = async () => {
     try { 
        await mongoose.connect(
            process.env.MONGODB_URI
        )
        await fastify.listen(
            {
                port: PORT || 4000
            }
        )
     } catch(err) {
        fastify.log.error(err)
        process.exit(1)
     }
}

start()