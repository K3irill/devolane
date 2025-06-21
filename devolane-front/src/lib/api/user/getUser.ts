import { IUserFullResponse } from '@/types/user/IUser'
import { axiosInstance } from '../axios'
import { cookies } from 'next/headers'

export async function getCurrentUser(
	username: string
): Promise<IUserFullResponse | null> {
	try {
		const res = await axiosInstance.post<IUserFullResponse>(
			'/user/get-user',
			{ username },
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${(await cookies()).get('token')?.value}`,
				},
			}
		)
		return res.data
	} catch (error) {
		console.error(error)
		return null
	}
}
