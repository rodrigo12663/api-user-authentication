import AppError from '../../../shared/errors/AppErrror'
import Role from '../entities/Role'
import RoleRepository from '../repositories/RoleRepository'

interface IRequest{
    id:string;
    name: string,
    description: string
}
export default class UpdateRoleServices {
  async execute ({ id, name, description }:IRequest) :Promise<Role> {
    const roleRepository = new RoleRepository()
    const role = await roleRepository.findOne({ id })

    if (!role) {
      throw new AppError('role not found')
    }
    const roleExists = await roleRepository.findByName(name)

    if (roleExists) {
      throw new AppError('there is already one role with this name')
    }
    role.name = name
    role.description = description

    await roleRepository.save(role)
    return role
  }
}
