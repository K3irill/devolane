import { motion } from 'framer-motion'
import styled from 'styled-components'
import { logoColorAnimation } from '../../styled'

export const Logo = styled.div`
	font-size: 2rem;
	position: relative;
	transition: transform ease 0.4s;
	font-family: var(--font-bungee-outline);
	font-weight: 700;
	span {
		position: relative;
		color: #db0172;
		animation: ${logoColorAnimation} 10s ease-in-out infinite reverse;
		z-index: 3;
	}

	a {
		color: #c6d9e8;
	}

	&:hover {
		transform: scale(1.05);
	}
`

export const UserWidget = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
	padding: 10px 15px;
	border-radius: 20px;
	transition: all ease-in-out 0.3s;
	cursor: pointer;

	&:hover {
		background: #33393944;
	}
`

export const UserWidgetAvatar = styled(motion.div)`
	width: 75px;
	height: 75px;
	overflow: hidden;
	border-radius: 50%;
	border: 2px solid #8cb0a9;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const UserWidgetInfo = styled(motion.div)`
	display: flex;
	flex-direction: column;
	gap: 15px;
	text-align: right;
`
export const UserWidgetName = styled(motion.div)`
	font-size: 1.2rem;
`
export const UserWidgetUsername = styled(motion.div)`
	font-size: 0.7rem;
	opacity: 0.8;
	color: #a5fdec;
`
