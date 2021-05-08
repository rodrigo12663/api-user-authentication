
import { Request, Response } from 'express'
import CreateRoleServices from '../services/CreateRoleServices'
import DeleteRoleServices from '../services/DeleteRoleServices'
import ListOneRoleServices from '../services/ListOneRoleServices'
import ListRoleServices from '../services/ListRoleServices'
import UpdateRoleServices from '../services/UpdateRoleServices'

export default class RoleController {
  async create (req: Request, res: Response):Promise<Response> {
    const { name, description } = req.body
    const createRoleService = new CreateRoleServices()

    const role = await createRoleService.execute({ name, description })

    return res.json(role)
  }

  async index (req: Request, res: Response):Promise<Response> {
    const listRoles = new ListRoleServices()
    const roles = await listRoles.execute()
    return res.json(roles)
  }

  async show (req: Request, res: Response):Promise<Response> {
    const showRole = new ListOneRoleServices()
    const { id } = req.params
    const role = await showRole.execute({ id })
    return res.json(role)
  }

  async delete (req:Request, res:Response) {
    const deleteRole = new DeleteRoleServices()
    const { id } = req.params
    await deleteRole.execute({ id })

    return res.json({ message: 'role sucessfully deleted' })
  }

  async update (req:Request, res: Response) :Promise<Response> {
    const updateRoleServices = new UpdateRoleServices()
    const { id } = req.params
    const { name, description } = req.body
    const role = await updateRoleServices.execute({ id, name, description })

    return res.json(role)
  }
}
