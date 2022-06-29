import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class DeleteProjects extends BaseCommand {

  public static commandName = 'delete:projects'
  public static description = 'delete all projects'

  public static settings = {

    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    const {default: Project} = await import('App/Models/Project')
    
    const projects = await Project.all()
    projects.forEach(async (project) => await project.delete())

    this.logger.success('All projects was deleted')
  }
}
