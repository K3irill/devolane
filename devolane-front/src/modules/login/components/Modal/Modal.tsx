import React, { FC } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import Modal from '@mui/material/Modal'
import { Colors } from '@/lib/constants/Colors'
import type { ILoginFormModal } from './Modal.d'
import { motion } from 'framer-motion'
import Button from '@mui/material/Button'

const FormLoginModal: FC<ILoginFormModal> = props => {
	return (
		<Modal
			open={Boolean(props.loginError)}
			onClose={() => props.setLoginError(null)}
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
					backgroundColor: '#2f0b0bac',
					border: `2px solid ${Colors.Red.error}`,
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
					Error during login
				</h2>
				<motion.p
					initial={{ scale: 0.3 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1 }}
				>
					<CancelIcon sx={{ fontSize: 72, fill: `${Colors.Red.error}` }} />
				</motion.p>
				<p style={{ color: 'white', textAlign: 'center' }}>
					{props.loginError}
				</p>
				<Button
					onClick={() => props.setLoginError(null)}
					sx={{
						fontSize: '18px',
						backgroundColor: '#7b0b0b',
						color: 'white',
						padding: '6px 32px',
						borderRadius: '8px',
						borderColor: `${Colors.Red.error}`,
						'&:hover': {
							backgroundColor: `${Colors.Red.error}`,
							transform: 'translateY(-2px)',
							boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
						},
						transition: 'all 0.3s ease',
						'&:disabled': {
							backgroundColor: '#e0e0e0',
							color: '#9e9e9e',
						},
					}}
					variant='contained'
					type='submit'
				>
					Okay
				</Button>
			</motion.div>
		</Modal>
	)
}

export default FormLoginModal
