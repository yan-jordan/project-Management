const taskController = require ( '../controllers/task.controllers.js')

async function taskRouter( fastify , options ){
    fastify.get('/' , taskController.getAllTasks)
    fastify.get('/:id' , taskController.getTaskById)
    fastify.post('/' , taskController.createTask)
    fastify.put('/:id' , taskController.updateTaskById)
    fastify.delete('/:id' , taskController.deleteTaskById)
}

module.exports = taskRouter