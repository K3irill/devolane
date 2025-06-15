import { Request, Response } from 'express'
import { AuthService } from '../service/auth.service'
import { RegisterDto } from '../dto/auth.dto'

export class AuthController {
	constructor(private authService: AuthService) {}

	async login(req: Request, res: Response) {
		try {
			const result = await this.authService.login(req.body)
			res.json({
				success: true,
				data: result,
			})
		} catch (error) {
			if (error instanceof Error) {
				res.status(401).json({
					success: false,
					message: error.message,
					redirect: '/auth/login',
				})
			} else {
				res.status(500).json({
					success: false,
					message: 'Внутренняя ошибка сервера',
				})
			}
		}
	}

	async register(req: Request, res: Response) {
		try {
			const registerData: RegisterDto = req.body

			const user = await this.authService.register(registerData)
			res.status(201).json({
				success: true,
				data: user,
			})
		} catch (error) {
			if (error instanceof Error) {
				res.status(400).json({
					success: false,
					message: error.message,
				})
			} else {
				res.status(500).json({
					success: false,
					message: 'Внутренняя ошибка сервера',
				})
			}
		}
	}

	async refresh(req: Request, res: Response) {
		try {
			const token = req.headers.authorization?.split(' ')[1]
			if (!token) {
				return res.status(401).json({
					success: false,
					message: 'Требуется авторизация',
				})
			}

			const result = await this.authService.refresh(token)
			res.json({
				success: true,
				data: result,
			})
		} catch (error) {
			if (error instanceof Error) {
				res.status(401).json({
					success: false,
					message: error.message,
				})
			} else {
				res.status(500).json({
					success: false,
					message: 'Внутренняя ошибка сервера',
				})
			}
		}
	}
}
