'use client'

import React, { useEffect, useState } from 'react'
import type { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { useRouter, useParams } from 'next/navigation'

import { IUser } from '@/types/user/IUser'

import Loader from '@/components/ui/Loader/Loader'
import { useGetUserByUsernameMutation } from '@/store/services/user/user.service'
import {
	ProfileIdContentStyled,
	ProfileIdStyled,
	ProfileSideBlockStyled,
} from './styled'
import ProfileUserInfo from '@/components/profile/ProfileUserInfo/ProfileUserInfo'
import ProfileStats from '@/components/profile/ProfileStats/ProfileStats'
import ProfileNavigation from '@/components/profile/ProfileNavigation/ProfileNavigation'
import Container from '@/components/Container/Container'
import ProfileElements from '@/components/profile/ProfileElements/ProfileElements'

const ProfileIdModule = () => {
	const router = useRouter()
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

	if (!user) {
		router.push('/login')
		return null
	}

	if (isLoading || !profileUser) {
		return <Loader />
	}

	return (
		<ProfileIdStyled>
			<Container>
				<ProfileIdContentStyled>
					<ProfileUserInfo
						isMaster={id === user?.username}
						user={profileUser}
					/>
					<ProfileSideBlockStyled>
						<ProfileElements />
						<ProfileStats
							challengesCompleted={0}
							diaryEntries={0}
							interviews={0}
							communityInteractions={0}
						/>
						<ProfileNavigation />
					</ProfileSideBlockStyled>
				</ProfileIdContentStyled>
			</Container>
		</ProfileIdStyled>
	)
}

export default ProfileIdModule
