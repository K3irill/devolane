import styled from 'styled-components'
import { motion } from 'framer-motion'
import { glassGradientAnimation } from '@/styles/keyframes'
import { Colors } from '@/lib/constants/Colors'

export const LoginFormContainer = styled(motion.div)`
	max-width: 480px;
	width: 100%;
	height: 100%;
	margin: 15px;
	border-radius: 20px;
	border: 2px solid rgba(122, 237, 255, 0.15);
	backdrop-filter: blur(16px);
	-webkit-backdrop-filter: blur(16px);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

	background: linear-gradient(
		135deg,
		rgba(0, 128, 255, 0.07),
		rgba(157, 0, 255, 0.031),
		rgba(0, 21, 255, 0.079),
		rgba(0, 255, 255, 0.045)
	);
	background-size: 400% 400%;
	animation: ${glassGradientAnimation} 15s ease-in-out infinite;
`

export const LoginStyled = styled.div`
	padding-top: 15vh;
`
export const LoginWrapper = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	flex-direction: row-reverse;
`

export const LoginFormStyled = styled.form``

export const FormTitle = styled.h1`
	text-align: center;
	padding: 30px 10px 10px;
	font-size: 28px;
`
export const FormContent = styled.div`
	padding: 25px 35px;
	display: flex;
	flex-direction: column;
	gap: 25px;
`

export const FormLabel = styled.label`
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 100%;
`

export const TextError = styled.span`
	font-size: 14px;
	color: ${Colors.Red.error};
`

export const TextLabel = styled.span<{ size?: string }>`
	font-weight: 500;
	font-size: ${p => p.size || `1.3rem`};
`

export const CheckboxWrapper = styled.div`
	display: flex;
	align-items: center;
`

export const LeftBlockStyled = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 35px;
	line-height: 1.2;
	overflow: hidden;
`

export const BoxWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 25px;
`

export const BoxStyled = styled(motion.div)`
	width: 250px;
	height: 250px;
	border-radius: 20px;
	border: 5px dotted #f08;

	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		position: absolute;
		transform: rotate(0deg);
		font-size: 44px;
		font-weight: bold;
	}
`
export const WelcomeTitle = styled(motion.h2)`
	font-size: 48px;
	font-weight: 700;
	padding: 15px 0;
`
export const ImgWrap = styled(motion.div)`
	width: 100px;
	height: 80px;

	img {
		width: 100%;
		height: 100%;
	}
`
