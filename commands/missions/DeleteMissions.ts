import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class DeleteMissions extends BaseCommand {

  public static commandName = 'delete:missions'
  public static description = 'Supprimer toutes les missions'

  public static settings = {

    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    const {default: Mission} = await import('App/Models/Mission')
    const missions = await Mission.all()

    for (const mission of missions) {
      await  mission.delete()
    }

    this.logger.success('Toutes les missions ont été supprimées')
  }
}
