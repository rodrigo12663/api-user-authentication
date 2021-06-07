import { Request, Response } from 'express'

import CreateUserServices from '../services/CreateUserServices'
import ListUsersServices from '../services/ListUsersServices'
import UpdateUserServices from '../services/UpdateUserServices'

export default class UserController {
  async create (req:Request, res:Response) {
    const { name, cpf, password, role } = req.body

    const createUser = new CreateUserServices()
    const user = await createUser.execute({ name, cpf, password, role })

    return res.json(user)
  }

  async index (req:Request, res:Response):Promise<Response> {
    const listUserServices = new ListUsersServices()
    const users = await listUserServices.execute()

    return res.json(users)
  }

  async update (req:Request, res:Response):Promise<Response> {
    const { id } = req.params
    const { name, cpf, password, role } = req.body
    const UpdateUser = new UpdateUserServices()
    const user = await UpdateUser.execute({ id, name, cpf, password, role })
    return res.json(user)
  }
}
