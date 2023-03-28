import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {


    async store ({ request, response }: HttpContextContract) {
        const data = request.only(['email', 'password', 'name'])
        const user = await User.create(data)
        return response.status(201).json(user)
    }


}
