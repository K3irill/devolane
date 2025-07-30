import Button from '@mui/material/Button'

import {
	LoginFormContainer,
	FormTitle,
	FormContent,
	FormLabel,
	TextError,
	TextLabel,
	LoginFormStyled,
} from '../../styled'

import TextInput from '@/components/ui/TextInput/TextInput'
import useLogin from '../../hooks/useLogin'

function LoginForm() {
	const {
		register,
		handleSubmit,
		isSubmitting,
		errors,
		touchedFields,
		password,
		email,
		onLoginSubmit,
	} = useLogin()

	return (
		<LoginFormContainer
			whileHover={{ transform: 'translateY(-5px)' }}
			initial={{ transform: 'translateX(40px) translateY(-60px)' }}
			animate={{ transform: 'translateX(0px) translateY(0px)' }}
			transition={{ type: 'spring' }}
		>
			<LoginFormStyled onSubmit={handleSubmit(onLoginSubmit)}>
				<FormTitle>Signing In</FormTitle>
				<FormContent>
					<FormLabel>
						<TextLabel>Email</TextLabel>
						{errors?.email?.message && (
							<TextError>{errors.email.message}</TextError>
						)}
						<TextInput
							{...register('email')}
							type='email'
							name='email'
							id='email'
							animation
							autoComplete='off'
							hasError={!!errors?.email?.message}
							isValid={
								touchedFields.email &&
								!errors?.email?.message &&
								email?.length > 0
							}
						/>
					</FormLabel>
					<FormLabel>
						<TextLabel>Password</TextLabel>
						{errors?.password?.message && (
							<TextError>{errors.password.message}</TextError>
						)}
						<TextInput
							{...register('password')}
							type='password'
							name='password'
							autoComplete='off'
							id='password'
							animation
							hasError={!!errors?.password?.message}
							isValid={
								touchedFields.password &&
								!errors?.password?.message &&
								password?.length > 0
							}
						/>
					</FormLabel>

					<Button
						sx={{
							fontSize: '18px',
							backgroundColor: '#1976d2',
							color: 'white',
							padding: '12px 32px',
							borderRadius: '8px',

							'&:hover': {
								backgroundColor: '#1565c0',
								transform: 'translateY(-2px)',
								boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
							},
							transition: 'all 0.3s ease',
							'&:disabled': {
								backgroundColor: '#e0e0e0',
								color: '#9e9e9e',
							},
						}}
						variant='contained'
						type='submit'
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Signing in...' : 'Sign in'}
					</Button>
				</FormContent>
			</LoginFormStyled>
		</LoginFormContainer>
	)
}

export default LoginForm
