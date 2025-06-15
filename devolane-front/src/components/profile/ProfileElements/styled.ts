import { glassBackground } from '@/styles/mixins'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const ProfileElementsWrapper = styled(motion.div)`
	${glassBackground};
	padding: 25px;
	display: flex;
	flex-direction: column;
	gap: 25px;
	width: 100%;
`
export const ProfileElementsList = styled.div`
	display: flex;
	gap: 15px;
`
export const ProfileElementsContent = styled(motion.div)`
	width: 100%;
`

export const ProfileElementItem = styled.div<{ isOpen?: boolean }>`
	padding: 15px 25px;
	background: #0301182e;
	border: 1px solid #c6d9e8;
	border-radius: 10px;
	cursor: pointer;
	transition: all ease-in-out 0.2s;
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: center;

	&:hover {
		transform: translateY(-2px);
	}

	position: relative;

	${p =>
		p.isOpen &&
		css`
			background: #c6d9e8;
			color: #151618fd;

			&:after {
				content: '';
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				bottom: -10px;
				width: 0;
				height: 0;
				border-left: 8px solid transparent;
				border-right: 8px solid transparent;
				border-top: 10px solid #c6d9e8;
			}
		`}
`
export const ProfileItemTitle = styled.p`
	padding-top: 3px;
`

export const FullElementContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 15px;
	border-radius: 8px;
	transition: all 0.3s ease;
	background: rgba(255, 255, 255, 0.03);
	border: 1px solid rgba(255, 255, 255, 0.05);
	overflow: hidden;

	.swiper-slide {
		display: flex;
		justify-content: center;
		align-items: center;
		width: auto;
	}

	.swiper-button-next,
	.swiper-button-prev {
		color: #01f9afb3;
		transition: color ease 0.3s;

		&:hover {
			color: #01f9afff;
		}
	}
`

export const GroupElement = styled(motion.div)`
	width: 100%;
	height: 250px;
	border: 2px solid #242a2cff;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 8px;
	display: grid;
	grid-template-rows: 1fr 30%;
	align-items: stretch;
	gap: 10px;
	overflow: hidden;
`

export const SwiperWrapper = styled.div`
	.swiper-wrapper {
		width: 250px;
	}
`

export const GroupImg = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	overflow: hidden;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
`
export const GroupInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
	overflow-y: auto;
	padding: 5px;
	text-align: center;
	&::-webkit-scrollbar {
		width: 4px;
	}

	&::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.1);
	}

	&::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 2px;
	}
`
