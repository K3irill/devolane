import { useEffect, useState } from 'react'
import type { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { useParams } from 'next/navigation'

import { IUser } from '@/types/user/IUser'

import { useGetUserByUsernameMutation } from '@/store/services/user/user.service'

function useProfileIdModule() {
	const params = useParams()
	const id = params?.id as string
	const [profileUser, setProfileUser] = useState<IUser | null>(null)
	const user = useSelector((state: RootState) => state.user.user)

	const [getUserByUsername, { data: fetchedUser, isLoading }] =
		useGetUserByUsernameMutation()

	useEffect(() => {
		if (id && id !== user?.username) {
			getUserByUsername({ username: id })
		}
	}, [id, user?.username, getUserByUsername])

	useEffect(() => {
		if (id === user?.username) {
			setProfileUser(user)
		} else if (fetchedUser?.data) {
			setProfileUser(fetchedUser.data)
		}
	}, [id, user, fetchedUser])

	return { user, isLoading, profileUser, id }
}

export default useProfileIdModule
