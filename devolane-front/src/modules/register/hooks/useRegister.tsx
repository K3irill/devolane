import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	RegisterFormSchema,
	registerSchema,
} from '@/lib/schemas/registerSchema'

import { useRegisterUserByEmailMutation } from '@/store/services/auth/auth.service'
import { IUserRegister } from '@/types/user/IUser'
import { useRouter } from 'next/navigation'

import { WAITING_TIME } from '../constant'

function useRegister() {
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

	return {
		confirmPassword,
		password,
		name,
		email,
		username,
		register,
		handleSubmit,
		watch,
		reset,
		setFocus,
		isSubmitting,
		errors,
		touchedFields,
		isLoading,
		setIsLoading,
		registerUser,
		isRegisterSuccess,
		setRegisterSuccess,
		isRegisterError,
		setRegisterError,
		regError,
		setRegError,
		countdown,
		setCountdown,
		timerRef,
		onRegisterSubmit,
	}
}

export default useRegister
