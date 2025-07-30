import { IUserFullResponse } from '@/types/user/IUser'
import { getCurrentUser } from '../api/user/getUser'
import { cookies } from 'next/headers'

export async function getCurrentUserWithCookie() {
	const username = (await cookies()).get('username')?.value
	let currentUser: IUserFullResponse | null = null
	if (username) {
		currentUser = await getCurrentUser(username)
	}

	return currentUser
}
