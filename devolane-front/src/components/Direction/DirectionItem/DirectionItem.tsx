import React from 'react'
import { DirectionStyled } from './styled'
import { useRouter } from 'next/navigation'

interface DirectionInterface {
	label: string
	link: string
	color: string
}

const DirectionItem: React.FC<DirectionInterface> = ({
	label,
	link,
	color,
}) => {
	const router = useRouter()

	return (
		<DirectionStyled
			color={color}
			onClick={() => router.push(`/interview-hub${link}`)}
			data-hover={`Подробнее о ${label}`}
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, ease: 'easeOut' }}
		>
			{label}
		</DirectionStyled>
	)
}

export default DirectionItem
