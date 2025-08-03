'use client'

import React, { useState } from 'react'
import {
	DirectionTagItem,
	DirectionTagsList,
	DirectionTagsStyled,
} from './styled'

type IDirectionTag = {
	id: number
	label: string
	isOpen?: boolean
}

interface DirectionTagsInterface {
	tagsItems: IDirectionTag[]
	onTagChange: (tagLabel: string) => void
}

const DirectionTags: React.FC<DirectionTagsInterface> = ({
	tagsItems,
	onTagChange,
}) => {
	const [tags, setTags] = useState<IDirectionTag[]>(tagsItems)

	const changeActiveTag = (id: number, label: string) => {
		setTags(prev => {
			return prev.map(tag => {
				return {
					...tag,
					isOpen: tag.id === id,
				}
			})
		})
		onTagChange(label)
	}

	return (
		<DirectionTagsStyled>
			<DirectionTagsList>
				{tags &&
					tags.map(tag => {
						return (
							<DirectionTagItem
								isOpen={tag.isOpen}
								onClick={() => changeActiveTag(tag.id, tag.label)}
								key={tag.id}
							>
								{tag.label}
							</DirectionTagItem>
						)
					})}
			</DirectionTagsList>
		</DirectionTagsStyled>
	)
}

export default DirectionTags
