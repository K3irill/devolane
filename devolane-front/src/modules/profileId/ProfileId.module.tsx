'use client'

import React from 'react'

import Loader from '@/components/ui/Loader/Loader'

import {
	ProfileIdContentStyled,
	ProfileIdStyled,
	ProfileSideBlockStyled,
} from './styled'
import ProfileUserInfo from '@/components/profile/ProfileUserInfo/ProfileUserInfo'
import ProfileStats from '@/components/profile/ProfileStats/ProfileStats'

import Container from '@/components/Container/Container'
import ProfileElements from '@/components/profile/ProfileElements/ProfileElements'

import useProfileIdModule from './hooks/useProfileIdModule'
import { useRouter } from 'next/navigation'

const ProfileIdModule = () => {
	const router = useRouter()
	const { user, isLoading, profileUser, id } = useProfileIdModule()

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
						{/* <ProfileNavigation /> */}
					</ProfileSideBlockStyled>
				</ProfileIdContentStyled>
			</Container>
		</ProfileIdStyled>
	)
}

export default ProfileIdModule
