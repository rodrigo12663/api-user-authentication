import { getCustomRepository } from 'typeorm'
import Role from '../entities/Role'
import RoleRepository from '../repositories/RoleRepository'

export default class ListRoleServices {
  async execute () :Promise<Role[]> {
    const rolesRepository = getCustomRepository(RoleRepository)
    const roles = await rolesRepository.find()
    return roles
  }
}
