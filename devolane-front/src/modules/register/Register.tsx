'use client'
import * as React from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import Modal from '@mui/material/Modal'
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
	BoxStyled,
	BoxWrapper,
	LeftBlock,
	WelcomeTitle,
} from './styled'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Checkbox from '@mui/material/Checkbox'
import TextInput from '@/components/ui/TextInput/TextInput'

import {
	RegisterFormSchema,
	registerSchema,
} from '@/lib/schemas/registerSchema'

import { motion } from 'framer-motion'
import { Colors } from '@/lib/constants/Colors'
import { useRegisterUserByEmailMutation } from '@/store/services/auth/auth.service'
import { IUserRegister } from '@/types/user/IUser'
import { useRouter } from 'next/navigation'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const RegisterModule = () => {
	const [isLoading, setIsLoading] = useState(true)

	const {
		register,
		handleSubmit,
		/*watch,*/
		reset,
		setFocus,
		formState: { isSubmitting, errors, touchedFields },
	} = useForm<RegisterFormSchema>({
		resolver: yupResolver(registerSchema),
		mode: 'onChange',
	})
	const WAITING_TIME = 5
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
			setRegisterError(false)
			setRegError(null)
			setRegisterSuccess(false)
			const result = await registerUser(data).unwrap()
			console.log('Registration successful:', result)
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
					if (prev <= 1) {
						clearInterval(timerRef.current)
						router.push('/login')
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
		<RegisterStyled>
			<RegisterWrapper>
				<LeftBlock>
					<WelcomeTitle
						initial={{
							opacity: 0,
							y: -50,
							scale: 2,
						}}
						animate={{
							opacity: 1,
							y: 0,
							scale: [1.1, 1, 1.1],
						}}
						transition={{
							opacity: { duration: 0.8, ease: 'easeOut' },
							y: { duration: 0.8, ease: 'easeOut' },
							scale: {
								duration: 3,
								repeat: Infinity,
								ease: 'easeInOut',
							},
						}}
						style={{
							background: 'linear-gradient(45deg, #05e6ff, #ff00e6c3)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							fontSize: '2.5rem',
							fontWeight: 'bold',
							marginBottom: '2rem',
							textShadow: '0 0 10px rgba(5, 230, 255, 0.3)',
						}}
					>
						Welcome to Devolane
					</WelcomeTitle>
					<BoxWrapper>
						<BoxStyled
							initial={{
								scale: 2,
								rotate: 0,
								opacity: 0,
							}}
							animate={{
								scale: 1,
								rotate: 360,
								opacity: 1,
							}}
							whileHover={{
								scale: 1.1,
								boxShadow: '0 0 20px rgba(5, 230, 255, 0.5)',
							}}
							transition={{
								scale: { type: 'spring', duration: 1, bounce: 0.4 },
								rotate: {
									type: 'tween',
									duration: 4,
									repeat: Infinity,
									ease: 'linear',
								},
								opacity: { duration: 0.5 },
							}}
						>
							<motion.span
								style={{ color: '#05e6ff' }}
								animate={{
									rotate: 0,
									textShadow: '0 0 10px rgba(5, 230, 255, 0.5)',
								}}
								transition={{ duration: 0 }}
							>
								Devo
							</motion.span>
						</BoxStyled>
						<BoxStyled
							style={{ borderColor: '#05e6ff' }}
							initial={{
								scale: 2,
								rotate: 0,
								opacity: 0,
							}}
							animate={{
								scale: 1,
								rotate: -360,
								opacity: 1,
							}}
							whileHover={{
								scale: 1.1,
								boxShadow: '0 0 20px rgba(240, 0, 136, 0.5)',
							}}
							transition={{
								scale: { type: 'spring', duration: 1, bounce: 0.4 },
								rotate: {
									type: 'tween',
									duration: 4,
									repeat: Infinity,
									ease: 'linear',
								},
								opacity: { duration: 0.5 },
							}}
						>
							<motion.span
								style={{ color: '#f08' }}
								animate={{
									rotate: 0,
									textShadow: '0 0 10px rgba(240, 0, 136, 0.5)',
								}}
								transition={{ duration: 0 }}
							>
								Lane
							</motion.span>
						</BoxStyled>
					</BoxWrapper>
				</LeftBlock>
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
								<TextLabel>Name</TextLabel>
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
									hasError={!!errors?.name?.message}
									isValid={touchedFields.name && !errors?.name?.message}
								/>
							</FormLabel>
							<FormLabel>
								<TextLabel>Email</TextLabel>
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
									hasError={!!errors?.email?.message}
									isValid={touchedFields.email && !errors?.email?.message}
								/>
							</FormLabel>
							<FormLabel>
								<TextLabel>Password</TextLabel>
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
									isValid={touchedFields.password && !errors?.password?.message}
								/>
							</FormLabel>
							<FormLabel>
								<TextLabel>Confirm Password</TextLabel>
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
									hasError={!!errors?.confirmPassword?.message}
									isValid={
										touchedFields.confirmPassword &&
										!errors?.confirmPassword?.message
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

						<Modal
							open={isRegisterSuccess || isRegisterError}
							onClose={() => {
								if (isRegisterError) {
									setRegisterError(false)
								} else if (isRegisterSuccess) {
									setRegisterSuccess(false)
								}
							}}
							aria-labelledby='parent-modal-title'
							aria-describedby='parent-modal-description'
						>
							<motion.div
								initial={{ transform: 'translateY(-100%) translateX(-50%)' }}
								animate={{ transform: 'translateY(-50%) translateX(-50%)' }}
								transition={{ type: 'spring' }}
								style={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
									width: 400,
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									gap: '25px',
									backgroundColor: `${
										isRegisterSuccess ? '#1b2b27c4' : '#2f0b0bac'
									} `,
									border: `2px solid ${
										isRegisterSuccess ? '#09b846' : Colors.Red.error
									}`,
									borderRadius: '6px',
									boxShadow: '24px',
									paddingTop: 16,
									paddingLeft: 32,
									paddingRight: 32,
									paddingBottom: 24,
								}}
							>
								<h2
									id='parent-modal-title'
									style={{ fontSize: '1.5rem', textAlign: 'center' }}
								>
									{isRegisterSuccess
										? `Registration was completed successfully`
										: `Error during registration `}
								</h2>
								<motion.p
									initial={{ scale: 0.3 }}
									animate={{ scale: 1 }}
									transition={{ duration: 1 }}
								>
									{isRegisterSuccess ? (
										<CheckCircleIcon sx={{ fontSize: 72, fill: '#09b846' }} />
									) : (
										<CancelIcon
											sx={{ fontSize: 72, fill: `${Colors.Red.error}` }}
										/>
									)}
								</motion.p>
								<p
									id='parent-modal-description'
									style={{ fontSize: '1.2rem', textAlign: 'left' }}
								>
									{isRegisterSuccess ? (
										<>
											Redirection to the login page via:{' '}
											<span style={{ fontSize: '1.5rem', color: '#09b846' }}>
												{countdown}
											</span>
										</>
									) : (
										regError
									)}
								</p>
							</motion.div>
						</Modal>
					</RegisterForm>
				</RegisterFormContainer>
			</RegisterWrapper>
		</RegisterStyled>
	)
}

export default RegisterModule
