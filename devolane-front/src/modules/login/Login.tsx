'use client'
import * as React from 'react'

import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
	LoginStyled,
	LoginWrapper,
	LoginFormContainer,
	LoginForm,
	FormTitle,
	FormContent,
	FormLabel,
	TextError,
	TextLabel,
} from './styled'

import TextInput from '@/components/ui/TextInput/TextInput'
import { useLoginUserByEmailMutation } from '@/store/services/auth/auth.service'
import LeftBlock from './components/LeftBlock/LeftBlock'
import { LoginFormSchema, loginSchema } from '@/lib/schemas/loginSchema'
import FormLoginModal from './components/Modal/Modal'
import { setUser } from '@/store/slices/userSlice/userSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import Loader from '@/components/ui/Loader/Loader'

const LoginModule = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [isNavigating, setIsNavigating] = useState(false)
	const router = useRouter()
	const {
		register,
		handleSubmit,
		watch,
		setFocus,
		formState: { isSubmitting, errors, touchedFields },
	} = useForm<LoginFormSchema>({
		resolver: yupResolver(loginSchema),
		mode: 'onChange',
	})
	const dispatch = useDispatch()
	const { password, email } = watch()
	const [loginError, setLoginError] = useState<string | null>(null)
	const [loginUser] = useLoginUserByEmailMutation()

	const onLoginSubmit: SubmitHandler<LoginFormSchema> = async data => {
		try {
			setLoginError(null)
			const result = await loginUser(data).unwrap()

			if (result.data.token) {
				Cookies.set('token', result.data.token, {
					expires: 30,
					path: '/',
					sameSite: 'strict',
				})
			}
			dispatch(setUser(result.data))
			setIsNavigating(true)
			router.push(`/profile/${result.data.username}`)
		} catch (error: unknown) {
			if (error && typeof error === 'object' && 'data' in error) {
				const apiError = error as { data: { message: string } }
				setLoginError(apiError.data.message || 'Login failed')
			} else {
				setLoginError('An unexpected error occurred. Please try again.')
			}
			setIsNavigating(false)
			console.error('Login failed:', error)
		}
	}

	useEffect(() => {
		setIsLoading(false)
		setFocus('email')
	}, [isLoading])

	if (isLoading) {
		return <Loader />
	}

	return (
		<>
			<LoginStyled>
				<LoginWrapper>
					<LeftBlock />
					<LoginFormContainer
						whileHover={{ transform: 'translateY(-5px)' }}
						initial={{ transform: 'translateX(40px) translateY(-60px)' }}
						animate={{ transform: 'translateX(0px) translateY(0px)' }}
						transition={{ type: 'spring' }}
					>
						<LoginForm onSubmit={handleSubmit(onLoginSubmit)}>
							<FormTitle>Signing In</FormTitle>
							<FormContent>
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
										isValid={
											touchedFields.email &&
											!errors?.email?.message &&
											email?.length > 0
										}
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
										isValid={
											touchedFields.password &&
											!errors?.password?.message &&
											password?.length > 0
										}
									/>
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
									{isSubmitting ? 'Signing in...' : 'Sign in'}
								</Button>
							</FormContent>
						</LoginForm>
					</LoginFormContainer>
				</LoginWrapper>
			</LoginStyled>
			{(isSubmitting || isNavigating) && <Loader />}
			<FormLoginModal setLoginError={setLoginError} loginError={loginError} />
		</>
	)
}

export default LoginModule
