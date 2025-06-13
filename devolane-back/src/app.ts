import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { authRouter } from './modules/auth/routes/auth.routes'

const app = express()

//Middlewares
app.use(cors())
app.use(helmet())
app.use(express.json())

//Routes
app.use('/api/auth', authRouter)

export { app }
