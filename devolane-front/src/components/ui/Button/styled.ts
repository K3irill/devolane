import styled, { css } from 'styled-components'
import { ButtonTheme } from './Button'

interface StyledButtonProps {
	$theme?: ButtonTheme
	$backgroundColor?: string
	$hoverBackground?: string
	$padding?: string
	$borderRadius?: string
	$color?: string
}

const themeStyles = {
	primary: css`
		background-color: #42d50da8;
		color: white;
		&:hover {
			background-color: #11dc1bcc;
		}
	`,
	red: css`
		background-color: #e53935;
		color: white;
		&:hover {
			background-color: #b71c1c;
		}
	`,
	green: css`
		background-color: #43a047;
		color: white;
		&:hover {
			background-color: #2e7d32;
		}
	`,
	blue: css`
		background-color: #1e88e5;
		color: white;
		&:hover {
			background-color: #1565c0;
		}
	`,
}

export const StyledButton = styled.button<StyledButtonProps>`
	font-size: 18px;
	padding: ${({ $padding }) => $padding || '12px 32px'};
	border-radius: ${({ $borderRadius }) => $borderRadius || '8px'};
	color: ${({ $color }) => $color || 'white'};
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;
	${({ $theme }) => $theme && themeStyles[$theme]}
	${({ $backgroundColor }) =>
		$backgroundColor &&
		css`
			background-color: ${$backgroundColor} !important;
		`}
  &:hover {
		${({ $hoverBackground }) =>
			$hoverBackground &&
			css`
				background-color: ${$hoverBackground} !important;
			`}
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(36, 1, 1, 0.2);
	}
	&:disabled {
		background-color: #e0e0e0 !important;
		color: #9e9e9e !important;
		cursor: not-allowed;
		box-shadow: none;
		transform: none;
	}
`
