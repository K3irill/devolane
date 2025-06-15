import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice/userSlice'
import { authApi } from './services/auth/auth.service'
import { userApi } from './services/user/user.service'

export const store = configureStore({
	reducer: {
		user: userReducer,
		[authApi.reducerPath]: authApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
