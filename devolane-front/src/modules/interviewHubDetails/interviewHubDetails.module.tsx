'use client'

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Container from '@/components/Container/Container'
import DirectionTags from '@/components/Direction/DirectionTags/DirectionTags'
import {
	BackButton,
	DirectionDescription,
	DirectionHeader,
	DirectionPage,
	DirectionTitle,
	TopicCard,
	TopicDescription,
	TopicsGrid,
	TopicTitle,
	ExpandIcon,
	NestedElementsContainer,
	NestedElementCard,
	LinkIcon,
} from './styled'
import { directionData } from './directionData'
import {
	Interview,
	Question,
	Topic,
	UsefulFeature,
} from '@/types/directions/directions'

const TAGS = [
	{ id: 1, label: 'Technologies', isOpen: true },
	{ id: 2, label: 'Questions' },
	{ id: 3, label: 'Interviews' },
	{ id: 4, label: 'Useful Features' },
]

const InterviewHubDetailsModule = () => {
	const [activeTag, setActiveTag] = useState<string>('technologies')
	const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
		{}
	)
	const params = useParams()
	const slug = params.slug as string
	const direction = directionData[slug as keyof typeof directionData]

	const handleTagChange = (tagLabel: string) => {
		setActiveTag(tagLabel.toLowerCase())
		setExpandedItems({})
	}

	const toggleItemExpansion = (itemId: string) => {
		setExpandedItems(prev => ({
			...prev,
			[itemId]: !prev[itemId],
		}))
	}

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

	const getActiveContent = (): (
		| Topic
		| Question
		| Interview
		| UsefulFeature
	)[] => {
		switch (activeTag) {
			case 'technologies':
				return direction.topics
			case 'questions':
				return direction.questions || []
			case 'interviews':
				return direction.interviews || []
			case 'useful features':
				return direction.useful_features || []
			default:
				return direction.topics
		}
	}

	const content = getActiveContent()

	return (
		<DirectionPage>
			<Container>
				<BackButton onClick={() => window.history.back()}>← Назад</BackButton>

				<DirectionHeader>
					<DirectionTitle>{direction.title}</DirectionTitle>
					<DirectionDescription>{direction.description}</DirectionDescription>
				</DirectionHeader>

				<DirectionTags tagsItems={TAGS} onTagChange={handleTagChange} />

				<TopicsGrid>
					{!!content && content.length > 0 ? (
						content.map((item, index) => {
							const hasElements =
								'elements' in item &&
								item?.elements &&
								item?.elements?.length > 0
							const hasLink = 'link' in item && item.link
							const itemId = `${index}-${item.title}`

							return (
								<TopicCard
									key={itemId}
									$hasElements={Boolean(
										item.elements && item.elements.length > 0
									)}
									$hasLink={Boolean(item.link)}
								>
									<div
										className='header'
										onClick={() => hasElements && toggleItemExpansion(itemId)}
									>
										<TopicTitle>
											{item.title}
											{hasElements && (
												<ExpandIcon $expanded={expandedItems[itemId]}>
													<KeyboardArrowDownIcon />
												</ExpandIcon>
											)}
											{hasLink && (
												<a
													href={item.link}
													target='_blank'
													rel='noopener noreferrer'
													onClick={e => e.stopPropagation()}
												>
													<LinkIcon>
														<ArrowOutwardIcon />
													</LinkIcon>
												</a>
											)}
										</TopicTitle>
										<TopicDescription>{item.description}</TopicDescription>
									</div>

									{hasElements && expandedItems[itemId] && (
										<NestedElementsContainer>
											{item.elements?.map((element, elIndex) => (
												<NestedElementCard key={`${itemId}-${elIndex}`}>
													<h4>{element.title}</h4>
													{element.description && <p>{element.description}</p>}

													{'url' in element && element.url ? (
														<>
															<div
																style={{
																	position: 'relative',
																	paddingBottom: '56.25%',
																	height: 0,
																	overflow: 'hidden',
																	marginBottom: '12px',
																}}
															>
																<iframe
																	src={element.url}
																	title={element.title}
																	frameBorder='0'
																	allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
																	allowFullScreen
																	style={{
																		position: 'absolute',
																		top: 0,
																		left: 0,
																		width: '100%',
																		height: '100%',
																	}}
																/>
															</div>
															<a
																href={element.url}
																target='_blank'
																rel='noopener noreferrer'
															>
																Смотреть на YouTube ↗
															</a>
														</>
													) : element.link ? (
														<a
															href={element.link}
															target='_blank'
															rel='noopener noreferrer'
														>
															Подробнее ↗
														</a>
													) : null}
												</NestedElementCard>
											))}
										</NestedElementsContainer>
									)}
								</TopicCard>
							)
						})
					) : (
						<div>Ничего не найдено</div>
					)}
				</TopicsGrid>
			</Container>
		</DirectionPage>
	)
}

export default InterviewHubDetailsModule
