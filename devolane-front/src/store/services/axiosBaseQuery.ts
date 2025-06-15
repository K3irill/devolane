import { axiosInstance } from '@/lib/api/axios'
import { AxiosError } from 'axios'

interface QueryArgs {
	url: string
	method: string
	body?: Record<string, unknown>
	params?: Record<string, unknown>
}

export const axiosBaseQuery =
	() =>
	async ({ url, method, body, params }: QueryArgs) => {
		try {
			const result = await axiosInstance({
				url,
				method,
				data: body,
				params,
			})
			return { data: result.data }
		} catch (error) {
			const axiosError = error as AxiosError
			return {
				error: {
					status: axiosError.response?.status,
					data: axiosError.response?.data || axiosError.message,
				},
			}
		}
	}
