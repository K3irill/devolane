import styled from 'styled-components'

export const DirectionPage = styled.div`
	min-height: 100vh;
	background: linear-gradient(
		135deg,
		#1a1a2e54 0%,
		#16213e51 50%,
		#0f336066 70%
	);
	padding: 40px 0;
`

export const DirectionHeader = styled.div`
	text-align: center;
	margin-bottom: 60px;
`

export const DirectionTitle = styled.h1`
	font-size: 4rem;
	font-weight: 700;
	color: #ffffff;
	margin: 0 0 20px 0;
	text-transform: capitalize;

	@media (max-width: 768px) {
		font-size: 2.5rem;
	}
`

export const DirectionDescription = styled.p`
	font-size: 1.3rem;
	color: rgba(255, 255, 255, 0.8);
	max-width: 600px;
	margin: 0 auto;
	line-height: 1.6;
`

export const TopicsGrid = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin-top: 50px;
`

export const TopicCard = styled.div<{
	$hasElements?: boolean
	$hasLink?: boolean
}>`
	background: rgba(255, 255, 255, 0.1);
	border-radius: 15px;
	padding: 20px;
	backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.2);
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		transform: translateY(-3px);
		${props =>
			props.$hasElements
				? `background: rgba(213, 193, 239, 0.259);,
		)`
				: `background: rgba(98, 217, 241, 0.1);`}
	}

	.header {
		position: relative;
		padding-right: ${props =>
			props.$hasElements || props.$hasLink ? '30px' : '0'};
	}
`

export const TopicTitle = styled.h3`
	font-size: 1.5rem;
	line-height: 1.3;
	color: #ffffff;
	margin: 0 0 15px 0;
	font-weight: 600;
`

export const TopicDescription = styled.p`
	color: rgba(255, 255, 255, 0.7);
	line-height: 1.5;
	margin: 0;
`

export const BackButton = styled.button`
	background: linear-gradient(45deg, #667eea, #764ba2);
	color: white;
	border: none;
	padding: 12px 24px;
	border-radius: 25px;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s ease;
	margin-bottom: 30px;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
	}
`

export const ExpandIcon = styled.span<{ $expanded?: boolean }>`
	position: absolute;
	right: 10px;
	top: 10px;
	font-size: 12px;
	transition: transform 0.2s ease;
	transform: rotate(${props => (props.$expanded ? '180deg' : '0')});
`

export const LinkIcon = styled.span`
	position: absolute;
	right: 10px;
	top: 10px;
	font-size: 16px;
	color: #4dabf7;
`

export const NestedElementsContainer = styled.div`
	margin-top: 15px;
	padding-top: 15px;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
`

export const NestedElementCard = styled.div`
	background: rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	padding: 12px;
	margin-bottom: 10px;

	h4 {
		margin: 0 0 5px 0;
		font-size: 14px;
	}

	p {
		margin: 0 0 8px 0;
		font-size: 13px;
		opacity: 0.8;
	}

	a {
		color: #4dabf7;
		font-size: 12px;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`
