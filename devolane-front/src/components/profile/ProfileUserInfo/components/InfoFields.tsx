import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { formatDate } from '@/lib/utils/formatDate'
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
import InfoField from '@/components/InfoField/InfoField'
import { IPartOfUserProfile } from '../types'
import { useProfileContext } from '@/context/ProfileContext'

import {
	ProfileInfo,
	InfoValue,
	InfoInput,
	StyledDatePicker,
	CustomSelect,
} from '../styled'

import MenuItem from '@mui/material/MenuItem'
import InputBase from '@mui/material/InputBase'
import { Gender } from '@/types/user/IUser'

const InfoFields = ({ isEditable = false }: IPartOfUserProfile) => {
	const {
		errors,
		watch,
		register,
		saveSettings,
		formRef,
		handleSubmit,
		setValue,
		user,
	} = useProfileContext()

	return (
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
							<DatePicker
								defaultValue={dayjs(user.age)}
								onChange={value => setValue('age', value)}
							/>
						</LocalizationProvider>
					</StyledDatePicker>
				) : (
					<InfoValue>{formatDate(user.age as string) || '-'}</InfoValue>
				)}
			</InfoField>

			<InfoField icon={WcIcon} label='Gender' error={errors.gender?.message}>
				{isEditable ? (
					<CustomSelect
						{...register('gender')}
						labelId='gender-select-label'
						id='gender-select'
						value={
							watch('gender')?.toLowerCase() || user.gender?.toLowerCase() || ''
						}
						onChange={e => setValue('gender', e.target.value as Gender)}
						displayEmpty
						fullWidth
						input={<InputBase />}
					>
						<MenuItem value='' disabled>
							Select gender
						</MenuItem>
						<MenuItem value='male'>Male</MenuItem>
						<MenuItem value='female'>Female</MenuItem>
					</CustomSelect>
				) : (
					<InfoValue withupperletter>{user.gender || '-'}</InfoValue>
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
}

export default InfoFields
