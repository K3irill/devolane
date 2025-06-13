import { IUser } from '@/types/user/IUser'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserState {
	user: IUser | null
}

const initialState: IUserState = {
	user:
		typeof window !== 'undefined'
			? JSON.parse(localStorage.getItem('user') || 'null')
			: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: () => {
			localStorage.removeItem('user')
			return initialState
		},
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
			localStorage.setItem('user', JSON.stringify(action.payload))
		},
	},
})

export const { logout, setUser } = userSlice.actions

export default userSlice.reducer
