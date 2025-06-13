import { IUser } from '@/types/user/IUser'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserState {
	user: IUser | null
}

const initialState: IUserState = {
	user: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: () => initialState,
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
		},
	},
})

export const {} = userSlice.actions

export default userSlice.reducer
