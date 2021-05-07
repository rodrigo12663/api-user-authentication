import express from 'express'
import roleRoutes from '../../modules/Role/routes/RoleRoutes'
import userRoutes from '../../modules/User/routes/UserRoutes'
const routes = express.Router()

routes.use('/users', userRoutes)
routes.use('/roles', roleRoutes)

export default routes
