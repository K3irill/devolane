import { glassGradientAnimation } from '@/styles/keyframes'
import { motion } from 'framer-motion'
import styled, { css, keyframes } from 'styled-components'
import { EnHeaderType } from './Header.types'
import { breakpoints } from '@/lib/constants/Breackpoints'

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

export const HeaderStyled = styled(motion.header)<{ type?: EnHeaderType }>`
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
	font-size: 2rem;
	padding: 10px 0;
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

	@media ${breakpoints.tabletMax} {
		font-size: 1.2rem;
	}

	@media ${breakpoints.mobileMax} {
		font-size: 0.8rem;
	}
`

export const HeaderNavList = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 35px;
	max-width: fit-content;

	a {
		text-wrap: nowrap;
	}

	@media ${breakpoints.tabletMax} {
		gap: 20px;
	}
`

export const HeaderNavItem = styled.div<{ isDisabled?: boolean }>`
	a {
		color: #86d3f9;
		font-size: 1rem;
		font-family: var(--font-gugi-sans), Arial, Helvetica, sans-serif;
		${p => p.isDisabled && `opacity: 0.5; pointer-events: none;`}

		@media ${breakpoints.tabletMax} {
			font-size: 0.8rem;
		}
	}
`

export const HeaderActivity = styled.div`
	display: flex;
	gap: 15px;
	align-items: center;
	line-height: 1;
`

export const AuthLink = styled.div`
	a {

    

		@media ${breakpoints.tabletMax} {
			font-size: 0.8rem;
			line-height: 1;
			white-space nowrap;
      text-shadow: 0 0 8px
				rgba(233, 17, 233, 0.424);
		}
		}
	}
`
export const BurgerIcon = styled.div<{ isOpen?: boolean }>`
	position: relative;
	width: 40px;
	height: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	z-index: 100;
	z-index: 102;
	transition: all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);

	span {
		position: relative;
		width: 24px;
		height: 3px;
		background: #00e5ff;
		border-radius: 3px;
		transition: all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
		transform-origin: center;

		&:nth-child(1) {
			transform: ${p =>
				p.isOpen
					? 'translateY(3px) rotate(45deg) scaleX(1.2)'
					: 'translateY(-6px)'};
		}

		&:nth-child(2) {
			opacity: ${p => (p.isOpen ? 0 : 1)};
			transform: ${p => (p.isOpen ? 'scale(0)' : 'scale(1)')};
		}

		&:nth-child(3) {
			transform: ${p =>
				p.isOpen
					? 'translateY(-3px) rotate(-45deg) scaleX(1.2)'
					: 'translateY(6px)'};
		}
	}

	&:hover {
		span {
			background: ${p => (p.isOpen ? '#ff00e5' : '#00ffea')};
			box-shadow: 0 0 8px
				${p =>
					p.isOpen ? 'rgba(233, 17, 233, 0.8)' : 'rgba(0, 229, 255, 0.8)'};
		}
	}

	${p =>
		p.isOpen &&
		`
    transform: rotate(180deg);
    
    span {
      background: #e911e9;
      
      &:nth-child(1), &:nth-child(3) {
        width: 28px;
      }
    }
  `}

	@media ${breakpoints.mobileMin} {
		display: none;
	}
`

export const HeaderNavigation = styled.nav<{ isMain?: boolean }>`
	width: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	${p =>
		p.isMain &&
		`
    @media ${breakpoints.tabletMax} {
      ${HeaderNavList}{
       	gap: 10px;
      }

      ${HeaderNavItem}{
        a{
          font-size: 0.6rem;
        }
      }
    }
  `}

	@media ${breakpoints.mobileMax} {
		display: none;
	}
`
