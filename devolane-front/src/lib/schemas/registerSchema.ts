import * as yup from 'yup'
import { InferType } from 'yup'

export const registerSchema = yup.object({
	name: yup
		.string()
		.required('Enter your name or nickname')
		.matches(
			/^[а-яА-Яa-zA-Z0-9_\-$]+$/g,
			'Your name must contain only letters, numbers, or «_», «-», «$» characters'
		)
		.test(
			'has-min-letters',
			'Your name must contain at least 3 letters',
			value => {
				if (!value) return false
				const letterCount = (value.match(/[а-яА-Яa-zA-Z]/g) || []).length
				return letterCount >= 3
			}
		)
		.min(3, 'Your name must be at least 3 characters long')
		.max(12, 'Your name must be no more than 12 characters long'),

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

	confirmPassword: yup
		.string()
		.required('Repeat your password')
		.min(8, 'Password must be at least 8 characters long')
		.oneOf([yup.ref('password')], "Passwords don't match"),

	terms: yup
		.bool()
		.required('Accept Terms & Conditions is required')
		.oneOf([true], 'Accept Terms & Conditions is required'),
})

export type RegisterFormSchema = InferType<typeof registerSchema>
