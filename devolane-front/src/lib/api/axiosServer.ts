import 'server-only'

import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	AxiosError,
} from 'axios'
import { cookies } from 'next/headers'

interface ServerAxiosRequestConfig extends AxiosRequestConfig {
	headers?: Record<string, string>
}

interface ApiError {
	message: string
	status?: number
	data?: unknown
}

export const axiosInstanceServer: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/api',
	withCredentials: true,
})

export async function axiosServer<TResponse = unknown>(
	config: ServerAxiosRequestConfig
): Promise<TResponse> {
	const cookieStore = await cookies()
	const token = cookieStore.get('token')?.value

	try {
		const response: AxiosResponse<TResponse> = await axiosInstanceServer({
			...config,
			headers: {
				...config.headers,
				...(token ? { Authorization: `Bearer ${token}` } : {}),
			},
		})

		return response.data
	} catch (err) {
		const error = err as AxiosError<{ message?: string }>

		if (error.response) {
			const apiError: ApiError = {
				message: error.response.data?.message || 'API request failed',
				status: error.response.status,
				data: error.response.data,
			}

			if (error.response.status === 401) {
				apiError.message = 'Unauthorized'
			}

			throw apiError
		}

		throw {
			message: 'Network error',
			originalError: error,
		} as ApiError
	}
}
