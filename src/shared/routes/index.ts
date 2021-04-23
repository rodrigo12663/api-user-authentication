import express from 'express'
import userRoutes from '../../modules/User/routes/UserRoutes'
const routes = express.Router()

routes.use('/users', userRoutes)

export default routes
