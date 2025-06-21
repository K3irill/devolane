//user.dto.ts

export interface RequestUserByUsername {
	username: string
}

export interface RequestUserUpdateData {
	username: string
	name?: string
	age?: Date | number
	gender?: 'male' | 'female'
	photo?: string
	position?: string
	phone?: string
	city?: string
	bio?: string
	description?: string
}
