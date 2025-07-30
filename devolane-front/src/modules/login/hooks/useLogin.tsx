import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useLoginUserByEmailMutation } from '@/store/services/auth/auth.service'

import { LoginFormSchema, loginSchema } from '@/lib/schemas/loginSchema'

import { setUser } from '@/store/slices/userSlice/userSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function useLogin() {
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
			if (result.data.username) {
				Cookies.set('username', result.data.username, {
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

	return {
		register,
		handleSubmit,
		watch,
		setFocus,
		isSubmitting,
		errors,
		touchedFields,
		password,
		email,
		loginError,
		setLoginError,
		loginUser,
		onLoginSubmit,
		isLoading,
		setIsLoading,
		isNavigating,
		setIsNavigating,
	}
}
