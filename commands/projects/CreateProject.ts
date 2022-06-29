import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class CreateProject extends BaseCommand {

  public static commandName = 'make:project'
  public static description = 'Create a project'

  public static settings = {

    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    this.logger.info('Hello world!')
  }
}
