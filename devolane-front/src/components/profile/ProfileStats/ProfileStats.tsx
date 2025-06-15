import React from 'react'
import { ProfileStatsWrapper, StatsBlock, StatValue, StatLabel } from './styled'
import { ProfileStatsProps } from './types'

const ProfileStats: React.FC<ProfileStatsProps> = ({
	challengesCompleted,
	diaryEntries,
	interviews,
	communityInteractions,
}) => {
	return (
		<ProfileStatsWrapper>
			<StatsBlock $glassBackground>
				<StatValue>{challengesCompleted}</StatValue>
				<StatLabel>Completed Challenges</StatLabel>
			</StatsBlock>
			<StatsBlock>
				<StatValue>{diaryEntries}</StatValue>
				<StatLabel>Diary Entries</StatLabel>
			</StatsBlock>
			<StatsBlock>
				<StatValue>{interviews}</StatValue>
				<StatLabel>Interviews</StatLabel>
			</StatsBlock>
			<StatsBlock>
				<StatValue>{communityInteractions}</StatValue>
				<StatLabel>Community Interactions</StatLabel>
			</StatsBlock>
		</ProfileStatsWrapper>
	)
}

export default ProfileStats
