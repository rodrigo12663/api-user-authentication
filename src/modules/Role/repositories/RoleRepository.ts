import { EntityRepository, Repository } from 'typeorm'
import Role from '../entities/Role'

@EntityRepository(Role)
export default class RoleRepository extends Repository<Role> {
  async findByName (name:string) : Promise<Role> |undefined {
    const role = await this.findOne({ where: { name } })
    return role
  }
}
