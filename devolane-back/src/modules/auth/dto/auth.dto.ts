import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator'
import { IUserRole } from '../../../shared/types/user.type'

//Login -------------------|
export class LoginDto {
	email!: string
	password!: string
}

export class LoginResponseDto {
	id!: number
	token!: string
	email!: string
	name!: string
	username!: string
	age?: Date
	photo?: string
	position?: string
	city?: string
	bio?: string
	description?: string
	role?: IUserRole
	createdAt?: Date
	updatedAt?: Date
}

//Register ----------------|
export class RegisterDto {
	email!: string
	password!: string
	name!: string
	username?: string
}

export class RegisterResponseDto {
	id!: number
	email!: string
	name!: string
	username!: string
}
