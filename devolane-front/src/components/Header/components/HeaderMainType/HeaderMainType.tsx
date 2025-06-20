'use client'

import React from 'react'
import { HeaderNavigation, HeaderNavList } from '../../styled'
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

const HeaderMainType = () => {
	const user = useSelector((store: RootState) => store.user.user)
	const router = useRouter()

	const getUserPhotoUrl = (photo?: string) =>
		photo && typeof photo === 'string'
			? `http://localhost:3333/uploads/users/${photo}`
			: '/images/default/user/default-avatar.jpg'

	return (
		<>
			<Logo>
				<Link href='/'>
					<span>Devo</span>lane
				</Link>
			</Logo>
			<HeaderNavigation>
				<HeaderNavList></HeaderNavList>
			</HeaderNavigation>
			<UserWidget onClick={() => router.push(`/profile/${user?.username}`)}>
				<UserWidgetInfo>
					<UserWidgetName>{user?.name}</UserWidgetName>
					<UserWidgetUsername>@{user?.username}</UserWidgetUsername>
				</UserWidgetInfo>
				<UserWidgetAvatar>
					<img
						src={getUserPhotoUrl(
							typeof user.photo === 'string' ? user.photo : undefined
						)}
						alt={user?.name || 'user photo'}
					/>
				</UserWidgetAvatar>
			</UserWidget>
		</>
	)
}

export default HeaderMainType
