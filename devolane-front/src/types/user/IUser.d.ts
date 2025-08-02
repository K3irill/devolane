export interface IUserImage {
	alt: string
	src: string
	width: number
	height: number
}
export interface IUser {
	bio?: string | null
	name: string | null
	email: string | null
	fullName?: string
	phone?: string
	age?: AnyPresentValue
	gender?: string
	position?: string
	haveJob?: boolean
	status?: string
	username: string
	photo?: string
	createdAt?: string
}

export type Gender = 'male' | 'female' | 'other' | null | undefined

export type IUserLogin = Pick<IUser, email | phone> & { password: string }

export type IUserRegister = Pick<IUser, 'name' | 'email' | 'username'> & {
	password: string
}

export type IUserRegisterResponse = {
	success: string
	data: {
		id: number
		email: string
		name: string
		username: string
	}
}

export type IUserLoginResponse = {
	success: string
	data: {
		id: number
		email: string
		name: string
		token: string
		username: string
	}
}

export type IUserFullResponse = {
	success: boolean
	data: IUser
}

export type IUserUpdateRequest = {
	username: string
	name?: string
	age?: Date
	photo?: File
	position?: string
	city?: string
	bio?: string
	description?: string
}
