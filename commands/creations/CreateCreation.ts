import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class CreateCreation extends BaseCommand {

  public static commandName = 'create:creation'
  public static description = 'Create a creation'

  public static settings = {

    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    const {default: Creation} = await import('App/Models/Creation')

    const project_name = await this.prompt.ask('Quel est le nom de cette réalisation ?')
    const project_description = await this.prompt.ask('Faites une courte description de la réalisation.')
    const github_url = await this.prompt.ask('Veuillez insérer le lien du repo GitHub')

    const project = await Creation.create({
      name: project_name,
      description: project_description,
      githubUrl: github_url
    })

    this.logger.success(`La réalisation nommée ${project.name} a été crée avec succès !`)
  }
}
