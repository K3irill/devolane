'use client'

import { ReactNode, useEffect, FC } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { store } from '@/store/store'
import { setUser } from '@/store/slices/userSlice/userSlice'
import { IUser } from '@/types/user/IUser'

interface ProvidersProps {
	user?: IUser
	children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ user, children }) => (
	<Provider store={store}>
		<ProvidersInner user={user}>{children}</ProvidersInner>
	</Provider>
)

const ProvidersInner: FC<ProvidersProps> = ({ user, children }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		if (user) {
			dispatch(setUser(user))
		}
	}, [user, dispatch])

	return <>{children}</>
}
