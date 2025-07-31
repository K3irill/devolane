import Button from '@mui/material/Button'

import {
	RegisterFormContainer,
	RegisterFormStyled,
	FormTitle,
	FormContent,
	FormLabel,
	TextError,
	TextLabel,
	CheckboxWrapper,
	TextHint,
} from '../../styled'

import Checkbox from '@mui/material/Checkbox'
import TextInput from '@/components/ui/TextInput/TextInput'

import { Colors } from '@/lib/constants/Colors'

import useRegister from '../../hooks/useRegister'

const label = { inputProps: { 'aria-label': 'Checkbox accept Privacy' } }

export default function RegisterForm() {
	const {
		confirmPassword,
		password,
		name,
		email,
		username,
		register,
		handleSubmit,
		isSubmitting,
		errors,
		touchedFields,
		onRegisterSubmit,
	} = useRegister()

	return (
		<RegisterFormContainer
			whileHover={{ transform: 'translateY(-5px)' }}
			initial={{ transform: 'translateX(40px) translateY(-60px)' }}
			animate={{ transform: 'translateX(0px) translateY(0px)' }}
			transition={{ type: 'spring' }}
		>
			<RegisterFormStyled onSubmit={handleSubmit(onRegisterSubmit)}>
				<FormTitle>Signing Up</FormTitle>
				<FormContent>
					<FormLabel>
						<TextLabel>Name*</TextLabel>
						<TextInput
							{...register('name')}
							type='text'
							name='name'
							id='name'
							autoComplete='off'
							animation
							placeholder='Enter your name or nickname'
							hasError={!!errors?.name?.message}
							isValid={
								touchedFields.name && !errors?.name?.message && name?.length > 0
							}
						/>{' '}
						{errors?.name?.message && (
							<TextError
								initial={{
									opacity: 0,
									y: -5,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									opacity: { duration: 0.6, ease: 'easeOut' },
									y: { duration: 0.6, ease: 'easeOut' },
								}}
							>
								{errors.name.message}
							</TextError>
						)}
					</FormLabel>
					<FormLabel>
						<TextLabel>Username</TextLabel>
						<TextHint>not required</TextHint>

						<TextInput
							{...register('username')}
							type='text'
							name='username'
							id='username'
							autoComplete='off'
							animation
							placeholder='Enter your unique @username'
							hasError={
								!!username && username.length > 0 && !!errors?.username?.message
							}
							isValid={
								touchedFields.username &&
								!errors?.username?.message &&
								!!username &&
								username?.length > 0
							}
						/>
						{!!username && username.length > 0 && errors?.username?.message && (
							<TextError
								initial={{
									opacity: 0,
									y: -5,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									opacity: { duration: 0.6, ease: 'easeOut' },
									y: { duration: 0.6, ease: 'easeOut' },
								}}
							>
								{errors.username.message}
							</TextError>
						)}
					</FormLabel>
					<FormLabel>
						<TextLabel>Email*</TextLabel>

						<TextInput
							{...register('email')}
							type='email'
							name='email'
							id='email'
							animation
							autoComplete='off'
							placeholder='Enter your email address'
							hasError={!!errors?.email?.message}
							isValid={
								touchedFields.email &&
								!errors?.email?.message &&
								email?.length > 0
							}
						/>
						{errors?.email?.message && (
							<TextError
								initial={{
									opacity: 0,
									y: -5,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									opacity: { duration: 0.6, ease: 'easeOut' },
									y: { duration: 0.6, ease: 'easeOut' },
								}}
							>
								{errors.email.message}
							</TextError>
						)}
					</FormLabel>
					<FormLabel>
						<TextLabel>Password*</TextLabel>

						<TextInput
							{...register('password')}
							type='password'
							name='password'
							autoComplete='off'
							id='password'
							animation
							hasError={!!errors?.password?.message}
							placeholder='Enter strong password'
							isValid={
								touchedFields.password &&
								!errors?.password?.message &&
								password?.length > 0
							}
						/>
						{errors?.password?.message && (
							<TextError
								initial={{
									opacity: 0,
									y: -5,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									opacity: { duration: 0.6, ease: 'easeOut' },
									y: { duration: 0.6, ease: 'easeOut' },
								}}
							>
								{errors.password.message}
							</TextError>
						)}
					</FormLabel>
					<FormLabel>
						<TextLabel>Confirm Password*</TextLabel>

						<TextInput
							{...register('confirmPassword')}
							type='password'
							name='confirmPassword'
							id='confirmPassword'
							animation
							autoComplete='off'
							placeholder='Repeat your password'
							hasError={!!errors?.confirmPassword?.message}
							isValid={
								touchedFields.confirmPassword &&
								!errors?.confirmPassword?.message &&
								confirmPassword?.length > 0
							}
						/>
						{errors?.confirmPassword?.message && (
							<TextError
								initial={{
									opacity: 0,
									y: -5,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									opacity: { duration: 0.6, ease: 'easeOut' },
									y: { duration: 0.6, ease: 'easeOut' },
								}}
							>
								{errors.confirmPassword.message}
							</TextError>
						)}
					</FormLabel>
					<FormLabel>
						<CheckboxWrapper>
							<Checkbox
								{...register('terms')}
								sx={{
									color: !!errors?.confirmPassword?.message
										? Colors.Red.error
										: '#3f727a',
								}}
								{...label}
								defaultChecked
							/>
							<TextLabel
								className='checkbox__text-label'
								dangerouslySetInnerHTML={{
									__html: `I agree to the processing of personal data in accordance
            with the <a href="/privacy">Privacy Policy</a>`,
								}}
								size='0.8em'
								style={{ lineHeight: '1.6' }}
							/>
						</CheckboxWrapper>
						{errors?.terms?.message && (
							<TextError
								initial={{
									opacity: 0,
									y: -5,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									opacity: { duration: 0.6, ease: 'easeOut' },
									y: { duration: 0.6, ease: 'easeOut' },
								}}
							>
								{errors.terms.message}
							</TextError>
						)}
					</FormLabel>
					<Button
						sx={{
							fontSize: '18px',
							backgroundColor: '#1976d2',
							color: 'white',
							padding: '12px 32px',
							borderRadius: '8px',

							'&:hover': {
								backgroundColor: '#1565c0',
								transform: 'translateY(-2px)',
								boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
							},
							transition: 'all 0.3s ease',
							'&:disabled': {
								backgroundColor: '#e0e0e0',
								color: '#9e9e9e',
							},
						}}
						variant='contained'
						type='submit'
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Signing up...' : 'Sign up'}
					</Button>
				</FormContent>
			</RegisterFormStyled>
		</RegisterFormContainer>
	)
}
