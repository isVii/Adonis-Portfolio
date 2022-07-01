import {BaseCommand} from '@adonisjs/core/build/standalone'
import {MissionState} from "App/Models/Mission";

export default class CreateMission extends BaseCommand {

  public static commandName = 'create:mission'
  public static description = 'Create a mission'

  public static settings = {
    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    const {default: Mission} = await import('App/Models/Mission')
    const {default: Project} = await import('App/Models/Project')

    const name = await  this.prompt.ask('Quel est le nom de la mission ?')
    const description = await this.prompt.ask('Faites une courte description de la mission')
    const state = await this.prompt.choice('Indiquez le statut de la commande', [
      {name: "FINISHED", message: 'Terminée'},
      {name: "STARTED", message: 'Commencée'},
      {name: "CANCELLED", message: 'Annulée'},
    ])

    const project_id = await  this.prompt.ask('Indiquez l\'id du projet concerné par la mission.')
    const project = await Project.findBy('id', project_id)

    if (!project) {
      this.logger.error('Aucun project avec ce nom/id n\'a été trouvé !')
      return
    }

    await Mission.create({
      name: name,
      description: description,
      state: MissionState[state],
      projectId: project.id
    })

    this.logger.success('Mission créée avec succès.')
  }
}
