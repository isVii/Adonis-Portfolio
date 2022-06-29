import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class DeleteCreation extends BaseCommand {

  public static commandName = 'delete:creation'
  public static description = 'Delete a creation with an ID'

  public static settings = {

    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    const {default: Creation} = await import('App/Models/Creation')

    const id_name = await this.prompt.ask('Quel est l\'id ou le nom du du projet ?')

    const creation = await Creation.findBy('id', id_name) || await Creation.findBy('name', id_name)

    if (!creation) {
      this.logger.error('Aucun project avec ce nom/id n\'a été trouvé !')
      return
    }

    await creation.delete()
    this.logger.success(`Le project avec le nom/id ${id_name} a été supprimé avec succès !`)
  }
}
