import { EntityRepository, Repository } from 'typeorm'
import Role from '../entities/Role'

@EntityRepository(Role)
export default class RoleRepository extends Repository<Role> {
  async findByRole (userId:string) {
    const role = await this.findOne({ where: { userId } })
    return role
  }
}
