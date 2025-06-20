import { ISkill } from './skill.type'

export enum IUserRole {
	ADMIN,
	MODERATOR,
	USER,
	CREATOR,
}

export interface IUser {
	id: number
	email: string
	username: string
	password: string
	name: string
	age: Date
	photo: string
	position: string
	city: string
	bio: string
	description: string
	role: IUserRole
	createdAt: Date
	updatedAt: Date
	skills: ISkill[]
}
