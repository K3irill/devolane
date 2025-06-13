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

const Header: FC<IHeader> = () => {
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		setIsLoading(false)
	}, [])

	if (isLoading) {
		return null
	}

	const NAV_LINK = [
		{ id: 0, href: '/', title: 'Main', enable: true },
		{ id: 1, href: '/news', title: 'News', enable: false },
		{ id: 2, href: '/contacts', title: 'Contacts', enable: false },
		{ id: 3, href: '/about-us', title: 'About us', enable: false },
	]

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
							{NAV_LINK.map(item => (
								<HeaderNavItem isDisabled={!item.enable} key={item.id}>
									<Link aria-disabled={item.enable} href={item.href}>
										{item.title}
									</Link>
								</HeaderNavItem>
							))}
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
