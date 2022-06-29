import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class DeleteCreations extends BaseCommand {

  public static commandName = 'delete:creations'
  public static description = 'delete all creations'

  public static settings = {

    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    const {default: Creation} = await import('App/Models/Creation')
    const creations = await Creation.all()
    creations.forEach(async (creation) => await creation.delete())
    this.logger.success('All creatios was deleted')
  }
}
