import styled, { css } from 'styled-components'
import type { ITextInput } from './TextInput.d'
import { glassGradientAnimation } from '@/styles/keyframes'
import { Colors } from '@/lib/constants/Colors'

export const TextInputStyled = styled.input<ITextInput>`
	background: ${p =>
		p.background ||
		`linear-gradient(
		135deg,
		rgba(34, 99, 163, 0.197),
		rgba(34, 48, 136, 0.203),
		rgba(35, 45, 158, 0.152),
		rgba(25, 169, 169, 0.216)
	)`};
	background-size: 400% 400%;
	border-radius: 4px;
	border: 1px solid rgba(50, 77, 105, 1);
	padding: ${p => p.padding || '12px'};
	width: ${p => p.width || '100%'};
	${p =>
		p.animation &&
		css`
			animation: ${glassGradientAnimation} 8s ease-in-out infinite;
		`}

	${p =>
		p.hasError &&
		`
    background: #3602026a;
    border-color: ${Colors.Red.error};
    `}

  ${p =>
		p.isValid &&
		`
    background: #0d3d0748;
    border-color: #06d62f;
    `}
`
