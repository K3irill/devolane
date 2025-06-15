import { PrismaClient } from '@prisma/client'
import {
	LoginDto,
	RegisterDto,
	RegisterResponseDto,
	LoginResponseDto,
} from '../dto/auth.dto'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { createUniqueUname } from '../../../core/utils/createUniqeUname'

export class AuthService {
	private prisma: PrismaClient

	constructor() {
		this.prisma = new PrismaClient()
	}

	async login(dto: LoginDto): Promise<LoginResponseDto> {
		const user = await this.prisma.user.findUnique({
			where: { email: dto.email },
		})

		if (!user) {
			throw new Error('Пользователь не найден')
		}

		const isPasswordValid = await bcrypt.compare(dto.password, user.password)
		if (!isPasswordValid) {
			throw new Error('Неверный пароль')
		}

		if (!process.env.JWT_SECRET) {
			throw new Error('JWT_SECRET is not configured')
		}

		const token = jwt.sign(
			{ id: user.id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: '24h' }
		)

		return {
			id: user.id,
			email: user.email,
			name: user.name as string,
			username: user.username as string,
			token,
		}
	}

	async register(dto: RegisterDto): Promise<RegisterResponseDto> {
		if (dto.username) {
			const existingUsernameUser = await this.prisma.user.findFirst({
				where: {
					username: dto.username,
				},
			})

			if (existingUsernameUser) {
				throw new Error('User with this username already exists')
			}
		}

		const existingEmailUser = await this.prisma.user.findFirst({
			where: {
				email: dto.email,
			},
		})

		if (existingEmailUser) {
			throw new Error('User with this email already exists')
		}

		const hashedPassword = await bcrypt.hash(dto.password, 10)
		const uniqueUsername = dto.username || createUniqueUname(dto.email)

		const user = await this.prisma.user.create({
			data: {
				email: dto.email,
				password: hashedPassword,
				name: dto.name,
				username: uniqueUsername,
			},
		})

		return {
			id: user.id,
			email: user.email,
			name: user.name as string,
			username: user.username as string,
		}
	}

	async refresh(token: string): Promise<LoginResponseDto> {
		if (!process.env.JWT_SECRET) {
			throw new Error('JWT_SECRET is not configured')
		}

		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET) as {
				id: number
				email: string
			}
			const user = await this.prisma.user.findUnique({
				where: { id: decoded.id },
			})

			if (!user) {
				throw new Error('User not found')
			}

			const newToken = jwt.sign(
				{ id: user.id, email: user.email },
				process.env.JWT_SECRET,
				{ expiresIn: '24h' }
			)

			return {
				id: user.id,
				email: user.email,
				name: user.name as string,
				username: user.username as string,
				token: newToken,
			}
		} catch (error) {
			throw new Error('Invalid token')
		}
	}
}
