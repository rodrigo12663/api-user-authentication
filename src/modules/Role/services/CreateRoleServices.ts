
import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrror'

import Role from '../entities/Role'
import RoleRepository from '../repositories/RoleRepository'

interface IRequest{
    name: string,
    description: string
}

export default class CreateRoleServices {
  async execute ({ name, description }:IRequest) :Promise<Role> {
    const rolesRepository = getCustomRepository(RoleRepository)

    const roleExists = await rolesRepository.findByName(name)

    if (roleExists) {
      throw new AppError('there is already one roles with this name')
    }

    const role = rolesRepository.create({ name, description })
    await rolesRepository.save(role)
    return role
  }
}
