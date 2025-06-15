import styled, { keyframes } from 'styled-components'

export const growAnimation = keyframes`
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  50% {
    transform: scaleY(1);
    opacity: 1;
  }
  100% {
    transform: scaleY(0);
    opacity: 0;
  }
`

export const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: rgba(9, 9, 17, 0.353);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
`

export const Line = styled.div<{ delay: number }>`
	width: 4px;
	height: 40px;
	background: #1976d2;
	margin: 0 4px;
	border-radius: 2px;
	animation: ${growAnimation} 1.5s ease-in-out infinite;
	animation-delay: ${props => props.delay}s;
	transform-origin: bottom;
`
