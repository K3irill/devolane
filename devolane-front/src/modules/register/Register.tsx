'use client'
import * as React from 'react'

import { RegisterStyled, RegisterWrapper } from './styled'

import FormRegisterModal from './components/Modal/Modal'
import LeftBlock from './components/LeftBlock/LeftBlock'
import useRegister from './hooks/useRegister'
import RegisterForm from './components/RegisterForm/RegisterForm'

const RegisterModule = () => {
	const {
		isLoading,
		isRegisterSuccess,
		setRegisterSuccess,
		isRegisterError,
		setRegisterError,
		regError,
		countdown,
	} = useRegister()

	if (isLoading) {
		return null
	}

	return (
		<>
			<RegisterStyled>
				<RegisterWrapper>
					<LeftBlock />
					<RegisterForm />
				</RegisterWrapper>
			</RegisterStyled>

			<FormRegisterModal
				isRegisterSuccess={isRegisterSuccess}
				isRegisterError={isRegisterError}
				setRegisterError={setRegisterError}
				setRegisterSuccess={setRegisterSuccess}
				countdown={countdown}
				regError={regError}
			/>
		</>
	)
}

export default RegisterModule
