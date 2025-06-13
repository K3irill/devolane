import React from 'react'

type TextInputTypes = {
	padding?: number
	animation?: boolean | null
	width?: string
	background?: string
	hasError?: boolean
	isRequired?: boolean
	isValid?: boolean
}

export type ITextInput = TextInputTypes &
	React.InputHTMLAttributes<HTMLInputElement>
