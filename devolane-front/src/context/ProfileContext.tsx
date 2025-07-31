import { createContext, useContext, ReactNode } from 'react'
import {
	UseFormRegister,
	FieldErrors,
	UseFormHandleSubmit,
	UseFormSetValue,
} from 'react-hook-form'

import { IUser } from '@/types/user/IUser'
import { UserProfileSchema } from '@/lib/schemas/userProfileSchema'
import { Action, State } from '@/components/profile/ProfileUserInfo/reducer'

export type ProfileContextType = {
	state: State
	dispatch: React.Dispatch<Action>

	register: UseFormRegister<UserProfileSchema>
	errors: FieldErrors<UserProfileSchema>
	handleSubmit: UseFormHandleSubmit<UserProfileSchema>
	setValue: UseFormSetValue<UserProfileSchema>

	handleSaveChanges: () => void
	handleLogOut: () => void
	saveSettings: (data: UserProfileSchema) => void

	formRef: React.RefObject<HTMLFormElement | null>
	photoInputRef: React.RefObject<HTMLInputElement | null>
	openPhotoInput: () => void

	user: IUser
	isMaster?: boolean
	isLoading: boolean
}

export const ProfileContext = createContext<ProfileContextType | null>(null)

interface ProfileProviderProps {
	value: ProfileContextType
	children: ReactNode
}

export const ProfileProvider = ({ value, children }: ProfileProviderProps) => {
	return (
		<ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
	)
}

export const useProfileContext = () => {
	const context = useContext(ProfileContext)
	if (!context) {
		throw new Error('useProfileContext must be used within a ProfileProvider')
	}
	return context
}
