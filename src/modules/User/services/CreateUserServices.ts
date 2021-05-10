import { hash } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrror'
import Role from '../../Role/entities/Role'
import User from '../entities/User'
import { UserRepository } from '../repositories/UserReporsitory'

interface IRequest{
    name:string,
    cpf:string,
    password:string,
    role:Role
}
export default class CreateUserServices {
  async execute ({ name, cpf, password, role }:IRequest) :Promise<User> {
    const userRepository = getCustomRepository(UserRepository)

    const cpfExists = await userRepository.findByCpf(cpf)

    if (cpfExists) {
      throw new AppError('there is already one cpf with this user')
    }

    password = await hash(password, 8)

    const user = userRepository.create({ name, cpf, password, role })
    await userRepository.save(user)
    return user
  }
}
