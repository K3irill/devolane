import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator'

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
