import axios from 'axios'

import Cookies from 'js-cookie'

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/api'

let refreshAttempts = 0
const MAX_REFRESH_ATTEMPTS = 3

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
	response => response,
	async error => {
		const originalRequest = error.config

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true

			if (refreshAttempts >= MAX_REFRESH_ATTEMPTS) {
				Cookies.remove('token')
				return Promise.reject(new Error('Max refresh attempts exceeded'))
			}

			try {
				refreshAttempts++
				const response = await axiosInstance.post('/auth/refresh')

				if (response.status === 401) {
					Cookies.remove('token')
					return Promise.reject(new Error('Refresh token expired'))
				}

				const newToken = response.data.token
				if (!newToken) {
					throw new Error('No token in refresh response')
				}

				Cookies.set('token', newToken, { expires: 30 })
				refreshAttempts = 0
				return axiosInstance(originalRequest)
			} catch (refreshError) {
				Cookies.remove('token')
				return Promise.reject(refreshError)
			}
		}

		return Promise.reject(error)
	}
)
