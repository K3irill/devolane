import {
	ProfileElementItem,
	ProfileElementsList,
	ProfileScrollWrapper,
} from '@/components/profile/ProfileElements/styled'
import { breakpoints } from '@/lib/constants/Breackpoints'
import styled from 'styled-components'

export const DirectionTagsStyled = styled(ProfileScrollWrapper)``

export const DirectionTagsList = styled(ProfileElementsList)`
	display: flex;
	gap: 15px;

	@media ${breakpoints.tabletMax} {
	}
`

export const DirectionTagItem = styled(ProfileElementItem)``
