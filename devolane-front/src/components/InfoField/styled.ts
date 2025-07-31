import styled from 'styled-components'

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
