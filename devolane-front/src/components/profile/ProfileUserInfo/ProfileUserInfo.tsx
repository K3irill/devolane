import React, { useRef, useEffect } from 'react'

import { ProfileUserInfoProps } from './types'
import Loader from '@/components/ui/Loader/Loader'
import ErrorIcon from '@mui/icons-material/Error'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import 'react-ui-phone-input/lib/style.css'
import useProfileUser from './hooks/useProfileUser'
import Settings from './components/Settings'
import View from './components/View'
import { ProfileProvider } from '@/context/ProfileContext'

import {
	ProfileUserInfoWrapper,
	ProfileUserContent,
	UserProfileError,
} from './styled'

const ProfileUserInfo: React.FC<ProfileUserInfoProps> = ({
	user,
	isMaster,
}) => {
	const formRef = useRef<HTMLFormElement | null>(null)
	const photoInputRef = useRef<HTMLInputElement | null>(null)

	const profileData = useProfileUser({
		user,
		formRef,
	})

	const openPhotoInput = () => {
		if (photoInputRef.current) {
			photoInputRef.current.click()
		}
	}

	const contextValue = {
		...profileData,
		formRef,
		photoInputRef,
		openPhotoInput,
		user,
		isMaster,
	}

	useEffect(() => {
		if (!profileData.state.downloadedPhoto) return
		const reader = new FileReader()
		reader.onload = () => {
			profileData.dispatch({
				type: 'SET_PHOTO_PREVIEW',
				payload: reader.result as string,
			})
		}
		reader.readAsDataURL(profileData.state.downloadedPhoto)
	}, [profileData.state.downloadedPhoto])

	return (
		<ProfileProvider value={contextValue}>
			<ProfileUserInfoWrapper>
				{profileData.isLoading && <Loader />}
				<ProfileUserContent
					initial={{ scale: 0.95 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.8 }}
				>
					{profileData.state.isSettingMode && isMaster ? (
						<Settings />
					) : (
						<View />
					)}
				</ProfileUserContent>
				{profileData.state.settingError && (
					<UserProfileError>
						<ErrorIcon sx={{ fontSize: '72px' }} />
					</UserProfileError>
				)}
				{profileData.state.settingSuccess && (
					<UserProfileError background='#00d96945;'>
						<CheckCircleIcon sx={{ fontSize: '72px' }} />
					</UserProfileError>
				)}
			</ProfileUserInfoWrapper>
		</ProfileProvider>
	)
}

export default ProfileUserInfo
