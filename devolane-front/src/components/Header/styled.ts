import { glassGradientAnimation } from '@/styles/keyframes'
import { motion } from 'framer-motion'
import styled, { css, keyframes } from 'styled-components'
import { EnHeaderType } from './Header.types'

const mainHeaderAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const HeaderStyled = styled(motion.div)<{ type?: EnHeaderType }>`
	border-bottom: 1px solid rgba(122, 237, 255, 0.15);
	backdrop-filter: blur(16px);
	-webkit-backdrop-filter: blur(16px);
	box-shadow: 0 2px 12px 0 rgba(31, 38, 135, 0.37);

	${p =>
		p.type === EnHeaderType.Auth &&
		css`
			background: linear-gradient(
				135deg,
				rgba(0, 68, 255, 0.138),
				rgba(234, 0, 255, 0.083),
				rgba(0, 191, 255, 0.152),
				rgba(0, 255, 115, 0.077)
			);
			animation: ${glassGradientAnimation} 20s ease-in-out infinite;
		`}

	${p =>
		p.type === EnHeaderType.Main &&
		css`
			background: linear-gradient(
				135deg,
				rgba(255, 0, 128, 0.08),
				rgba(0, 255, 255, 0.05),
				rgba(128, 0, 255, 0.09),
				rgba(255, 128, 0, 0.04)
			);
			background-size: 300% 300%;
			animation: ${mainHeaderAnimation} 15s ease infinite;
		`}
  	
	background-size: 400% 400%;

	padding: 10px;
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
	font-size: 3rem;
	position: relative;
	transition: transform ease 0.4s;
	font-family: var(--font-bungee-shade);
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

export const HeaderNavItem = styled.div<{ isDisabled?: boolean }>`
	a {
		color: #86d3f9;
		font-size: 1.2rem;
		${p => p.isDisabled && `opacity: 0.5; pointer-events: none;`}
	}
`

export const HeaderActivity = styled.div``
