import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class DeleteProject extends BaseCommand {

  public static commandName = 'delete:project'
  public static description = 'Delete a project with an ID'

  public static settings = {

    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    const {default: Project} = await import('App/Models/Project')

    const id_name = await this.prompt.ask('Quel est l\id ou le nom du du projet ?')

    const project = await Project.findBy('id', id_name) || await Project.findBy('name', id_name)

    if (!project) {
      this.logger.error('Aucun project avec ce nom/id n\'a été trouvé !')
      return
    }

    await project.delete()
    this.logger.success(`Le project avec le nom/id ${id_name} a été supprimé avec succès !`)
  }
}
