import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class CreateCreation extends BaseCommand {
 
  public static commandName = 'make:creation'
  public static description = 'Create a creation'

  public static settings = {

    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    this.logger.info('Hello world!')
  }
}
