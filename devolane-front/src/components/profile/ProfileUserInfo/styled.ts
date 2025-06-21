import { glassBackground } from '@/styles/mixins'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const ProfileUserInfoWrapper = styled.div`
	${glassBackground};
	padding: 5%;
	border-radius: 24px;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(8px);
	transition: transform 0.3s ease;
	position: relative;
	overflow: hidden;
`

export const UserProfileError = styled.div<{ background?: string }>`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background:  ${p => p.background || `#d9000045;`}
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const ProfileUserContent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.5rem;
	padding: 1rem;
	height: 100%;
	position: relative;
`

export const ProfileUserAvatarWrap = styled.div<{ onClick?: () => void }>`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	${p =>
		p.onClick &&
		css`
			cursor: pointer;
		`}

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

export const UpperPhotoWrap = styled.div<{ withBlur?: boolean }>`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	border-radius: 50%;
	overflow: hidden;
	${p => !p.withBlur && `backdrop-filter: blur(2px); background: #000000c3;`}
`

export const ProfileInfo = styled.form`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem 2rem;
	width: 100%;
	background: #736d7600;
	padding: 1rem;
	border-radius: 12px;
	backdrop-filter: blur(20px);
`

export const InfoItem = styled.div`
	display: flex;
	align-items: center;
	min-width: 220px;
	width: 100%;
	gap: 0.75rem;
	padding: 0.5rem 0;
	background: none;
	border-radius: 0;
	box-shadow: none;
	border: none;
	position: relative;
`

export const InfoIcon = styled.span`
	display: flex;
	align-items: center;
	color: #b0b8c1;
	font-size: 1.2rem;
	min-width: 24px;
	min-height: 24px;
`

export const InfoLabel = styled.span`
	font-size: 0.8rem;
	color: #b0b8c1;
	font-weight: 400;
	margin-right: 0.5rem;
	letter-spacing: 0.5px;
	text-wrap: nowrap;
`

export const InfoInput = styled.input`
	border: none;
	background: transparent;
	border-bottom: 1px solid #7f9b9a34;
	width: 100%;
	font-size: 18px;

	&:focus {
		border-bottom: 2px solid #7f9b9a34;
		outline: none;
	}
`
export const InfoInputSelect = styled.select`
	border: none;
	background: transparent;
	border-bottom: 1px solid #7f9b9a34;
	width: 100%;
	font-size: 18px;

	&:focus {
		border-bottom: 2px solid #7f9b9a34;
		outline: none;
	}

	& option {
		color: #b0b8c1;
	}
`

export const StyledDatePicker = styled.div`
	width: 100%;
	* {
		border: none !important;
		padding: 0 !important;
		color: #b0b8c1;
	}
	.MuiTextField-root {
		width: 100%;
	}

	.MuiFormControl-root {
		border: none;
		background: transparent;
		border-bottom: 1px solid #7f9b9a34 !important;
		border-radius: 0;
		padding: 0;
		font-size: 18px;
		color: #fff;
		display: flex;
		align-items: center;

		&:hover {
			border-bottom: 1px solid #7f9b9a34;
		}

		&.Mui-focused {
			border-bottom: 2px solid #7f9b9a34;
			box-shadow: none;
		}
	}

	.MuiInputLabel-root {
		display: none;
	}

	.MuiOutlinedInput-notchedOutline {
		border: none;
	}

	.Mui-focused .MuiOutlinedInput-notchedOutline {
		border: none;
	}

	.MuiPickersInputBase-root {
		justify-content: space-between;
		width: 100%;
		padding: 3px 17px !important;
	}
`

export const InfoValue = styled.span<{ withUpperLetter?: boolean }>`
	font-size: 14px;
	color: #fff;
	font-weight: 500;
	word-break: break-all;

	${p =>
		p.withUpperLetter &&
		`&::first-letter {
		text-transform: uppercase;
	}
    text-transform: lowercase;`}
`

export const SettingsBtn = styled(motion.div)`
	border-radius: 50%;
	max-width: 40px;
	max-height: 40px;
	min-width: 40px;
	min-height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(255, 255, 255, 0.1);
	cursor: pointer;
	position: absolute;
	z-index: 3;
	right: 0;
`
