import axios from 'axios'
import { redirect } from 'next/navigation'
import Cookies from 'js-cookie'

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/api'

export const axiosInstance = axios.create({
	baseURL,
	withCredentials: true,
})

axiosInstance.interceptors.request.use(
	config => {
		const token = Cookies.get('token')
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
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
				const response = await axiosInstance.post('/auth/refresh')
				const newToken = response.data.token
				if (newToken) {
					Cookies.set('token', newToken, { expires: 30 })
				}
				return axiosInstance(originalRequest)
			} catch (refreshError) {
				Cookies.remove('token')
				redirect('/login')
				return Promise.reject(refreshError)
			}
		}

		return Promise.reject(error)
	}
)
