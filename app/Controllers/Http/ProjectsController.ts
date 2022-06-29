 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'

export default class ProjectsController {

    public async getProjectsJSON({response}: HttpContextContract) {
        return response.send({
            projects: await Project.all()
        })
    }
    
    public async getProjectJSON({request, response}: HttpContextContract) {
        const id = request.param('id', 1)
        const project = await Project.findBy('id', id)

        if (!project) {
            response.status(404)
            return
        }
        
        return project
    }

    public async createProject({request, response}: HttpContextContract): Promise<void> {
        const body = request.only(['project_name', 'project_description', 'image_url'])

        if (!(body['project_name'] || body['project_description'] || body['image_url'])) {
            response.status(400).send('Body was invalid, args missing')
            return
        }

        const project = await Project.create({
            name: body['project_name'],
            description: body['project_description'],
            image_url: body['image_url']
        })

        return response.status(201).send(project)
    }

    public async showProjectsEdge({view}: HttpContextContract) {
        return await view.render('pages/projects/projects', {
            projects: await Project.all()
        })
    }

    public async showProjectEdge({request, view, response}: HttpContextContract) {
        const id = request.param('id')
        const project = await Project.findBy('id', id)

        if (!project) {
            response.status(404)
            return
        }
        return await view.render('pages/projects/project', {
            project: project
        })
    }
}
