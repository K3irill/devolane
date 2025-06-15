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
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const HeaderMainType = () => {
	const user = useSelector((store: RootState) => store.user.user)

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
			<UserWidget>
				<UserWidgetInfo>
					<UserWidgetName>{user?.name}</UserWidgetName>
					<UserWidgetUsername>@{user?.username}</UserWidgetUsername>
				</UserWidgetInfo>
				<UserWidgetAvatar>
					<img
						src={user?.image?.src || '/images/default/user/default-avatar.jpg'}
						alt=''
					/>
				</UserWidgetAvatar>
			</UserWidget>
		</>
	)
}

export default HeaderMainType
