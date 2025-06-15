import { Router } from 'express'
import { UserController } from '../controller/user.controller'
import { UserService } from '../service/user.service'
import { authMiddleware } from '../../auth/middleware/auth.middleware'

const router = Router()
const userService = new UserService()
const userController = new UserController(userService)

router.post(
	'/get-user',
	authMiddleware,
	userController.getUserByUsername.bind(userController)
)

export { router as userRouter }
