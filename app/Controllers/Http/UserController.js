'use strict'
const User = use('App/Models/User')

class UserController {

    async users({response}){
        const users = await User.all()
        return response.json(users)
    }

    async login({ request, response, auth }) {
        const { email, password } = request.only(['email', 'password']);

        const token  = await auth.attempt(email, password)
        return response.json(token)
    }

    async create ({request, response, auth }) {
        await User.create(request.only(['username', 'email', 'password']))
        return response.send({message: 'User created succssfully'})

    }
}

module.exports = UserController
