'use client'
import * as React from 'react'

import { LoginStyled, LoginWrapper } from './styled'
import LeftBlock from './components/LeftBlock/LeftBlock'
import FormLoginModal from './components/Modal/Modal'
import Loader from '@/components/ui/Loader/Loader'
import useLogin from './hooks/useLogin'
import LoginForm from './components/LoginForm/LoginForm'

const LoginModule = () => {
	const { isSubmitting, loginError, setLoginError, isLoading, isNavigating } =
		useLogin()

	if (isLoading) {
		return <Loader />
	}

	return (
		<>
			<LoginStyled>
				<LoginWrapper>
					<LeftBlock />
					<LoginForm />
				</LoginWrapper>
			</LoginStyled>
			{(isSubmitting || isNavigating) && <Loader />}
			<FormLoginModal setLoginError={setLoginError} loginError={loginError} />
		</>
	)
}

export default LoginModule
