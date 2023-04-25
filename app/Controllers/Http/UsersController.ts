import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'



import Ws from 'App/Services/Ws'
import { Response } from '@adonisjs/core/build/standalone'



export default class UsersController {
    async joinGame ({ request, response }) {
        const gameId = request.input('gameId')
        const playerId = request.input('playerId')
        const io = Ws.io
        io.emit('joinGame', gameId, playerId)
        response.send({ message: 'jugador' })

      }

    public async store2({ request, response }) {
        const socket = Ws.io;
      
        socket.on('connect', () => {
          console.log('Connected to server');
        });
      
        socket.on('new:user', (data) => {
          console.log('Received new user:', data.username);
        });
      
        socket.on('my-event', (data) => {"holis"});
      
        response.send({ message: 'Event emitted!' });
      }
      

    public async store({ request, response }: HttpContextContract) {
        schema.create({
        name: schema.string(),
        email: schema.string({}, [rules.email(), rules.unique({ table: 'user', column: 'email' })]),
        password: schema.string({}, [ rules.minLength(8)]),
        })

        const validatedData = request.only(['name', 'email', 'password']);

        // Check if password matches password_confirmation
       
        
        // Check if client with email already exists
        const clientExists = await User.query().where('email', validatedData.email).first()
        if (clientExists) {
          return 401
        }
        const client = new User()
        client.name = validatedData.name
        client.email = validatedData.email
        client.password = validatedData.password
      
        await client.save()
        return 200
    }

    async index ({ response }: HttpContextContract) {
        const users = await User.all()
        return response.status(200).json(users)
    }

    //return just the id by the email
    async show ({ params, response }: HttpContextContract) {

        const user = await User.findByOrFail('email', params.email)
        return user.id
    }

}
