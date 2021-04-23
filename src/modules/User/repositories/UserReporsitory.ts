import { EntityRepository, Repository } from 'typeorm'
import User from '../entities/User'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByCPF (cpf: string) {
    const user = await this.findOne(cpf)
    return user
  }
}
