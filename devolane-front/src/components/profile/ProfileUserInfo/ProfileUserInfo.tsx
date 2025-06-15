'use client'

import React from 'react'

import {
	ProfileUserInfoWrapper,
	ProfileUserContent,
	ProfileUserAvatarWrap,
	ProfileUserAvatar,
	ProfileInfo,
	InfoItem,
	InfoLabel,
	InfoValue,
} from './styled'
import { ProfileUserInfoProps } from './types'
import { useHandleLogOut } from '@/lib/utils/handleLogOut'
import Button from '@mui/material/Button'

const ProfileUserInfo: React.FC<ProfileUserInfoProps> = ({
	user,
	isMaster,
}) => {
	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('en-EN', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		})
	}

	const handleLogOut = useHandleLogOut()

	return (
		<ProfileUserInfoWrapper>
			<ProfileUserContent>
				<ProfileUserAvatarWrap>
					<ProfileUserAvatar>
						<img
							src={'/images/default/user/default-avatar.jpg'}
							alt={'User avatar'}
						/>
					</ProfileUserAvatar>
				</ProfileUserAvatarWrap>
				<div>Hi there!</div>
				<ProfileInfo>
					<InfoItem>
						<InfoLabel>Name</InfoLabel>
						<InfoValue>{user.name}</InfoValue>
					</InfoItem>
					<InfoItem>
						<InfoLabel>@Username</InfoLabel>
						<InfoValue>{user.username}</InfoValue>
					</InfoItem>
					<InfoItem>
						<InfoLabel>Email</InfoLabel>
						<InfoValue>{user.email}</InfoValue>
					</InfoItem>
					{user.createdAt && (
						<InfoItem>
							<InfoLabel>Register date</InfoLabel>
							<InfoValue>{formatDate(user.createdAt)}</InfoValue>
						</InfoItem>
					)}
				</ProfileInfo>

				{isMaster && (
					<Button
						sx={{
							fontSize: '18px',
							backgroundColor: '#5f0a08d1',
							color: 'white',
							padding: '12px 32px',
							borderRadius: '8px',

							'&:hover': {
								backgroundColor: '#c01515d9',
								transform: 'translateY(-2px)',
								boxShadow: '0 4px 8px rgba(36, 1, 1, 0.2)',
							},
							transition: 'all 0.3s ease',
							'&:disabled': {
								backgroundColor: '#e0e0e0',
								color: '#9e9e9e',
							},
						}}
						variant='contained'
						onClick={handleLogOut}
					>
						Log Out
					</Button>
				)}
			</ProfileUserContent>
		</ProfileUserInfoWrapper>
	)
}

export default ProfileUserInfo
