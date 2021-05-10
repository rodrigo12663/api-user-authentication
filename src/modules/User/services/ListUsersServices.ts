import { getCustomRepository } from 'typeorm'
import User from '../entities/User'
import { UserRepository } from '../repositories/UserReporsitory'

export default class ListUsersServices {
  async execute ():Promise<User[]> {
    const userReporsitory = getCustomRepository(UserRepository)
    const users = await userReporsitory.find({ relations: ['role'] })

    return users
  }
}
