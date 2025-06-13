import * as yup from 'yup'
import { InferType } from 'yup'

export const loginSchema = yup.object({
	email: yup
		.string()
		.required('Enter your email address')
		.matches(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			'Please enter a valid email address'
		),

	password: yup
		.string()
		.required('Enter password')
		.min(8, 'Password must be at least 8 characters long'),
})

export type LoginFormSchema = InferType<typeof loginSchema>
