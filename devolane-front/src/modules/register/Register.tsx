'use client'
import * as React from 'react'

import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
	RegisterStyled,
	RegisterWrapper,
	RegisterFormContainer,
	RegisterForm,
	FormTitle,
	FormContent,
	FormLabel,
	TextError,
	TextLabel,
	CheckboxWrapper,
	TextHint,
} from './styled'

import Checkbox from '@mui/material/Checkbox'
import TextInput from '@/components/ui/TextInput/TextInput'

import {
	RegisterFormSchema,
	registerSchema,
} from '@/lib/schemas/registerSchema'

import { Colors } from '@/lib/constants/Colors'
import { useRegisterUserByEmailMutation } from '@/store/services/auth/auth.service'
import { IUserRegister } from '@/types/user/IUser'
import { useRouter } from 'next/navigation'
import FormRegisterModal from './components/Modal/Modal'
import LeftBlock from './components/LeftBlock/LeftBlock'
import { WAITING_TIME } from './constant'

const label = { inputProps: { 'aria-label': 'Checkbox accept Privacy' } }

const RegisterModule = () => {
	const [isLoading, setIsLoading] = useState(true)

	const {
		register,
		handleSubmit,
		watch,
		reset,
		setFocus,
		formState: { isSubmitting, errors, touchedFields },
	} = useForm<RegisterFormSchema>({
		resolver: yupResolver(registerSchema),
		mode: 'onChange',
	})

	const { confirmPassword, password, name, email, username } = watch()

	const router = useRouter()
	const [registerUser] = useRegisterUserByEmailMutation()
	const [isRegisterSuccess, setRegisterSuccess] = useState<boolean>(false)
	const [isRegisterError, setRegisterError] = useState<boolean>(false)
	const [regError, setRegError] = useState<string | null>(null)
	const [countdown, setCountdown] = useState(WAITING_TIME)
	const timerRef = React.useRef<ReturnType<typeof setInterval> | undefined>(
		undefined
	)

	const onRegisterSubmit: SubmitHandler<
		RegisterFormSchema | IUserRegister
	> = async data => {
		try {
			console.log('Sending registration data:', data)
			setRegisterError(false)
			setRegError(null)
			setRegisterSuccess(false)
			const result = await registerUser(data).unwrap()
			setRegisterSuccess(!!result)
			reset()
		} catch (error: unknown) {
			setRegisterSuccess(false)
			setRegisterError(true)
			if (error && typeof error === 'object' && 'data' in error) {
				const apiError = error as { data: { message: string } }
				setRegError(
					apiError.data.message || 'Registration failed. Please try again.'
				)
			} else {
				setRegError('Registration failed. Please try again.')
			}
			console.error('Registration failed:', error)
		}
	}

	useEffect(() => {
		setIsLoading(false)
		setFocus('name')
	}, [isLoading])

	useEffect(() => {
		if (isRegisterSuccess) {
			timerRef.current = setInterval(() => {
				setCountdown(prev => {
					if (prev <= 3) {
						router.push('/login')
					}

					if (prev <= 1) {
						clearInterval(timerRef.current)

						return 0
					}
					return prev - 1
				})
			}, 1000)
		}

		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current)
			}
		}
	}, [isRegisterSuccess, router])

	if (isLoading) {
		return null
	}

	return (
		<>
			<RegisterStyled>
				<RegisterWrapper>
					<LeftBlock />
					<RegisterFormContainer
						whileHover={{ transform: 'translateY(-5px)' }}
						initial={{ transform: 'translateX(40px) translateY(-60px)' }}
						animate={{ transform: 'translateX(0px) translateY(0px)' }}
						transition={{ type: 'spring' }}
					>
						<RegisterForm onSubmit={handleSubmit(onRegisterSubmit)}>
							<FormTitle>Signing Up</FormTitle>
							<FormContent>
								<FormLabel>
									<TextLabel>Name*</TextLabel>
									{errors?.name?.message && (
										<TextError>{errors.name.message}</TextError>
									)}
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
											touchedFields.name &&
											!errors?.name?.message &&
											name?.length > 0
										}
									/>
								</FormLabel>
								<FormLabel>
									<TextLabel>Username</TextLabel>
									<TextHint>not required</TextHint>
									{!!username &&
										username.length > 0 &&
										errors?.username?.message && (
											<TextError>{errors.username.message}</TextError>
										)}
									<TextInput
										{...register('username')}
										type='text'
										name='username'
										id='username'
										autoComplete='off'
										animation
										placeholder='Enter your unique @username'
										hasError={
											!!username &&
											username.length > 0 &&
											!!errors?.username?.message
										}
										isValid={
											touchedFields.username &&
											!errors?.username?.message &&
											!!username &&
											username?.length > 0
										}
									/>
								</FormLabel>
								<FormLabel>
									<TextLabel>Email*</TextLabel>
									{errors?.email?.message && (
										<TextError>{errors.email.message}</TextError>
									)}
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
								</FormLabel>
								<FormLabel>
									<TextLabel>Password*</TextLabel>
									{errors?.password?.message && (
										<TextError>{errors.password.message}</TextError>
									)}
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
								</FormLabel>
								<FormLabel>
									<TextLabel>Confirm Password*</TextLabel>
									{errors?.confirmPassword?.message && (
										<TextError>{errors.confirmPassword.message}</TextError>
									)}
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
											dangerouslySetInnerHTML={{
												__html: `I agree to the processing of personal data in accordance
										with the <a href="/privacy">Privacy Policy</a>`,
											}}
											size='0.8em'
										/>
									</CheckboxWrapper>
									{errors?.terms?.message && (
										<TextError>{errors.terms.message}</TextError>
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
						</RegisterForm>
					</RegisterFormContainer>
				</RegisterWrapper>
			</RegisterStyled>

			<FormRegisterModal
				isRegisterSuccess={isRegisterSuccess}
				isRegisterError={isRegisterError}
				setRegisterError={setRegisterError}
				setRegisterSuccess={setRegisterSuccess}
				countdown={countdown}
				regError={regError}
			/>
		</>
	)
}

export default RegisterModule
