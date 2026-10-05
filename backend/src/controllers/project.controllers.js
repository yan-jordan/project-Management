const Project = require("../models/project.models")
const User = require("../models/user.models.js")

async function getAllProjects(request , reply){
    try{
        const projects = await Project.find()
        reply.send(
            {
                message: "All projects retrieved successfully!",
                projects: projects
            }
        )
    }catch(err){
        reply.status(500).send(
            {
                message: "something is wrong!",
                error: err
            }
        )
    }
}

async function getProjectById(request , reply){
    try{
        const project = await Project.findById(request.params.id)
        reply.status(200).send(
            {
                message: `Project by id ${request.param.id} has found successfully !`,
                project: project
            }
        )
    }catch(err){
        reply.status(500).send(
            {
                message: "something is wrong!",
                error: err
            }
        )
    }
}

// returns an error message, or null if everything is valid
async function validateProjectUsers(body) {
    if (body.projectManager !== undefined) {
        const manager = await User.findById(body.projectManager)
        if (!manager || !["admin", "project manager"].includes(manager.role)) {
            return "Project manager must be an existing user with role 'admin' or 'project manager'"
        }
    }

    if (body.teamMembers !== undefined) {
        const ids = [...new Set(body.teamMembers)]           // remove duplicates
        const count = await User.countDocuments({ _id: { $in: ids } })
        if (count !== ids.length) {
            return "Some team members do not exist in users"
        }
    }

    return null
}

async function createProject (request , reply) {
    try{
        const error = await validateProjectUsers(request.body)
        if (error) {
            return reply.status(400).send({ error })
        }

        const project = new Project(request.body)
        await project.save()
        return reply.status(201).send({
            message: "Project has saved successfully",
            project: project
        })
    }catch(err){
        return reply.status(500).send({
            message: "sth went wrong",
            error: err.message })
    }
}

async function updateProjectById(request , reply){
    try{
        const error = await validateProjectUsers(request.body)
        if (error) {
            return reply.status(400).send({ error })
        }

        const project = await Project.findByIdAndUpdate(request.params.id , request.body , {
            new: true
        })
        if (!project) {
            return reply.status(404).send({ message: "project not found" })
        }

        return reply.status(200).send(
            {
                message: "Project has updated successfully !",
                updatedProject: project
            }
        )
    }catch(err){
        return reply.status(500).send(
            {
                message: "sth went wrong !",
                error: err.message
            }
        )
    }
}

async function deleteProjectById(request , reply){
    try{
        const result = await Project.findByIdAndDelete(request.params.id)
        return reply.status(200).send(result)
    }catch(err){
        return reply.status(500).send("sth wrong !")
    }
}

module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById
}
