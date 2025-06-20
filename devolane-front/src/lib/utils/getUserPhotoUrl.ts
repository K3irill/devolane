export const getUserPhotoUrl = (photo?: string) =>
	photo && typeof photo === 'string'
		? `http://localhost:3333/uploads/users/${photo}`
		: '/images/default/user/default-avatar.jpg'
