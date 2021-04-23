import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserReporsitory'
import { hash } from 'bcryptjs'
export default class UserController {
  async create (req:Request, res:Response) {
    const { name, cpf, password } = req.body

    const usersRepository = getCustomRepository(UserRepository)
    const cpfExists = await usersRepository.findByCPF(cpf)

    if (cpfExists) {
      res.json('cpf address already used.')
    }
    const hashedPassword = await hash(password, 8)

    const user = usersRepository.create({ name, cpf, password: hashedPassword })
    await usersRepository.save(user)
    return res.json(user)
  }
}
