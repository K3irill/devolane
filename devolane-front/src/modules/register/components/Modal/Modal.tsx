import React, { FC } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import Modal from '@mui/material/Modal'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Colors } from '@/lib/constants/Colors'
import type { IRegisterFormModal } from './Modal.d'
import { motion } from 'framer-motion'

const FormRegisterModal: FC<IRegisterFormModal> = props => {
	return (
		<Modal
			open={props.isRegisterSuccess || props.isRegisterError}
			onClose={() => {
				if (props.isRegisterError) {
					props.setRegisterError(false)
				} else if (props.isRegisterSuccess) {
					props.setRegisterSuccess(false)
				}
			}}
			aria-labelledby='parent-modal-title'
			aria-describedby='parent-modal-description'
		>
			<motion.div
				initial={{ transform: 'translateY(-100%) translateX(-50%)' }}
				animate={{ transform: 'translateY(-50%) translateX(-50%)' }}
				transition={{ type: 'spring' }}
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 400,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '25px',
					backgroundColor: `${
						props.isRegisterSuccess ? '#1b2b27c4' : '#2f0b0bac'
					} `,
					border: `2px solid ${
						props.isRegisterSuccess ? '#09b846' : Colors.Red.error
					}`,
					borderRadius: '6px',
					boxShadow: '24px',
					paddingTop: 16,
					paddingLeft: 32,
					paddingRight: 32,
					paddingBottom: 24,
				}}
			>
				<h2
					id='parent-modal-title'
					style={{ fontSize: '1.5rem', textAlign: 'center' }}
				>
					{props.isRegisterSuccess
						? `Registration was completed successfully`
						: `Error during registration `}
				</h2>
				<motion.p
					initial={{ scale: 0.3 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1 }}
				>
					{props.isRegisterSuccess ? (
						<CheckCircleIcon sx={{ fontSize: 72, fill: '#09b846' }} />
					) : (
						<CancelIcon sx={{ fontSize: 72, fill: `${Colors.Red.error}` }} />
					)}
				</motion.p>
				<p
					id='parent-modal-description'
					style={{ fontSize: '1.2rem', textAlign: 'left' }}
				>
					{props.isRegisterSuccess ? (
						<>
							Redirection to the login page via:{' '}
							<span style={{ fontSize: '1.5rem', color: '#09b846' }}>
								{props.countdown}
							</span>
						</>
					) : (
						props.regError
					)}
				</p>
			</motion.div>
		</Modal>
	)
}

export default FormRegisterModal
