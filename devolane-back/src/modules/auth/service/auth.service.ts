import { PrismaClient } from '@prisma/client'
import {
	LoginDto,
	RegisterDto,
	RegisterResponseDto,
	LoginResponseDto,
} from '../dto/auth.dto'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

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
			token,
		}
	}

	async register(dto: RegisterDto): Promise<RegisterResponseDto> {
		const existingUser = await this.prisma.user.findUnique({
			where: { email: dto.email },
		})

		if (existingUser) {
			throw new Error('User with this email already exists')
		}

		const hashedPassword = await bcrypt.hash(dto.password, 10)

		const user = await this.prisma.user.create({
			data: {
				email: dto.email,
				password: hashedPassword,
				name: dto.name,
			},
		})

		return {
			id: user.id,
			email: user.email,
			name: user.name as string,
		}
	}
}
