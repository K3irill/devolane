'use client'

import React, { useState } from 'react'
import {
	Logo,
	HeaderNavigation,
	HeaderActivity,
	HeaderNavItem,
	HeaderNavList,
	AuthLink,
	BurgerIcon,
} from '../../styled'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createPortal } from 'react-dom'
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu'

export const NAV_LINKS = [
	{ id: 0, href: '/', title: 'Main', enable: true },
	{ id: 1, href: '/news', title: 'News', enable: false },
	{ id: 2, href: '/contacts', title: 'Contacts', enable: false },
	{ id: 3, href: '/about-us', title: 'About us', enable: false },
]

const HeaderAuthType = () => {
	const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false)
	const pathname = usePathname()

	return (
		<>
			{' '}
			<Logo>
				<Link href='/'>
					<span>Devo</span>lane
				</Link>
			</Logo>
			<HeaderNavigation>
				<HeaderNavList>
					{NAV_LINKS.map(item => (
						<HeaderNavItem isDisabled={!item.enable} key={item.id}>
							<Link aria-disabled={item.enable} href={item.href}>
								{item.title}
							</Link>
						</HeaderNavItem>
					))}
				</HeaderNavList>
			</HeaderNavigation>
			<HeaderActivity>
				<AuthLink>
					{pathname === '/login' ? (
						<Link href='/register'>Sign Up</Link>
					) : (
						<Link href='/login'>Already have an account?</Link>
					)}
				</AuthLink>

				<BurgerIcon
					isOpen={isBurgerMenuOpen}
					onClick={() => setBurgerMenuOpen(prev => !prev)}
				>
					<span />
					<span />
					<span />
				</BurgerIcon>
			</HeaderActivity>
			{isBurgerMenuOpen &&
				createPortal(
					<BurgerMenu links={NAV_LINKS} />,
					document.body.querySelector('.header') || document.body
				)}
		</>
	)
}

export default HeaderAuthType
