import {
	IUserLogin,
	IUserLoginResponse,
	IUserRegisterResponse,
} from '@/types/user/IUser'
import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../axiosBaseQuery'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: axiosBaseQuery(),
	endpoints: builder => ({
		loginUserByEmail: builder.mutation<IUserLoginResponse, IUserLogin>({
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
		loginUserByPhone: builder.mutation<IUserLoginResponse, IUserLogin>({
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
			query: ({ name, email, password, username }) => ({
				url: `/auth/register`,
				method: 'POST',
				body: {
					name,
					email,
					password,
					username,
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
