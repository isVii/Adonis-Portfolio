import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class DeleteCreation extends BaseCommand {

  public static commandName = 'delete:creation'
  public static description = 'Delete a creation with an ID'

  public static settings = {

    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    this.logger.info('Hello world!')
  }
}
