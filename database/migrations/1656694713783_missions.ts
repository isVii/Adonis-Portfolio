import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import {MissionState} from "App/Models/Mission";

export default class extends BaseSchema {
  protected tableName = 'missions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.text('description')
      table.enu('state', Object.values(MissionState))
      table.integer('project_id').references('id').inTable('projects').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
