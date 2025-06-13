import { Router } from 'express'
import { AuthController } from '../controller/auth.controller'
import { AuthService } from '../service/auth.service'
import { body, validationResult } from 'express-validator'

const router = Router()
const authService = new AuthService()
const authController = new AuthController(authService)

const validateRequest = (req: any, res: any, next: any) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({
			success: false,
			errors: errors.array(),
		})
	}
	next()
}

const registerValidation = [
	body('email')
		.notEmpty()
		.withMessage('Email обязателен')
		.isEmail()
		.withMessage('Некорректный email'),
	body('password')
		.notEmpty()
		.withMessage('Пароль обязателен')
		.isLength({ min: 8 })
		.withMessage('Пароль должен быть не менее 8 символов'),
	body('name')
		.notEmpty()
		.withMessage('Имя обязательно')
		.isLength({ min: 3 })
		.withMessage('Имя должно быть не менее 3 символов'),
	validateRequest,
]

router.post(
	'/register',
	registerValidation,
	authController.register.bind(authController)
)

router.post('/login', authController.login.bind(authController))

export { router as authRouter }
