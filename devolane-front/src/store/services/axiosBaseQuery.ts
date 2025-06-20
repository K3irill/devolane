import { axiosInstance } from '@/lib/api/axios'
import { AxiosError, AxiosRequestConfig } from 'axios'

interface QueryArgs {
	url: string
	method: string
	body?: Record<string, unknown> | FormData
	params?: Record<string, unknown>
	isFormData?: boolean
	headers?: string
}

export const axiosBaseQuery =
	() =>
	async ({ url, method, body, params, isFormData }: QueryArgs) => {
		try {
			const config: AxiosRequestConfig = {
				url,
				method,
				data: body,
				params,
			}
			if (!isFormData) {
				config.headers = { 'Content-Type': 'application/json' }
			}
			const result = await axiosInstance(config)
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
