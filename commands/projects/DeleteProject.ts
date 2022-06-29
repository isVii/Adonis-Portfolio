import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class DeleteProject extends BaseCommand {

  public static commandName = 'delete:project'
  public static description = 'Delete a project with an ID'

  public static settings = {

    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    this.logger.info('Hello world!')
  }
}
