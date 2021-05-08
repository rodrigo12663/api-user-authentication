import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrror'
import RoleRepository from '../repositories/RoleRepository'

interface IRequest{
    id: string;
}
export default class DeleteRoleServices {
  async execute ({ id }:IRequest): Promise<void> {
    const roleRepository = getCustomRepository(RoleRepository)
    const role = await roleRepository.findOne({ id })

    if (!role) {
      throw new AppError('role not found')
    }
    await roleRepository.remove(role)
  }
}
