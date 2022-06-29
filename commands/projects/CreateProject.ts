import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class CreateProject extends BaseCommand {

  public static commandName = 'make:project'
  public static description = 'Create a project'

  public static settings = {

    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    const {default: Project} = await import('App/Models/Project')

    const project_name = await this.prompt.ask('Quel est le nom du projet ?')
    const project_description = await this.prompt.ask('Faites une courte description du projet.')
    const image_url = await this.prompt.ask('Veuillez insérer le lien d\'une image du projet')

    const project = await Project.create({
      name: project_name,
      description: project_description,
      image_url: image_url
    })

    this.logger.success(`Le projet nommé ${project.name} a été crée avec succès !`)
  }
}
