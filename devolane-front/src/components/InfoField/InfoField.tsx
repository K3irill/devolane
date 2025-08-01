import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { InfoIcon, InfoItem, InfoLabel } from './styled'

const InfoField = ({
	icon: Icon,
	label,
	children,
	error,
}: {
	icon?: React.ComponentType
	label?: string
	children: React.ReactNode
	error?: string
}) => (
	<InfoItem>
		{Icon && (
			<InfoIcon>
				<Icon />
			</InfoIcon>
		)}
		{label && <InfoLabel>{label}</InfoLabel>}
		{children}
		{error && <ErrorMessage message={error} />}
	</InfoItem>
)

export default InfoField
