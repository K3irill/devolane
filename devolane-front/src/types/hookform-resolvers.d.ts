declare module '@hookform/resolvers/yup' {
	import { Resolver } from 'react-hook-form'
	import { AnyObjectSchema } from 'yup'

	export function yupResolver<T extends AnyObjectSchema, TValues = unknown>(
		schema: T
	): Resolver<TValues>
}
