
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import RoleRepository from '../repositories/RoleRepository'

export default class RoleController {
  async create (req: Request, res: Response) {
    const { name, description } = req.body

    const rolesRepository = getCustomRepository(RoleRepository)

    const roles = rolesRepository.create({ name, description })
    await rolesRepository.save(roles)
    return res.json(roles)
  }

  async index (req: Request, res: Response) {
    const rolesRepository = getCustomRepository(RoleRepository)
    const roles = await rolesRepository.find()
    return res.json(roles)
  }
}
