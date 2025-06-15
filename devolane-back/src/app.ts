import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { authRouter } from './modules/auth/routes/auth.routes'
import { userRouter } from './modules/user/routes/user.routes'

const app = express()

app.use(
	cors({
		origin: process.env.FRONTEND_URL || 'http://localhost:3000',
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	})
)
app.use(helmet())
app.use(express.json())

//Routes
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

export { app }
