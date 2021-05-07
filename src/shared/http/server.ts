import express from 'express'
import 'reflect-metadata'
import routes from '../routes/index'
import '../typeorm'
import cors from 'cors'
import 'express-async-errors'
import ConfigError from '../middlewares/ConfigError'

const configError = new ConfigError()
const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)
app.use(configError.execute)

app.listen(3333, () => {
  console.log('Server started on port 3333')
})
