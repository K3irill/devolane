'use client'
import React from 'react'
import styled from 'styled-components'
import GraphemeSplitter from 'grapheme-splitter'
import { TypeAnimation } from 'react-type-animation'
const splitter = new GraphemeSplitter()

const HeaderContainer = styled.div`
	text-align: center;

	margin: 25px 0 40px;
`

const MainTitle = styled.h1`
	letter-spacing: 3px;
	font-size: 2rem;
	font-weight: 700;
	line-height: 1.5;
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
			<MainTitle>
				<TypeAnimation
					splitter={str => splitter.splitGraphemes(str)}
					sequence={[
						'Interview Hub 🇬🇧',
						2000,
						'Centro Colloqui 🇮🇹',
						2000,
						'面试中心 🇨🇳',
						2000,
						'Интервю Център 🇧🇬',
						2000,
						'Centro de Entrevistas 🇪🇸',
						2000,
						"Centre d'Entrevue 🇫🇷",
						2000,
						'साक्षात्कार केंद्र 🇮🇳',
						2000,
						'Интервью Хаб 🇷🇺',
						2000,
						'Vorstellungszentrum 🇩🇪',
						2000,
						'Entrevista Hub 🇵🇹',
						2000,
						'Mülakat Merkezi 🇹🇷',
						2000,
					]}
					style={{ fontSize: '2em' }}
					repeat={Infinity}
				/>
			</MainTitle>
			<Subtitle>Выберите направление и погрузитесь в мир технологий</Subtitle>
		</HeaderContainer>
	)
}

export default InterviewHeader
