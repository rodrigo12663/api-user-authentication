import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrror'
import Role from '../entities/Role'
import RoleRepository from '../repositories/RoleRepository'

interface IRequest{
    id:string
}
export default class ListRoleServices {
  async execute ({ id }:IRequest):Promise<Role> {
    const rolesRepository = getCustomRepository(RoleRepository)
    const role = await rolesRepository.findOne({ id })

    if (!role) {
      throw new AppError('role not found')
    }
    return role
  }
}
