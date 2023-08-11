import express, { Application } from 'express'
import 'express-async-errors'
import { handleErrorsMiddleware } from './middlewares/errors.middleware'

const app: Application = express()

app.use(express.json())

app.use(handleErrorsMiddleware)

export default app
