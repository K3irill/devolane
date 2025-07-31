import styled from 'styled-components'

export const BurgerMenuStyled = styled.div<{ isShow?: boolean }>`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: #120628;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 101;

	transition: all 0.5s;

	${p =>
		p.isShow
			? `
      opacity: 1;
      transform: translateX(0);
    `
			: `
        opacity: 0;
      	transform: translateX(200%);
    `}
`
export const BurgerMenuNavigation = styled.div``

export const BurgerMenuNavList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;
	text-align: center;
`
export const BurgerNavItem = styled.li<{ isDisabled?: boolean }>`
	${p => p.isDisabled && `opacity: 0.5; pointer-events: none;`}
`
