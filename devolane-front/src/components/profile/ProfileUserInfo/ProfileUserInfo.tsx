import React, { useEffect, useRef, useReducer } from 'react'

import {
	ProfileUserInfoWrapper,
	ProfileUserContent,
	ProfileUserAvatarWrap,
	ProfileUserAvatar,
	ProfileInfo,
	InfoItem,
	InfoLabel,
	InfoValue,
	SettingsBtn,
	UpperPhotoWrap,
	UserProfileError,
	InfoIcon,
	InfoInput,
} from './styled'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ProfileUserInfoProps } from './types'
import { useHandleLogOut } from '@/lib/utils/handleLogOut'
import SettingsIcon from '@mui/icons-material/Settings'
import UpgradeIcon from '@mui/icons-material/Upgrade'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import { motion } from 'framer-motion'
import { useUpdateUserDataMutation } from '@/store/services/user/user.service'
import Loader from '@/components/ui/Loader/Loader'
import ErrorIcon from '@mui/icons-material/Error'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/slices/userSlice/userSlice'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { getUserPhotoUrl } from '@/lib/utils/getUserPhotoUrl'
import { reducer, initialState } from './reducer'
import { formatDate } from '@/lib/utils/formatDate'
import Button from '@/components/ui/Button'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import CakeIcon from '@mui/icons-material/Cake'
import WcIcon from '@mui/icons-material/Wc'
import WorkIcon from '@mui/icons-material/Work'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

import {
	UserProfileSchema,
	userProfileSchema,
} from '@/lib/schemas/userProfileSchema'
import { TextError } from '@/modules/login/styled'

const ProfileUserInfo: React.FC<ProfileUserInfoProps> = ({
	user,
	isMaster,
}) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const [updateUserData, { isLoading }] = useUpdateUserDataMutation()
	const dispatchRedux = useDispatch()
	const handleLogOut = useHandleLogOut()
	const photoInputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (state.settingSuccess) {
			const timer = setTimeout(
				() => dispatch({ type: 'SET_SETTING_SUCCESS', payload: false }),
				3000
			)
			return () => clearTimeout(timer)
		}
	}, [state.settingSuccess])

	const openPhotoInput = () => {
		if (photoInputRef.current) {
			photoInputRef.current.click()
		}
	}

	useEffect(() => {
		if (!state.downloadedPhoto) return
		const reader = new FileReader()
		reader.onload = () => {
			dispatch({ type: 'SET_PHOTO_PREVIEW', payload: reader.result as string })
		}
		reader.readAsDataURL(state.downloadedPhoto)
	}, [state.downloadedPhoto])

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserProfileSchema>({
		resolver: yupResolver(userProfileSchema),
		mode: 'onChange',
		defaultValues: {
			name: user.name || '',
			phone: user.phone ?? undefined,
			age: user.age ?? undefined,
			gender:
				(user.gender as 'male' | 'female' | 'other' | undefined) ?? undefined,
			position: user.position ?? undefined,
		},
	})

	const saveSettings: SubmitHandler<UserProfileSchema> = async data => {
		console.log(data)
		if (data) {
			dispatch({ type: 'SET_SETTING_SUCCESS', payload: false })
			dispatch({ type: 'SET_SETTING_ERROR', payload: false })
			const formData = new FormData()
			Object.entries(data).forEach(([key, value]) => {
				if (value !== undefined && value !== null) {
					formData.append(key, String(value))
				}
			})
			formData.append('username', user.username)
			if (state.downloadedPhoto) {
				formData.append('photo', state.downloadedPhoto)
			}
			updateUserData(formData).then((response: unknown) => {
				const updatedPhoto = (response as { data?: { photo?: string } })?.data
					?.photo
				dispatchRedux(
					setUser({
						...user,
						...data,
						phone: data.phone ?? undefined,
						age:
							typeof data.age === 'number'
								? data.age
								: data.age !== undefined &&
								  data.age !== null &&
								  !isNaN(Number(data.age))
								? Number(data.age)
								: undefined,
						gender: data.gender ?? undefined,
						position: data.position ?? undefined,
						photo: updatedPhoto,
					})
				)
				dispatch({ type: 'RESET_PHOTO' })
				dispatch({ type: 'SET_SETTING_SUCCESS', payload: true })
				dispatch({ type: 'SET_SETTING_MODE', payload: false })
			})
		} else {
			dispatch({ type: 'SET_SETTING_ERROR', payload: true })
		}
	}
	const settingRender = () => {
		return (
			<>
				{isLoading && <Loader />}
				<SettingsBtn
					onClick={() => dispatch({ type: 'SET_SETTING_MODE', payload: false })}
					initial={{ rotate: 0 }}
					whileHover={{ opacity: 0.6 }}
					transition={{
						duration: 0.8,
						rotate: {
							duration: 0,
						},
					}}
				>
					<SettingsSuggestIcon />
				</SettingsBtn>
				<ProfileUserAvatarWrap onClick={openPhotoInput}>
					<input
						style={{ display: 'none' }}
						ref={photoInputRef}
						type='file'
						name='userPhoto'
						id='userPhoto'
						onChange={e =>
							dispatch({
								type: 'SET_DOWNLOADED_PHOTO',
								payload: e.target.files?.[0],
							})
						}
					/>
					<ProfileUserAvatar>
						<img
							src={
								state.photoPreview ||
								getUserPhotoUrl(
									typeof user.photo === 'string' ? user.photo : undefined
								)
							}
							alt={'User avatar'}
						/>
						<UpperPhotoWrap withBlur={!!state.photoPreview}>
							<motion.span
								animate={{ scale: [1.1, 1, 1.1] }}
								transition={{
									scale: {
										duration: 3,
										repeat: Infinity,
									},
								}}
							>
								<UpgradeIcon
									sx={{ fontSize: 72, opacity: state.photoPreview ? 0.2 : 1 }}
								/>
							</motion.span>
						</UpperPhotoWrap>
					</ProfileUserAvatar>
				</ProfileUserAvatarWrap>

				<div>Hi there!</div>
				<ProfileInfo onSubmit={handleSubmit(saveSettings)}>
					<InfoItem>
						<InfoIcon>
							<AccountCircleIcon />
						</InfoIcon>
						<InfoLabel>Full Name</InfoLabel>
						<InfoInput {...register('name')} type='text' />
						{errors.name && (
							<TextError
								style={{
									position: 'absolute',
									top: '100%',
									right: 0,
									fontSize: '10px',
								}}
							>
								{errors.name.message}
							</TextError>
						)}
					</InfoItem>
					<InfoItem>
						<InfoIcon>
							<AlternateEmailIcon />
						</InfoIcon>
						<InfoLabel>@Username</InfoLabel>
						<InfoValue>{user.username}</InfoValue>
					</InfoItem>
					<InfoItem>
						<InfoIcon>
							<EmailIcon />
						</InfoIcon>
						<InfoLabel>Email</InfoLabel>
						<InfoValue>{user.email}</InfoValue>
					</InfoItem>
					<InfoItem>
						<InfoIcon>
							<PhoneIcon />
						</InfoIcon>
						<InfoLabel>Phone</InfoLabel>
						<InfoInput {...register('phone')} type='text' />
						{errors.phone && (
							<TextError
								style={{
									position: 'absolute',
									top: '100%',
									right: 0,
									fontSize: '10px',
								}}
							>
								{errors.phone.message}
							</TextError>
						)}
					</InfoItem>
					<InfoItem>
						<InfoIcon>
							<CakeIcon />
						</InfoIcon>
						<InfoLabel>Age</InfoLabel>
						<InfoInput {...register('age')} type='text' />
						{errors.age && (
							<TextError
								style={{
									position: 'absolute',
									top: '100%',
									right: 0,
									fontSize: '10px',
								}}
							>
								{errors.age.message}
							</TextError>
						)}
					</InfoItem>
					<InfoItem>
						<InfoIcon>
							<WcIcon />
						</InfoIcon>
						<InfoLabel>Gender</InfoLabel>
						<InfoInput {...register('gender')} type='text' />
						{errors.gender && (
							<TextError
								style={{
									position: 'absolute',
									top: '100%',
									right: 0,
									fontSize: '10px',
								}}
							>
								{errors.gender.message}
							</TextError>
						)}
					</InfoItem>
					<InfoItem>
						<InfoIcon>
							<WorkIcon />
						</InfoIcon>
						<InfoLabel>Position</InfoLabel>
						<InfoInput {...register('position')} type='text' />
						{errors.position && (
							<TextError
								style={{
									position: 'absolute',
									top: '100%',
									right: 0,
									fontSize: '10px',
								}}
							>
								{errors.position.message}
							</TextError>
						)}
					</InfoItem>
					{user.createdAt && (
						<InfoItem>
							<InfoIcon>
								<CalendarMonthIcon />
							</InfoIcon>
							<InfoLabel>Register date</InfoLabel>
							<InfoValue>{formatDate(user.createdAt)}</InfoValue>
						</InfoItem>
					)}
					{isMaster && <Button type='submit'>Save changes</Button>}
				</ProfileInfo>
			</>
		)
	}

	return (
		<ProfileUserInfoWrapper>
			<ProfileUserContent
				key={Math.random()}
				initial={{ scale: 0.95 }}
				animate={{ scale: 1 }}
				transition={{
					duration: 0.8,
				}}
			>
				{state.isSettingMode && isMaster ? (
					settingRender()
				) : (
					<>
						{isMaster && (
							<SettingsBtn
								onClick={() =>
									dispatch({ type: 'SET_SETTING_MODE', payload: true })
								}
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.8 }}
							>
								<SettingsIcon />
							</SettingsBtn>
						)}
						<ProfileUserAvatarWrap>
							<ProfileUserAvatar>
								<img
									src={getUserPhotoUrl(
										typeof user.photo === 'string' ? user.photo : undefined
									)}
									alt='User avatar'
								/>
							</ProfileUserAvatar>
						</ProfileUserAvatarWrap>

						<div>Hi there!</div>
						<ProfileInfo>
							<InfoItem>
								<InfoIcon>
									<AccountCircleIcon />
								</InfoIcon>
								<InfoLabel>Full Name</InfoLabel>
								<InfoValue>{user.name}</InfoValue>
							</InfoItem>
							<InfoItem>
								<InfoIcon>
									<AlternateEmailIcon />
								</InfoIcon>
								<InfoLabel>@Username</InfoLabel>
								<InfoValue>{user.username}</InfoValue>
							</InfoItem>
							<InfoItem>
								<InfoIcon>
									<EmailIcon />
								</InfoIcon>
								<InfoLabel>Email</InfoLabel>
								<InfoValue>{user.email}</InfoValue>
							</InfoItem>
							<InfoItem>
								<InfoIcon>
									<PhoneIcon />
								</InfoIcon>
								<InfoLabel>Phone</InfoLabel>
								<InfoValue>{user.phone || '-'}</InfoValue>
							</InfoItem>
							<InfoItem>
								<InfoIcon>
									<CakeIcon />
								</InfoIcon>
								<InfoLabel>Age</InfoLabel>
								<InfoValue>{user.age || '-'}</InfoValue>
							</InfoItem>
							<InfoItem>
								<InfoIcon>
									<WcIcon />
								</InfoIcon>
								<InfoLabel>Gender</InfoLabel>
								<InfoValue>{user.gender || '-'}</InfoValue>
							</InfoItem>
							<InfoItem>
								<InfoIcon>
									<WorkIcon />
								</InfoIcon>
								<InfoLabel>Position</InfoLabel>
								<InfoValue>{user.position || '-'}</InfoValue>
							</InfoItem>
							{user.createdAt && (
								<InfoItem>
									<InfoIcon>
										<CalendarMonthIcon />
									</InfoIcon>
									<InfoLabel>Register date</InfoLabel>
									<InfoValue>{formatDate(user.createdAt)}</InfoValue>
								</InfoItem>
							)}
						</ProfileInfo>
						{isMaster && (
							<Button onClick={handleLogOut} theme='red'>
								Log out
							</Button>
						)}
					</>
				)}
			</ProfileUserContent>
			{state.settingError && (
				<UserProfileError>
					<ErrorIcon
						sx={{
							fontSize: '72px',
						}}
					/>
				</UserProfileError>
			)}
			{state.settingSuccess && (
				<UserProfileError background='#00d96945;'>
					<CheckCircleIcon
						sx={{
							fontSize: '72px',
						}}
					/>
				</UserProfileError>
			)}
		</ProfileUserInfoWrapper>
	)
}

export default ProfileUserInfo
