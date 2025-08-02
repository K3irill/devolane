import DirectionItem from '@/components/Direction/DirectionItem/DirectionItem'
import React, { useState } from 'react'
import { DirectionItemsStyled, DirectionsStyled } from '../styled'

type IDirection = {
	id: number
	label: string
	link: string
	color: string
}
interface IDirectionsInterface {
	directions: IDirection[]
}

const DirectionsList: React.FC<IDirectionsInterface> = ({ directions }) => {
	const [directElements] = useState<IDirection[]>(directions)

	return (
		<DirectionsStyled>
			<DirectionItemsStyled>
				{directElements &&
					directElements.map(el => {
						return <DirectionItem key={el.id} {...el} />
					})}
			</DirectionItemsStyled>
		</DirectionsStyled>
	)
}

export default DirectionsList
