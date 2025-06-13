import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

// Расширяем типы Express для добавления user в Request
declare global {
	namespace Express {
		interface Request {
			user?: any
		}
	}
}

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.headers.authorization?.split(' ')[1]

		if (!token) {
			return res.status(401).json({
				success: false,
				message: 'Требуется авторизация',
				redirect: '/auth/login',
			})
		}

		if (!process.env.JWT_SECRET) {
			throw new Error('JWT_SECRET is not configured')
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.user = decoded

		next()
	} catch (error) {
		return res.status(401).json({
			success: false,
			message: 'Неверный токен',
			redirect: '/auth/login',
		})
	}
}
