import { motion } from 'framer-motion'
import styled from 'styled-components'

export const DirectionStyled = styled(motion.div)<{ color?: string }>`
	position: relative;

	border: 2px solid ${({ color }) => color || '#00ffff'};
	box-shadow: 0 0 20px ${({ color }) => color || '#00ffff'};

	padding: 32px 24px;
	border-radius: 16px;
	cursor: pointer;
	text-align: center;
	font-size: 1.3rem;
	font-weight: bold;
	overflow: hidden;
	transition: all 0.6s ease;

	background: ${({ color }) => color || '#00ffff'};
	color: black;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 30px ${({ color }) => color || '#00ffff'};
	}

	&::after {
		content: attr(data-hover);
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		// background: ${({ color }) => color || '#00ffff'};
		// color: black;
		background-color: rgba(0, 0, 0, 0);
		color: #ffffff;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1rem;

		transition: opacity 0.6s ease;
		opacity: 0;
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0);
		color: transparent;
		&::after {
			opacity: 1;
		}
	}
`
