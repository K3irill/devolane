import React from 'react'
import { motion } from 'framer-motion'
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart'
import { BoxWrapper, LeftBlockStyled, WelcomeTitle } from '../../styled'

const LeftBlock = () => {
	return (
		<LeftBlockStyled>
			<WelcomeTitle
				initial={{
					opacity: 0,
					y: -50,
					scale: 2,
				}}
				animate={{
					opacity: 1,
					y: 0,
					scale: [1.1, 1, 1.1],
				}}
				transition={{
					opacity: { duration: 0.8, ease: 'easeOut' },
					y: { duration: 0.8, ease: 'easeOut' },
					scale: {
						duration: 3,
						repeat: Infinity,
						ease: 'easeInOut',
					},
				}}
				style={{
					background: 'linear-gradient(45deg, #05e6ff, #ff00e6c3)',
					fontFamily: `var(--font-bungee-outline)`,
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					fontSize: '2.5rem',
					fontWeight: 'bold',
					marginBottom: '2rem',
					textShadow: '0 0 10px rgba(5, 230, 255, 0.3)',
				}}
			>
				Login in the Devolane
			</WelcomeTitle>
			<BoxWrapper>
				<motion.div
					initial={{
						opacity: 0,
						y: -50,
						scale: 2,
					}}
					animate={{
						opacity: 1,
						y: 0,
						scale: [1.1, 1, 1.1],
					}}
					transition={{
						opacity: { duration: 0.8, ease: 'easeOut' },
						y: { duration: 0.8, ease: 'easeOut' },
						scale: {
							duration: 3,
							repeat: Infinity,
							ease: 'easeInOut',
						},
					}}
				>
					<StackedLineChartIcon sx={{ fontSize: 272 }} />
				</motion.div>
			</BoxWrapper>
		</LeftBlockStyled>
	)
}

export default LeftBlock
