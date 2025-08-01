import { IUserFullResponse } from '@/types/user/IUser'
import { axiosServer } from '../axiosServer'

export async function getCurrentUser(
	username: string
): Promise<IUserFullResponse | null> {
	try {
		const res = await axiosServer<IUserFullResponse>({
			method: 'POST',
			url: '/user/get-user',
			data: { username },
		})

		return {
			success: true,
			data: res.data,
		}
	} catch (error) {
		console.error(error)
		return null
	}
}
