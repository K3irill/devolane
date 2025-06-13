'use client'

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

import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextInput from '@/components/ui/TextInput/TextInput'

import {
	RegisterFormSchema,
	registerSchema,
} from '@/lib/schemas/registerSchema'

import { motion } from 'framer-motion'

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

	const onRegisterSubmit: SubmitHandler<RegisterFormSchema> = data => {
		console.log(data)
		reset()
	}

	useEffect(() => {
		setFocus('name')
		setIsLoading(false)
	}, [])

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
									hasError={!!errors?.confirmPassword?.message}
									isValid={
										touchedFields.confirmPassword &&
										!errors?.confirmPassword?.message
									}
								/>
							</FormLabel>
							<FormLabel>
								<CheckboxWrapper>
									<Checkbox {...label} defaultChecked />
									<TextLabel
										dangerouslySetInnerHTML={{
											__html: `I agree to the processing of personal data in accordance
										with the <a href="/privacy">Privacy Policy</a>`,
										}}
										size='0.8em'
									/>
								</CheckboxWrapper>
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
	)
}

export default RegisterModule
