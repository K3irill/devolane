//user.dto.ts

import { IUser } from '../../../shared/types/user.type'

export interface RequestUserByUsername {
	username: string
}

export interface RequestUserUpdateData {
	username: string
	name?: string
	age?: Date
	photo?: string
	position?: string
	city?: string
	bio?: string
	description?: string
}
