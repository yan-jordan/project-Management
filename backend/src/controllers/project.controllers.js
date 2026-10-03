const Project = require("../models/project.models")

async function getAllProjects( request , reply ){
    try{
        const projects = await Project.find()
        reply.status(200).send({
            projects: projects
        })
    }catch(error){
        reply.status(500).send(
            {
                error : error
            }
        )
    }
}

async function getProjectById( request , reply ){
    try{
        const project = await Project.findById(request.params.id)
        reply.status(200).send({
            project: project
        })
    }catch(error){
        reply.status(500).send(
            {
                error : error
            }
        )
    }
}

async function createProject( request , reply ){
    try{
        const project = new Project(request.body)
        await project.save()
        reply.status(200).send({
            status: 200,
            message: 'user has created successfully!',
            project: project
        })
    }catch(error){
        reply.status(500).send(
            {
                error : error
            }
        )
    }
}

async function updateProjectById( request , reply ){
    try{
        const project = await Project.findByIdAndUpdate(request.params.id , request.body , { new : true})
        reply.status(200).send({
            updated_project : project
        })
    }catch(error){
        reply.status(500).send(
            {
                error : error
            }
        )
    }
}

async function deleteProjectById( request , reply ){
    try{
        const projects = await Project.find()
        reply.status(200).send({
            projects: projects
        })
    }catch(error){
        reply.status(500).send(
            {
                error : error
            }
        )
    }
}



module.exports = {
    getAllProjects,
    getProjectById,
    deleteProjectById,
    updateProjectById,
    createProject
}