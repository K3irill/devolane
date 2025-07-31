import UpgradeIcon from '@mui/icons-material/Upgrade'
import { motion } from 'framer-motion'
import { getUserPhotoUrl } from '@/lib/utils/getUserPhotoUrl'
import 'react-ui-phone-input/lib/style.css'
import { useProfileContext } from '@/context/ProfileContext'
import { IPartOfUserProfile } from '../types'

import {
	ProfileUserAvatarWrap,
	ProfileUserAvatar,
	UpperPhotoWrap,
} from '../styled'

const Avatar = ({ isEditable = false }: IPartOfUserProfile) => {
	const { dispatch, state, openPhotoInput, photoInputRef, user } =
		useProfileContext()

	return (
		<ProfileUserAvatarWrap onClick={isEditable ? openPhotoInput : undefined}>
			{isEditable && (
				<input
					style={{ display: 'none' }}
					ref={photoInputRef}
					type='file'
					name='userPhoto'
					id='userPhoto'
					onChange={e =>
						dispatch({
							type: 'SET_DOWNLOADED_PHOTO',
							payload: e.target.files?.[0],
						})
					}
				/>
			)}
			<ProfileUserAvatar>
				<img
					src={
						state.photoPreview ||
						getUserPhotoUrl(
							typeof user.photo === 'string' ? user.photo : undefined
						)
					}
					alt={'User avatar'}
				/>
				{isEditable && (
					<UpperPhotoWrap withBlur={!!state.photoPreview}>
						<motion.span
							animate={{ scale: [1.1, 1, 1.1] }}
							transition={{
								scale: {
									duration: 3,
									repeat: Infinity,
								},
							}}
						>
							<UpgradeIcon
								sx={{ fontSize: 72, opacity: state.photoPreview ? 0.2 : 1 }}
							/>
						</motion.span>
					</UpperPhotoWrap>
				)}
			</ProfileUserAvatar>
		</ProfileUserAvatarWrap>
	)
}

export default Avatar
