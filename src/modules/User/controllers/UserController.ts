import { Request, Response } from 'express'

import CreateUserServices from '../services/CreateUserServices'
import ListUsersServices from '../services/ListUsersServices'

export default class UserController {
  async create (req:Request, res:Response) {
    const { name, cpf, password, role } = req.body

    const createUser = new CreateUserServices()
    const user = await createUser.execute({ name, cpf, password, role })

    return res.json(user)
  }

  async index (req:Request, res:Response) {
    const listUserServices = new ListUsersServices()
    const users = await listUserServices.execute()

    return res.json(users)
  }
}
