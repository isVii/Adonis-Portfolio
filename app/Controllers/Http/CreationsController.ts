import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Creation from 'App/Models/Creation'

export default class CreationsController {

    public async getCreationsJSON({response}: HttpContextContract) {
        return response.send({
            creations: await Creation.all()
        })
    }

    public async getCreationJSON({request, response}: HttpContextContract) {
        const id = request.param('id', 1)
        const creation = await Creation.findBy('id', id)

        if (!creation) {
            response.status(404)
            return
        }
        
        return creation
    }

    public async createCreation({request, response}: HttpContextContract): Promise<void> {
        
        const body = request.only(['creation_name', 'creation_description', 'github_url'])

        if (!(body['project_name'] || body['project_description'] | body['image_url'])) {
            response.status(400).send('Body was invalid, args missing')
            return
        }

        const project = await Creation.create({
            name: body['creation_name'],
            description: body['creation_description'],
            githubUrl: body['github_url']
        })

        return response.status(201).send(project)
    }

    public async showProjectsEdge({view}: HttpContextContract) {
        return await view.render('pages/creations/creations', {
            projects: await Creation.all()
        })
    }
}
