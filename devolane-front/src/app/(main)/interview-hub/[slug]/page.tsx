'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import styled from 'styled-components'
import Container from '@/components/Container/Container'

const DirectionPage = styled.div`
	min-height: 100vh;
	background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
	padding: 40px 0;
`

const DirectionHeader = styled.div`
	text-align: center;
	margin-bottom: 60px;
`

const DirectionTitle = styled.h1`
	font-size: 4rem;
	font-weight: 700;
	color: #ffffff;
	margin: 0 0 20px 0;
	text-transform: capitalize;

	@media (max-width: 768px) {
		font-size: 2.5rem;
	}
`

const DirectionDescription = styled.p`
	font-size: 1.3rem;
	color: rgba(255, 255, 255, 0.8);
	max-width: 600px;
	margin: 0 auto;
	line-height: 1.6;
`

const TopicsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 30px;
	margin-top: 50px;
`

const TopicCard = styled.div`
	background: rgba(255, 255, 255, 0.1);
	border-radius: 15px;
	padding: 30px;
	backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.2);
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		transform: translateY(-5px);
		background: rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.3);
	}
`

const TopicTitle = styled.h3`
	font-size: 1.5rem;
	color: #ffffff;
	margin: 0 0 15px 0;
	font-weight: 600;
`

const TopicDescription = styled.p`
	color: rgba(255, 255, 255, 0.7);
	line-height: 1.5;
	margin: 0;
`

const BackButton = styled.button`
	background: linear-gradient(45deg, #667eea, #764ba2);
	color: white;
	border: none;
	padding: 12px 24px;
	border-radius: 25px;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s ease;
	margin-bottom: 30px;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
	}
`

const directionData = {
	frontend: {
		title: 'Frontend Development',
		description:
			'Создание пользовательских интерфейсов и интерактивных веб-приложений',
		topics: [
			{
				title: 'React',
				description: 'Библиотека для создания пользовательских интерфейсов',
			},
			{
				title: 'Vue.js',
				description: 'Прогрессивный JavaScript фреймворк',
			},
			{
				title: 'Angular',
				description:
					'Платформа для создания мобильных и десктопных веб-приложений',
			},
			{
				title: 'TypeScript',
				description: 'Типизированный JavaScript для масштабируемых приложений',
			},
			{
				title: 'CSS & Styling',
				description: 'Стилизация и анимации для веб-интерфейсов',
			},
			{
				title: 'State Management',
				description: 'Управление состоянием в React приложениях',
			},
		],
	},
	backend: {
		title: 'Backend Development',
		description: 'Разработка серверной части приложений и API',
		topics: [
			{
				title: 'Node.js',
				description: 'JavaScript runtime для серверной разработки',
			},
			{
				title: 'Python',
				description: 'Универсальный язык программирования',
			},
			{
				title: 'Java',
				description: 'Объектно-ориентированный язык программирования',
			},
			{
				title: 'Go',
				description: 'Язык программирования от Google',
			},
			{
				title: 'Databases',
				description: 'Работа с базами данных SQL и NoSQL',
			},
			{
				title: 'API Design',
				description: 'Проектирование RESTful и GraphQL API',
			},
		],
	},
	mobile: {
		title: 'Mobile Development',
		description: 'Создание мобильных приложений для iOS и Android',
		topics: [
			{
				title: 'React Native',
				description: 'Кроссплатформенная разработка на React',
			},
			{
				title: 'Flutter',
				description: 'UI toolkit от Google для кроссплатформенной разработки',
			},
			{
				title: 'Swift',
				description: 'Язык программирования для iOS разработки',
			},
			{
				title: 'Kotlin',
				description: 'Современный язык для Android разработки',
			},
			{
				title: 'Mobile UI/UX',
				description:
					'Дизайн пользовательских интерфейсов для мобильных устройств',
			},
			{
				title: 'App Store Optimization',
				description: 'Оптимизация приложений для магазинов приложений',
			},
		],
	},
	devops: {
		title: 'DevOps',
		description: 'Автоматизация процессов разработки и развертывания',
		topics: [
			{
				title: 'Docker',
				description: 'Контейнеризация приложений',
			},
			{
				title: 'Kubernetes',
				description: 'Оркестрация контейнеров',
			},
			{
				title: 'AWS',
				description: 'Облачная платформа Amazon Web Services',
			},
			{
				title: 'CI/CD',
				description: 'Непрерывная интеграция и доставка',
			},
			{
				title: 'Monitoring',
				description: 'Мониторинг и логирование систем',
			},
			{
				title: 'Infrastructure as Code',
				description: 'Управление инфраструктурой через код',
			},
		],
	},
	'data-science': {
		title: 'Data Science',
		description: 'Анализ данных, машинное обучение и искусственный интеллект',
		topics: [
			{
				title: 'Python',
				description: 'Основной язык для data science',
			},
			{
				title: 'Machine Learning',
				description: 'Алгоритмы машинного обучения',
			},
			{
				title: 'Deep Learning',
				description: 'Глубокое обучение и нейронные сети',
			},
			{
				title: 'Big Data',
				description: 'Обработка больших объемов данных',
			},
			{
				title: 'Data Visualization',
				description: 'Визуализация данных и аналитика',
			},
			{
				title: 'Statistics',
				description: 'Статистический анализ данных',
			},
		],
	},
	cybersecurity: {
		title: 'Cybersecurity',
		description: 'Защита информационных систем и сетей',
		topics: [
			{
				title: 'Ethical Hacking',
				description: 'Тестирование на проникновение',
			},
			{
				title: 'Network Security',
				description: 'Безопасность компьютерных сетей',
			},
			{
				title: 'Web Security',
				description: 'Безопасность веб-приложений',
			},
			{
				title: 'Cryptography',
				description: 'Криптография и шифрование',
			},
			{
				title: 'Incident Response',
				description: 'Реагирование на инциденты безопасности',
			},
			{
				title: 'Security Auditing',
				description: 'Аудит безопасности систем',
			},
		],
	},
}

const DirectionPageComponent = () => {
	const params = useParams()
	const slug = params.slug as string
	const direction = directionData[slug as keyof typeof directionData]

	if (!direction) {
		return (
			<DirectionPage>
				<Container>
					<DirectionHeader>
						<DirectionTitle>Направление не найдено</DirectionTitle>
						<DirectionDescription>
							Запрошенное направление не существует
						</DirectionDescription>
					</DirectionHeader>
				</Container>
			</DirectionPage>
		)
	}

	return (
		<DirectionPage>
			<Container>
				<BackButton onClick={() => window.history.back()}>← Назад</BackButton>

				<DirectionHeader>
					<DirectionTitle>{direction.title}</DirectionTitle>
					<DirectionDescription>{direction.description}</DirectionDescription>
				</DirectionHeader>

				<TopicsGrid>
					{direction.topics.map((topic, index) => (
						<TopicCard key={index}>
							<TopicTitle>{topic.title}</TopicTitle>
							<TopicDescription>{topic.description}</TopicDescription>
						</TopicCard>
					))}
				</TopicsGrid>
			</Container>
		</DirectionPage>
	)
}

export default DirectionPageComponent
