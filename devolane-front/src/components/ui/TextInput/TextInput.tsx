import React, { FC } from 'react'
import { TextInputStyled } from './styled'
import type { ITextInput } from './TextInput.d'

const TextInput: FC<ITextInput> = ({
	animation,
	hasError,
	isRequired,
	isValid,
	...props
}) => {
	return (
		<TextInputStyled
			{...props}
			isRequired={isRequired}
			isValid={isValid}
			animation={animation}
			hasError={hasError}
		/>
	)
}

export default TextInput
