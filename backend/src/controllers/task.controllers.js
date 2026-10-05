const Task = require ( '../models/task.models.js' )

async function getAllTasks( request , reply ){
    try{
        const tasks = await Task.find()
        reply.status(200).send(
            {
                tasks: tasks
            }
        )
    }catch(err){
        reply.status(500).send(
            {
                status: 500,
                error: err
            }
        )
    }
}

async function getTaskById( request , reply ){
    try{
        const tasks = await Task.find()
        reply.status(200).send(
            {
                tasks: tasks
            }
        )
    }catch(err){
        reply.status(500).send(
            {
                status: 500,
                error: err
            }
        )
    }
}

async function createTask( request , reply ){
    try{
        const tasks = await Task.find()
        reply.status(200).send(
            {
                tasks: tasks
            }
        )
    }catch(err){
        reply.status(500).send(
            {
                status: 500,
                error: err
            }
        )
    }
}

async function updateTaskById( request , reply ){
    try{
        const task = await Task.findByIdAndUpdate(request.params.id , request.body , { new : true})
        reply.status(200).send(
            {
                message: "task has updated successfully!",
                task: task
            }
        )
    }catch(err){
        reply.status(500).send(
            {
                status: 500,
                error: err
            }
        )
    }
}

async function deleteTaskById( request , reply ){
    try{
        const task = await Task.findByIdAndDelete(request.params.id)
        reply.status(204).send(
            {
                message: 'this task has deleted successfully!',
                task: task
            }
        )
    }catch(err){
        reply.status(500).send(
            {
                status: 500,
                error: err
            }
        )
    }
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTaskById
}