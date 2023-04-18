// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/User' 
import Hash from '@ioc:Adonis/Core/Hash'


export default class LoginController {
  //make a login 
    public async login ({ request, auth }: HttpContextContract) {
    
            const { email, password } = request.only(['email', 'password'])
        
            const user = await Client.findBy('email', email)
            if (!user || !(await Hash.verify(user.password, password))) {
              return 400
            }
        const token = await auth.use('api').attempt(email, password)
        return token.token
    }
    //make a logout 

    public async logout ({ auth }: HttpContextContract) {
        await auth.use('api').revoke()
        return { success: true }
    }


}
