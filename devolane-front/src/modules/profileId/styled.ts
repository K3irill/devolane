import { breakpoints } from '@/lib/constants/Breackpoints'
import styled from 'styled-components'

export const ProfileIdStyled = styled.div`
	padding: 7.5vh 15px;
`

export const ProfileIdContentStyled = styled.div`
	display: grid;
	grid-template-columns: 35% 1fr;
	gap: 2%;

	@media ${breakpoints.tabletMax} {
		gap: 20px;
	}

	@media ${breakpoints.mobileMax} {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
`

export const ProfileSideBlockStyled = styled.div``
