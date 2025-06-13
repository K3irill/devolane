import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { logout } from '@/store/slices/userSlice/userSlice'
import Cookies from 'js-cookie'

export const useHandleLogOut = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	// const [logoutMutation] = useLogoutMutation()

	const handleLogOut = async () => {
		try {
			Cookies.remove('token')
			dispatch(logout())
			router.push('/login')
		} catch (error) {
			console.error('Logout failed:', error)
		}
	}

	return handleLogOut
}
