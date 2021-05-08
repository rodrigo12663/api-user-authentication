import { Router } from 'express'
import RoleController from '../controllers/RoleController'

const roleRoutes = Router()

const roleController = new RoleController()
roleRoutes.post('/', roleController.create)
roleRoutes.get('/', roleController.index)
roleRoutes.get('/:id', roleController.show)
roleRoutes.delete('/:id', roleController.delete)
roleRoutes.put('/:id', roleController.update)

export default roleRoutes
