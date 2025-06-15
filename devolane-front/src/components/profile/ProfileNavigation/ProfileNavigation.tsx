import React from 'react'
import { ProfileNavigationWrapper } from './styled'
import { ProfileNavigationProps } from './types'

const ProfileNavigation: React.FC<ProfileNavigationProps> = () => {
	return (
		<ProfileNavigationWrapper>
			<h3>Navigation</h3>
		</ProfileNavigationWrapper>
	)
}

export default ProfileNavigation
