import React from 'react'
import { LoaderContainer, Line } from './styled'

const Loader = () => {
	return (
		<LoaderContainer>
			{[...Array(5)].map((_, index) => (
				<Line key={index} delay={index * 0.2} />
			))}
		</LoaderContainer>
	)
}

export default Loader
