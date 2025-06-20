import { Request, Response } from 'express'
import { UserService } from '../service/user.service'

export class UserController {
	constructor(private userService: UserService) {}

	async getUserByUsername(req: Request, res: Response) {
		try {
			const result = await this.userService.getUserByUsername(req.body)
			res.json({
				success: true,
				data: result,
			})
		} catch (error) {
			if (error instanceof Error) {
				res.status(401).json({
					success: false,
					message: error.message,
					redirect: '/',
				})
			} else {
				res.status(500).json({
					success: false,
					message: 'Внутренняя ошибка сервера',
				})
			}
		}
	}

	async updateUserData(req: Request, res: Response) {
		try {
			const result = await this.userService.updateUserData(req.body)
			res.json({
				success: true,
				data: result,
			})
		} catch (error) {
			if (error instanceof Error) {
				res.status(401).json({
					success: false,
					message: error.message,
					redirect: '/',
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
