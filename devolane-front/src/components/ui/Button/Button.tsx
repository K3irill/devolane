import React from 'react'
import { StyledButton } from './styled'

export type ButtonTheme = 'primary' | 'red' | 'green' | 'blue'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ButtonTheme
	backgroundColor?: string
	hoverBackground?: string
	padding?: string
	borderRadius?: string
	color?: string
	children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
	theme = 'primary',
	backgroundColor,
	hoverBackground,
	padding,
	borderRadius,
	color,
	children,
	...rest
}) => {
	return (
		<StyledButton
			$theme={theme}
			$backgroundColor={backgroundColor}
			$hoverBackground={hoverBackground}
			$padding={padding}
			$borderRadius={borderRadius}
			$color={color}
			{...rest}
		>
			{children}
		</StyledButton>
	)
}

export default Button
