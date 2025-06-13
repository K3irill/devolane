import axios from 'axios'
import { redirect } from 'next/navigation'

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/api'

export const axiosInstance = axios.create({
	baseURL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
})

axiosInstance.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

axiosInstance.interceptors.response.use(
	response => {
		return response
	},
	async error => {
		const originalRequest = error.config

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true

			try {
				await axiosInstance.post('/auth/refresh')

				return axiosInstance(originalRequest)
			} catch (refreshError) {
				redirect('/login')
				return Promise.reject(refreshError)
			}
		}

		return Promise.reject(error)
	}
)
