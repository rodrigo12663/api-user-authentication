import { Router } from 'express'
import RoleController from '../controllers/RoleController'

const roleRoutes = Router()

const roleController = new RoleController()
roleRoutes.post('/', roleController.create)
roleRoutes.get('/', roleController.index)

export default roleRoutes
