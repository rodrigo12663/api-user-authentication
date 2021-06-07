import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrror'
import Role from '../../Role/entities/Role'
import User from '../../User/entities/User'
import { hash } from 'bcryptjs'
import { UserRepository } from '../repositories/UserReporsitory'

interface IRequest{
    id:string;
    name:string,
    cpf:string,
    password:string,
    role:Role
}

export default class UpdateUserServices {
  async execute ({ id, name, cpf, password, role }:IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.findOne(id)

    if (!user) {
      throw new AppError('user not found')
    }

    const cpfExists = await userRepository.findByCpf(cpf)

    if (cpfExists) {
      throw new AppError('there is already one cpf with this user')
    }
    password = await hash(password, 8)
    user.name = name
    user.cpf = cpf
    user.password = password
    user.role = role

    await userRepository.save(user)
    return user
  }
}
