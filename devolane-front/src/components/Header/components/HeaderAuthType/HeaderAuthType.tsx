'use client'

import React from 'react'
import {
	Logo,
	HeaderNavigation,
	HeaderActivity,
	HeaderNavItem,
	HeaderNavList,
} from '../../styled'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HeaderAuthType = () => {
	const pathname = usePathname()

	const NAV_LINK = [
		{ id: 0, href: '/', title: 'Main', enable: true },
		{ id: 1, href: '/news', title: 'News', enable: false },
		{ id: 2, href: '/contacts', title: 'Contacts', enable: false },
		{ id: 3, href: '/about-us', title: 'About us', enable: false },
	]
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
				{pathname === '/login' ? (
					<Link href='/register'>Sign Up</Link>
				) : (
					<Link href='/login'>Already have an account?</Link>
				)}
			</HeaderActivity>
		</>
	)
}

export default HeaderAuthType
