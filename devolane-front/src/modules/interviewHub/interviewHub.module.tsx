'use client'
import React from 'react'
import { InterviewHubStyled } from './styled'
import Container from '@/components/Container/Container'

import InterviewHeader from './components/InterviewHeader'
import DirectionsList from './components/DirectionsList'

const directions = [
	{ id: 1, label: 'Frontend', link: '/frontend', color: '#00e5ff' },
	{ id: 2, label: 'Backend', link: '/backend', color: '#f84d4d' },
	{ id: 3, label: 'DevOps', link: '/devops', color: '#39ff14' },
	{ id: 4, label: 'Mobile', link: '/mobile', color: '#ffcc00' },
	{ id: 5, label: 'AI/ML', link: '/ai', color: '#d500f9' },
	{ id: 6, label: 'QA', link: '/qa', color: '#ff3cac' },
]

const InterviewHubModule = () => {
	return (
		<InterviewHubStyled>
			<Container>
				<InterviewHeader />
				<DirectionsList directions={directions} />
			</Container>
		</InterviewHubStyled>
	)
}

export default InterviewHubModule
