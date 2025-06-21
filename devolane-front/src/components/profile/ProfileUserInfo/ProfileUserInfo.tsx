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
	StyledDatePicker,
	InfoInputSelect,
} from './styled'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ProfileUserInfoProps } from './types'
import { useHandleLogOut } from '@/lib/utils/handleLogOut'
import SettingsIcon from '@mui/icons-material/Settings'
import UpgradeIcon from '@mui/icons-material/Upgrade'
import { motion } from 'framer-motion'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

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
import PhoneInput from 'react-ui-phone-input'
import 'react-ui-phone-input/lib/style.css'

import {
	UserProfileSchema,
	userProfileSchema,
} from '@/lib/schemas/userProfileSchema'
import { TextError } from '@/modules/login/styled'

// Вспомогательные компоненты
const ErrorMessage = ({ message }: { message?: string }) =>
	message && (
		<TextError
			style={{
				position: 'absolute',
				top: '100%',
				right: 0,
				fontSize: '10px',
			}}
		>
			{message}
		</TextError>
	)

const InfoField = ({
	icon: Icon,
	label,
	children,
	error,
}: {
	icon: React.ComponentType
	label: string
	children: React.ReactNode
	error?: string
}) => (
	<InfoItem>
		<InfoIcon>
			<Icon />
		</InfoIcon>
		<InfoLabel>{label}</InfoLabel>
		{children}
		<ErrorMessage message={error} />
	</InfoItem>
)

const ProfileUserInfo: React.FC<ProfileUserInfoProps> = ({
	user,
	isMaster,
}) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const [updateUserData, { isLoading }] = useUpdateUserDataMutation()
	const dispatchRedux = useDispatch()
	const handleLogOut = useHandleLogOut()
	const photoInputRef = useRef<HTMLInputElement>(null)
	const formRef = useRef<HTMLFormElement>(null)

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
		setValue,
		formState: { errors },
	} = useForm<UserProfileSchema>({
		resolver: yupResolver(userProfileSchema),
		mode: 'onChange',
		defaultValues: {
			name: user.name || '',
			phone: user.phone ?? undefined,
			age: user.age ?? undefined,
			gender: (user.gender as 'male' | 'female' | undefined) ?? undefined,
			position: user.position ?? undefined,
		},
	})

	const saveSettings: SubmitHandler<UserProfileSchema> = async data => {
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
						age: typeof data.age === 'string' ? data.age : undefined,
						phone: data.phone ?? undefined,
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

	const handleSaveChanges = () => {
		if (formRef.current) {
			formRef.current.requestSubmit()
		}
	}

	const renderAvatar = (isEditable = false) => (
		<ProfileUserAvatarWrap onClick={isEditable ? openPhotoInput : undefined}>
			{isEditable && (
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
			)}
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
				{isEditable && (
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
				)}
			</ProfileUserAvatar>
		</ProfileUserAvatarWrap>
	)

	const renderInfoFields = (isEditable = false) => (
		<ProfileInfo
			ref={isEditable ? formRef : undefined}
			onSubmit={isEditable ? handleSubmit(saveSettings) : undefined}
		>
			<InfoField
				icon={AccountCircleIcon}
				label='Full Name'
				error={errors.name?.message}
			>
				{isEditable ? (
					<InfoInput {...register('name')} type='text' />
				) : (
					<InfoValue>{user.name}</InfoValue>
				)}
			</InfoField>

			<InfoField icon={AlternateEmailIcon} label='@Username'>
				<InfoValue>{user.username}</InfoValue>
			</InfoField>

			<InfoField icon={EmailIcon} label='Email'>
				<InfoValue>{user.email}</InfoValue>
			</InfoField>

			<InfoField icon={PhoneIcon} label='Phone' error={errors.phone?.message}>
				{isEditable ? (
					<PhoneInput
						country='us'
						value={user.phone || ''}
						onChange={value => setValue('phone', value)}
						inputProps={{
							name: 'phone',
							autoFocus: true,
						}}
					/>
				) : (
					<InfoValue>{!!user.phone ? `+${user.phone}` : '-'}</InfoValue>
				)}
			</InfoField>

			<InfoField icon={CakeIcon} label='Age' error={errors.age?.message}>
				{isEditable ? (
					<StyledDatePicker>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker onChange={value => setValue('age', value)} />
						</LocalizationProvider>
					</StyledDatePicker>
				) : (
					<InfoValue>{formatDate(user.age as string) || '-'}</InfoValue>
				)}
			</InfoField>

			<InfoField icon={WcIcon} label='Gender' error={errors.gender?.message}>
				{isEditable ? (
					<InfoInputSelect {...register('gender')}>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
					</InfoInputSelect>
				) : (
					<InfoValue withUpperLetter>{user.gender || '-'}</InfoValue>
				)}
			</InfoField>

			<InfoField
				icon={WorkIcon}
				label='Position'
				error={errors.position?.message}
			>
				{isEditable ? (
					<InfoInput {...register('position')} type='text' />
				) : (
					<InfoValue>{user.position || '-'}</InfoValue>
				)}
			</InfoField>

			{user.createdAt && (
				<InfoField icon={CalendarMonthIcon} label='Register date'>
					<InfoValue>{formatDate(user.createdAt)}</InfoValue>
				</InfoField>
			)}
		</ProfileInfo>
	)

	const settingRender = () => (
		<>
			<SettingsBtn
				onClick={() => dispatch({ type: 'SET_SETTING_MODE', payload: false })}
				whileHover={{ rotate: 360 }}
				transition={{ duration: 0.8 }}
			>
				<SettingsIcon />
			</SettingsBtn>
			{renderAvatar(true)}
			<div>Hi there!</div>
			{renderInfoFields(true)}
			{isMaster && <Button onClick={handleSaveChanges}>Save changes</Button>}
		</>
	)

	const viewRender = () => (
		<>
			{isMaster && (
				<SettingsBtn
					onClick={() => dispatch({ type: 'SET_SETTING_MODE', payload: true })}
					whileHover={{ rotate: 360 }}
					transition={{ duration: 0.8 }}
				>
					<SettingsIcon />
				</SettingsBtn>
			)}
			{renderAvatar()}
			<div>Hi there!</div>
			{renderInfoFields()}
			{isMaster && (
				<Button onClick={handleLogOut} theme='red'>
					Log out
				</Button>
			)}
		</>
	)

	return (
		<ProfileUserInfoWrapper>
			{isLoading && <Loader />}
			<ProfileUserContent
				initial={{ scale: 0.95 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.8 }}
			>
				{state.isSettingMode && isMaster ? settingRender() : viewRender()}
			</ProfileUserContent>
			{state.settingError && (
				<UserProfileError>
					<ErrorIcon sx={{ fontSize: '72px' }} />
				</UserProfileError>
			)}
			{state.settingSuccess && (
				<UserProfileError background='#00d96945;'>
					<CheckCircleIcon sx={{ fontSize: '72px' }} />
				</UserProfileError>
			)}
		</ProfileUserInfoWrapper>
	)
}

export default ProfileUserInfo
