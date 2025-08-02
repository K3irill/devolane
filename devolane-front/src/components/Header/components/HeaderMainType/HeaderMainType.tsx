'use client'

import React from 'react'
import { HeaderNavigation, HeaderNavItem, HeaderNavList } from '../../styled'
import Link from 'next/link'
import {
	Logo,
	UserWidget,
	UserWidgetAvatar,
	UserWidgetInfo,
	UserWidgetName,
	UserWidgetUsername,
} from './styled'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { getUserPhotoUrl } from '@/lib/utils/getUserPhotoUrl'

const HeaderMainType = () => {
	const user = useSelector((store: RootState) => store.user.user)
	const router = useRouter()

	const NAV_LINKS = [
		{ id: 0, href: '/interview-hub', title: 'InterviewHub', enable: true },
		{ id: 1, href: '/community', title: 'Community & Chat', enable: false },
		{ id: 2, href: '/challenges', title: 'DevChallenges', enable: false },
		{ id: 3, href: '/devDiary', title: 'DevDiary', enable: false },
		{ id: 4, href: '/promptBox', title: 'PromptBox', enable: false },
	]

	return (
		<>
			<Logo>
				<Link href='/'>
					<span>Devo</span>lane
				</Link>
			</Logo>
			<HeaderNavigation isMain>
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
			<UserWidget onClick={() => router.push(`/profile/${user?.username}`)}>
				<UserWidgetInfo>
					<UserWidgetName>{user?.name}</UserWidgetName>
					<UserWidgetUsername>@{user?.username}</UserWidgetUsername>
				</UserWidgetInfo>
				<UserWidgetAvatar>
					<img
						src={getUserPhotoUrl(
							user && user.photo && typeof user.photo === 'string'
								? user.photo
								: undefined
						)}
						alt={user?.name || 'user photo'}
					/>
				</UserWidgetAvatar>
			</UserWidget>
		</>
	)
}

export default HeaderMainType
