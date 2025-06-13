'use client'

import React from 'react'
import type { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useHandleLogOut } from '@/lib/utils/handleLogOut'

const ProfileModule = () => {
	const router = useRouter()
	const user = useSelector((state: RootState) => state.user.user)
	const handleLogOut = useHandleLogOut()

	if (!user) {
		router.push('/login')
		return null
	}

	return (
		<div className='p-8 max-w-2xl mx-auto'>
			<h1 className='text-2xl font-bold mb-6'>Profile</h1>
			<div className='bg-white shadow rounded-lg p-6'>
				<div className='space-y-4'>
					<div>
						<label className='text-gray-600'>Name:</label>
						<p className='font-medium'>{user.name || 'Not specified'}</p>
					</div>
					<div>
						<label className='text-gray-600'>Email:</label>
						<p className='font-medium'>{user.email || 'Not specified'}</p>
					</div>
					{user.phone && (
						<div>
							<label className='text-gray-600'>Phone:</label>
							<p className='font-medium'>{user.phone}</p>
						</div>
					)}
					{user.position && (
						<div>
							<label className='text-gray-600'>Position:</label>
							<p className='font-medium'>{user.position}</p>
						</div>
					)}
					<button onClick={handleLogOut}>log out</button>
				</div>
			</div>
		</div>
	)
}

export default ProfileModule
