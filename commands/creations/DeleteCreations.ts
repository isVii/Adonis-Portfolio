import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class DeleteCreations extends BaseCommand {

  public static commandName = 'delete:creations'
  public static description = 'Supprimer toutes les réalisations'

  public static settings = {

    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    const {default: Creation} = await import('App/Models/Creation')
    const creations = await Creation.all()

    for (const creation of creations) {
      await  creation.delete()
    }

    this.logger.success('Toutes les réalisations ont été supprimées')
  }
}
