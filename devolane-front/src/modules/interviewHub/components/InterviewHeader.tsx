'use client'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
	text-align: center;

	margin: 25px 0 40px;
`

const MainTitle = styled.h1`
	font-size: 3.5rem;
	font-weight: 700;
	color: #ffffff;
	margin: 0 0 10px 0;
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;

	@media (max-width: 768px) {
		font-size: 2.5rem;
	}
`

const Subtitle = styled.p`
	font-size: 1.2rem;
	color: rgba(255, 255, 255, 0.8);
	margin: 0;
	font-weight: 300;
	letter-spacing: 1px;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`

const InterviewHeader: React.FC = () => {
	return (
		<HeaderContainer>
			<MainTitle>Interview Hub</MainTitle>
			<Subtitle>Выберите направление и погрузитесь в мир технологий</Subtitle>
		</HeaderContainer>
	)
}

export default InterviewHeader
