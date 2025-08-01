import SettingsIcon from '@mui/icons-material/Settings'
import Button from '@/components/ui/Button'
import 'react-ui-phone-input/lib/style.css'
import Avatar from './Avatar'
import InfoFields from './InfoFields'
import { useProfileContext } from '@/context/ProfileContext'

import { BioField, InfoInput, SettingsBtn } from '../styled'
import InfoField from '@/components/InfoField/InfoField'

const Settings = () => {
	const { dispatch, handleSaveChanges, isMaster, errors, register } =
		useProfileContext()

	return (
		<>
			<SettingsBtn
				onClick={() => dispatch({ type: 'SET_SETTING_MODE', payload: false })}
				whileHover={{ rotate: 360 }}
				transition={{ duration: 0.8 }}
			>
				<SettingsIcon />
			</SettingsBtn>
			<Avatar isEditable />
			<BioField>
				<InfoField error={errors.bio?.message}>
					<InfoInput
						style={{ textAlign: 'center' }}
						{...register('bio')}
						type='text'
					/>
				</InfoField>
			</BioField>

			<InfoFields isEditable />
			{isMaster && <Button onClick={handleSaveChanges}>Save changes</Button>}
		</>
	)
}

export default Settings
