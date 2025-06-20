export const formatDate = (dateString: string, locales = 'en-EN') => {
	return new Date(dateString).toLocaleDateString(locales, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}
