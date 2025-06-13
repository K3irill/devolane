'use client'

import React, { FC, useState, useEffect } from 'react'
import type { IHeader } from './Header.d'
import Container from '@/components/Container/Container'
import {
	HeaderContent,
	HeaderStyled,
	Logo,
	HeaderNavigation,
	HeaderActivity,
	HeaderNavItem,
	HeaderNavList,
} from './styled'
import Link from 'next/link'

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
			initial={{ opacity: 0.5, transform: 'translateY(-100%)' }}
			animate={{ opacity: 1, transform: 'translateY(0px)' }}
			transition={{ duration: 1 }}
		>
			<Container>
				<HeaderContent>
					<Logo>
						<Link href='/'>
							<span>Devo</span>lane
						</Link>
					</Logo>
					<HeaderNavigation>
						<HeaderNavList>
							<HeaderNavItem>
								<Link href='/'>Main</Link>
							</HeaderNavItem>
							<HeaderNavItem>
								<Link href='/about-us'>About us</Link>
							</HeaderNavItem>
							<HeaderNavItem>
								<Link href='/news'>News</Link>
							</HeaderNavItem>
							<HeaderNavItem>
								<Link href='/blog'>Blog</Link>
							</HeaderNavItem>
						</HeaderNavList>
					</HeaderNavigation>
					<HeaderActivity>
						<Link href='/login'>Already have an account?</Link>
					</HeaderActivity>
				</HeaderContent>
			</Container>
		</HeaderStyled>
	)
}

export default Header
