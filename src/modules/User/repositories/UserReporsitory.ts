import { EntityRepository, Repository } from 'typeorm'
import User from '../entities/User'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByCpf (cpf:string): Promise<User | undefined> {
    const user = await this.findOne({ where: { cpf } })
    return user
  }
}
