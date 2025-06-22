'use client'
import React from 'react'
import { InterviewHubStyled } from './styled'
import Container from '@/components/Container/Container'

import InterviewHeader from './components/InterviewHeader'

const InterviewHubModule = () => {
	return (
		<InterviewHubStyled>
			<Container>
				<InterviewHeader />
			</Container>
		</InterviewHubStyled>
	)
}

export default InterviewHubModule
