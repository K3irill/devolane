import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { InfoIcon, InfoItem, InfoLabel } from './styled'

const InfoField = ({
	icon: Icon,
	label,
	children,
	error,
}: {
	icon: React.ComponentType
	label: string
	children: React.ReactNode
	error?: string
}) => (
	<InfoItem>
		<InfoIcon>
			<Icon />
		</InfoIcon>
		<InfoLabel>{label}</InfoLabel>
		{children}
		<ErrorMessage message={error} />
	</InfoItem>
)

export default InfoField
