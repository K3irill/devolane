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

		updateUserData: builder.mutation<IUserFullResponse, FormData>({
			query: formData => ({
				url: `/user/update-user-data`,
				method: 'PATCH',
				body: formData,
				isFormData: true,
				params: {},
			}),
		}),
	}),
})

export const { useGetUserByUsernameMutation, useUpdateUserDataMutation } =
	userApi
