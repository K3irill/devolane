import { RefObject, useEffect, useReducer } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHandleLogOut } from '@/lib/utils/handleLogOut'
import { useUpdateUserDataMutation } from '@/store/services/user/user.service'
import { useDispatch } from 'react-redux'
import { SubmitHandler } from 'react-hook-form'
import { setUser } from '@/store/slices/userSlice/userSlice'

import 'react-ui-phone-input/lib/style.css'

import {
	UserProfileSchema,
	userProfileSchema,
} from '@/lib/schemas/userProfileSchema'
import { initialState, reducer } from '../reducer'
import { IUser } from '@/types/user/IUser'

type useProfileUserType = {
	user: IUser
	formRef: RefObject<HTMLFormElement | null>
}

function useProfileUser({ user, formRef }: useProfileUserType) {
	const [state, dispatch] = useReducer(reducer, initialState)
	const [updateUserData, { isLoading }] = useUpdateUserDataMutation()
	const dispatchRedux = useDispatch()

	const handleLogOut = useHandleLogOut()

	useEffect(() => {
		if (state.settingSuccess) {
			const timer = setTimeout(
				() => dispatch({ type: 'SET_SETTING_SUCCESS', payload: false }),
				3000
			)
			return () => clearTimeout(timer)
		}
	}, [state.settingSuccess])

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
			bio: user.bio ?? 'Hello there!',
		},
	})

	const handleSaveChanges = () => {
		if (formRef && formRef.current) {
			formRef.current.requestSubmit()
		}
	}

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
						age: data.age ?? undefined,
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

	return {
		state,
		dispatch,
		saveSettings,
		updateUserData,
		isLoading,
		dispatchRedux,
		handleLogOut,
		handleSaveChanges,
		register,
		handleSubmit,
		setValue,
		errors,
	}
}

export default useProfileUser
