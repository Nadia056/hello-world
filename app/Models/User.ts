import { DateTime } from 'luxon'
import { BaseModel, column,beforeSave } from '@ioc:Adonis/Lucid/Orm'

import Hash from '@ioc:Adonis/Core/Hash'


export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public  email: string

  @column()

  public password: string

  @column()

  public name: string


   @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
