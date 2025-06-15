import { IUserFullResponse } from '@/types/user/IUser'
import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../axiosBaseQuery'

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: axiosBaseQuery(),
	endpoints: builder => ({
		getUserByUsername: builder.mutation<
			IUserFullResponse,
			{ username: string }
		>({
			query: ({ username }) => ({
				url: `/user/get-user`,
				method: 'POST',
				body: {
					username,
				},
				params: {},
			}),
		}),
	}),
})

export const { useGetUserByUsernameMutation } = userApi
