import { glassBackground } from '@/styles/mixins'
import styled from 'styled-components'

export const ProfileUserInfoWrapper = styled.div`
	${glassBackground};
	padding: 5%;
	border-radius: 24px;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(8px);
	transition: transform 0.3s ease;
`

export const ProfileUserContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.5rem;
	padding: 1rem;
	height: 100%;
`

export const ProfileUserAvatarWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		width: 260px;
		height: 260px;
		border-radius: 50%;
		background: linear-gradient(45deg, #86d3f9, #4a90e2);
		opacity: 0.2;
		z-index: -1;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
			opacity: 0.2;
		}
		50% {
			transform: scale(1.05);
			opacity: 0.3;
		}
		100% {
			transform: scale(1);
			opacity: 0.2;
		}
	}
`

export const ProfileUserAvatar = styled.div`
	width: 240px;
	height: 240px;
	border-radius: 50%;
	overflow: hidden;
	border: 4px solid rgba(255, 255, 255, 0.1);
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.02);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
`

export const InfoItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 1.25rem;
	border-radius: 16px;
	transition: all 0.3s ease;
	background: rgba(255, 255, 255, 0.03);
	border: 1px solid rgba(255, 255, 255, 0.05);

	&:hover {
		background: rgba(255, 255, 255, 0.08);
		transform: translateX(5px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}
`

export const InfoLabel = styled.span`
	font-size: 0.9rem;
	font-weight: 600;
	color: #86d3f9;
	text-transform: uppercase;
	letter-spacing: 1px;
	opacity: 0.9;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const InfoValue = styled.span`
	font-size: 1.2rem;
	color: #ffffff;
	font-weight: 500;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	letter-spacing: 0.5px;
	line-height: 1.4;
`
