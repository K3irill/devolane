export interface IUser {
	name: string | null
	email: string | null
	fullName?: string
	phone?: string
	age?: number
	gender?: string
	position?: string
	haveJob?: boolean
	status?: string
}

export type IUserLogin = Pick<IUser, email | phone> & { password: string }

export type IUserRegister = Pick<IUser, name, email> & { password: string }

export type IUserRegisterResponse = {
	success: string
	data: {
		id: number
		email: string
		name: string
	}
}

export type IUserLoginResponse = {
	success: string
	data: {
		id: number
		email: string
		name: string
		token: string
	}
}
