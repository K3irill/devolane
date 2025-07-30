import { IUserFullResponse } from '@/types/user/IUser'
import { axiosInstance } from '../axios'

export async function getCurrentUser(
	username: string
): Promise<IUserFullResponse | null> {
	try {
		const res = await axiosInstance.post<IUserFullResponse>('/user/get-user', {
			username,
		})
		return res.data
	} catch (error) {
		console.error(error)
		return null
	}
}
