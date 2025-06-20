import { PrismaClient } from '@prisma/client'
import { RequestUserByUsername } from '../dto/user.dto'
import { RequestUserUpdateData } from '../dto/user.dto'

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

	async updateUserData(data: RequestUserUpdateData) {
		const user = await this.prisma.user.findUnique({
			where: { username: data.username },
		})

		if (!user) {
			throw new Error('User not found')
		}

		const updatedUser = await this.prisma.user.update({
			where: { username: data.username },
			data: {
				name: data.name || user.name,
				age: data.age || user.age,
				photo: data.photo || user.photo,
				position: data.position || user.position,
				city: data.city || user.city,
				bio: data.bio || user.bio,
				description: data.description || user.description,
			},
		})

		const updatedUserResponse = await this.prisma.user.findUnique({
			where: { username: data.username },
		})

		return updatedUserResponse
	}
}
