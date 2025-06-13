import { glassGradientAnimation } from '@/styles/keyframes'
import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

export const HeaderStyled = styled(motion.div)`
	border-bottom: 1px solid rgba(122, 237, 255, 0.15);
	backdrop-filter: blur(16px);
	-webkit-backdrop-filter: blur(16px);
	box-shadow: 0 2px 12px 0 rgba(31, 38, 135, 0.37);

	background: linear-gradient(
		135deg,
		rgba(0, 68, 255, 0.138),
		rgba(234, 0, 255, 0.083),
		rgba(0, 191, 255, 0.152),
		rgba(0, 255, 115, 0.077)
	);
	background-size: 400% 400%;
	animation: ${glassGradientAnimation} 20s ease-in-out infinite;
	padding: 20px;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap 15px;
`

export const logoColorAnimation = keyframes`
  0% {
    color: #db0172;
  }
  50% {
    color: #01db8f;
  }
  100% {
    color: #a101db;
  }
`

export const Logo = styled.div`
	font-size: 1.5rem;
	position: relative;
	transition: transform ease 0.4s;
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

export const HeaderNavigation = styled.nav`
	width: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

export const HeaderNavList = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 35px;
	max-width: fit-content;
`

export const HeaderNavItem = styled.div`
	a {
		color: #86d3f9;
		font-size: 1.2rem;
	}
`

export const HeaderActivity = styled.div``
