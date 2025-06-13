import { IUserLogin, IUserRegisterResponse } from '@/types/user/IUser'
import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosInstance } from '@/lib/axios'
import { AxiosError } from 'axios'

interface QueryArgs {
	url: string
	method: string
	body?: Record<string, unknown>
	params?: Record<string, unknown>
}

// Create a custom base query using axios
const axiosBaseQuery =
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

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: axiosBaseQuery(),
	endpoints: builder => ({
		loginUserByEmail: builder.mutation<
			IUserLogin,
			{ email: string; password: string }
		>({
			query: ({ email, password }) => ({
				url: `/auth/login`,
				method: 'POST',
				body: {
					email,
					password,
				},
				params: {},
			}),
		}),
		loginUserByPhone: builder.mutation<
			IUserLogin,
			{ phone: string; password: string }
		>({
			query: ({ phone, password }) => ({
				url: `/auth/login`,
				method: 'POST',
				body: {
					phone,
					password,
				},
				params: {},
			}),
		}),

		registerUserByEmail: builder.mutation<IUserRegisterResponse, IUserLogin>({
			query: ({ name, email, password }) => ({
				url: `/auth/register`,
				method: 'POST',
				body: {
					name,
					email,
					password,
				},
				params: {},
			}),
		}),

		forgetPassword: builder.mutation<IUserLogin, { email: string }>({
			query: ({ email }) => ({
				url: `/auth/help/forgetPassword`,
				method: 'POST',
				body: {
					email,
				},
				params: {},
			}),
		}),

		refreshToken: builder.mutation<{ accessToken: string }, void>({
			query: () => ({
				url: '/auth/refresh',
				method: 'POST',
				params: {},
			}),
		}),

		logout: builder.mutation<void, void>({
			query: () => ({
				url: '/auth/logout',
				method: 'POST',
				params: {},
			}),
		}),
	}),
})

export const {
	useLoginUserByEmailMutation,
	useLoginUserByPhoneMutation,
	useRegisterUserByEmailMutation,
	useForgetPasswordMutation,
	useRefreshTokenMutation,
	useLogoutMutation,
} = authApi
