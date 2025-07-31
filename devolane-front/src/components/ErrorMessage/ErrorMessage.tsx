import { TextError } from '@/modules/login/styled'

const ErrorMessage = ({ message }: { message?: string }) =>
	message && (
		<TextError
			style={{
				position: 'absolute',
				top: '100%',
				right: 0,
				fontSize: '10px',
			}}
		>
			{message}
		</TextError>
	)

export default ErrorMessage
