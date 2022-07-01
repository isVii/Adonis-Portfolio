import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class DeleteProjects extends BaseCommand {

  public static commandName = 'delete:projects'
  public static description = 'Supprimer tous les projets'

  public static settings = {

    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    const {default: Project} = await import('App/Models/Project')

    const projects = await Project.all()
    for (const project of projects) {
      await project.delete();
    }

    this.logger.success('Tous les projets ont été supprimés')
  }
}
