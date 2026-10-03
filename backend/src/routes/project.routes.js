const projectController = require('../controllers/project.controllers')

async function projectRoutes (fastify , options) {
    fastify.get('/' , projectController.getAllProjects)
    fastify.get('/:id' , projectController.getProjectById)
    fastify.post('/' , projectController.createProject)
    fastify.put('/:id' , projectController.updateProjectById)
    fastify.delete('/:id' , projectController.deleteProjectById)
}

module.exports = projectRoutes