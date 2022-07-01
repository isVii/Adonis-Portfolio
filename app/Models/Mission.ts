import {DateTime} from 'luxon'
import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Mission extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public state: MissionState

  @column()
  public projectId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}

export enum MissionState {
  FINISHED,
  STARTED,
  CANCELLED
}
