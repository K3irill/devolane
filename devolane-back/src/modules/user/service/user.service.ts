import { PrismaClient } from '@prisma/client'
import { RequestUserByUsername } from '../dto/user.dto'

export class UserService {
	private prisma: PrismaClient

	constructor() {
		this.prisma = new PrismaClient()
	}

	async getUserByUsername(data: RequestUserByUsername) {
		const user = await this.prisma.user.findUnique({
			where: { username: data.username },
		})

		if (!user) {
			throw new Error('User not found')
		}

		return user
	}
}
