import * as yup from 'yup'
import { InferType } from 'yup'

export const userProfileSchema = yup.object().shape({
	name: yup
		.string()
		.matches(/^[а-яА-Яa-zA-Z\s'-]+$/, 'Please enter a correct name')
		.required('Full name is required'),
	phone: yup
		.string()
		.nullable()
		.transform(value => (value === '' ? undefined : value))
		.notRequired()
		.matches(/^\+?[0-9\s-]{7,20}$/, 'Please enter a valid phone number'),
	age: yup
		.mixed()
		.transform(value => (value === '' ? undefined : value))

		.nullable()
		.notRequired(),
	gender: yup
		.string()
		.transform(value => (value === '' ? undefined : value))
		.oneOf(['male', 'female', 'other'], 'Please select a valid gender')
		.nullable()
		.notRequired(),

	bio: yup.string().max(48, 'Max length 48 characters long').notRequired(),

	position: yup.string().nullable().notRequired(),
})

export type UserProfileSchema = InferType<typeof userProfileSchema>
