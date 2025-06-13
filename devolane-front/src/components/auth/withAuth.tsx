import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store/store'

export function withAuth<P extends object>(
	WrappedComponent: React.ComponentType<P>
) {
	return function WithAuthComponent(props: P) {
		const router = useRouter()
		const user = useSelector((state: RootState) => state.user.user)

		useEffect(() => {
			if (!user) {
				router.push('/login')
			}
		}, [user, router])

		if (!user) {
			return null
		}

		return <WrappedComponent {...props} />
	}
}
