import SettingsIcon from '@mui/icons-material/Settings'
import Button from '@/components/ui/Button'
import 'react-ui-phone-input/lib/style.css'
import Avatar from './Avatar'
import InfoFields from './InfoFields'
import { useProfileContext } from '@/context/ProfileContext'

import { SettingsBtn } from '../styled'

const View = () => {
	const { dispatch, handleLogOut, isMaster } = useProfileContext()

	return (
		<>
			{isMaster && (
				<SettingsBtn
					onClick={() => dispatch({ type: 'SET_SETTING_MODE', payload: true })}
					whileHover={{ rotate: 360 }}
					transition={{ duration: 0.8 }}
				>
					<SettingsIcon />
				</SettingsBtn>
			)}
			<Avatar />
			<div>Hi there!</div>
			<InfoFields />
			{isMaster && (
				<Button onClick={handleLogOut} theme='red'>
					Log out
				</Button>
			)}
		</>
	)
}

export default View
