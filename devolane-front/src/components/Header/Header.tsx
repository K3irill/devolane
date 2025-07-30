'use client'

import React, { FC, useState, useEffect } from 'react'
import { EnHeaderType, type IHeader } from './Header.types'
import Container from '@/components/Container/Container'
import { HeaderContent, HeaderStyled } from './styled'
import HeaderAuthType from './components/HeaderAuthType/HeaderAuthType'
import HeaderMainType from './components/HeaderMainType/HeaderMainType'

const Header: FC<IHeader> = ({ type }) => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(false)
	}, [])

	if (isLoading) {
		return null
	}

	return (
		<HeaderStyled
			className='header'
			initial={{ opacity: 0.5, transform: 'translateY(-100%)' }}
			animate={{ opacity: 1, transform: 'translateY(0px)' }}
			transition={{ duration: 1 }}
			type={type}
		>
			<Container>
				<HeaderContent>
					{type === EnHeaderType.Auth && <HeaderAuthType />}
					{type === EnHeaderType.Main && <HeaderMainType />}
				</HeaderContent>
			</Container>
		</HeaderStyled>
	)
}

export default Header
