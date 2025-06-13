import React from 'react'
import { motion } from 'framer-motion'
import {
	BoxStyled,
	BoxWrapper,
	LeftBlockStyled,
	WelcomeTitle,
} from '../../styled'

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
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					fontSize: '2.5rem',
					fontWeight: 'bold',
					marginBottom: '2rem',
					textShadow: '0 0 10px rgba(5, 230, 255, 0.3)',
				}}
			>
				Register in the Devolane
			</WelcomeTitle>
			<BoxWrapper>
				<BoxStyled
					initial={{
						scale: 2,
						rotate: 0,
						opacity: 0,
					}}
					animate={{
						scale: 1,
						rotate: 360,
						opacity: 1,
					}}
					whileHover={{
						scale: 1.1,
						boxShadow: '0 0 20px rgba(5, 230, 255, 0.5)',
					}}
					transition={{
						scale: { type: 'spring', duration: 1, bounce: 0.4 },
						rotate: {
							type: 'tween',
							duration: 4,
							repeat: Infinity,
							ease: 'linear',
						},
						opacity: { duration: 0.5 },
					}}
				>
					<motion.span
						style={{ color: '#05e6ff' }}
						animate={{
							rotate: 0,
							textShadow: '0 0 10px rgba(5, 230, 255, 0.5)',
						}}
						transition={{ duration: 0 }}
					>
						Devo
					</motion.span>
				</BoxStyled>
				<BoxStyled
					style={{ borderColor: '#05e6ff' }}
					initial={{
						scale: 2,
						rotate: 0,
						opacity: 0,
					}}
					animate={{
						scale: 1,
						rotate: -360,
						opacity: 1,
					}}
					whileHover={{
						scale: 1.1,
						boxShadow: '0 0 20px rgba(240, 0, 136, 0.5)',
					}}
					transition={{
						scale: { type: 'spring', duration: 1, bounce: 0.4 },
						rotate: {
							type: 'tween',
							duration: 4,
							repeat: Infinity,
							ease: 'linear',
						},
						opacity: { duration: 0.5 },
					}}
				>
					<motion.span
						style={{ color: '#f08' }}
						animate={{
							rotate: 0,
							textShadow: '0 0 10px rgba(240, 0, 136, 0.5)',
						}}
						transition={{ duration: 0 }}
					>
						Lane
					</motion.span>
				</BoxStyled>
			</BoxWrapper>
		</LeftBlockStyled>
	)
}

export default LeftBlock
