import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserReporsitory'
import { hash } from 'bcryptjs'
// import AppError from '../../../shared/errors/AppErrror'
export default class UserController {
  async create (req:Request, res:Response) {
    const { name, cpf, password, role } = req.body

    const usersRepository = getCustomRepository(UserRepository)
    const cpfExists = await usersRepository.findByCpf(cpf)

    if (cpfExists) {
      res.status(401).json('there is already one user whit this cpf')
    }
    const hashedPassword = await hash(password, 8)

    const user = usersRepository.create({ name, cpf, password: hashedPassword, role })
    await usersRepository.save(user)
    return res.json(user)
  }

  async index (req:Request, res:Response) {
    const usersRepository = getCustomRepository(UserRepository)
    const users = await usersRepository.find({ relations: ['role'] })

    return res.json(users)
  }
}
