import styled from 'styled-components'

export const ProfileStatsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
	padding: 1rem 0;
	width: 100%;
`

export const StatsBlock = styled.div<{ $glassBackground?: boolean }>`
	background: ${props =>
		props.$glassBackground
			? 'rgba(255, 255, 255, 0.1)'
			: 'rgba(255, 255, 255, 0.05)'};
	backdrop-filter: blur(10px);
	border-radius: 12px;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 120px;
	transition: transform 0.2s ease;

	&:hover {
		transform: translateY(-2px);
	}
`

export const StatValue = styled.span`
	font-size: 2rem;
	font-weight: bold;
	color: #fff;
	margin-bottom: 0.5rem;
`

export const StatLabel = styled.span`
	font-size: 0.9rem;
	color: rgba(255, 255, 255, 0.7);
	text-align: center;
	line-height: 1.6;
`
