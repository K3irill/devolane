import SettingsIcon from '@mui/icons-material/Settings'
import Button from '@/components/ui/Button'
import 'react-ui-phone-input/lib/style.css'
import Avatar from './Avatar'
import InfoFields from './InfoFields'
import { useProfileContext } from '@/context/ProfileContext'

import { SettingsBtn } from '../styled'

const Settings = () => {
	const { dispatch, handleSaveChanges, isMaster } = useProfileContext()

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
			<div>Hi there!</div>
			<InfoFields isEditable />
			{isMaster && <Button onClick={handleSaveChanges}>Save changes</Button>}
		</>
	)
}

export default Settings
