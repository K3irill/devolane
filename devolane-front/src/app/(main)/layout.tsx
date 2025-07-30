import Header from '@/components/Header/Header'
import { bungeeOutline, bungeeShade, gugi } from '@/assets/fonts/fonts'
import { EnHeaderType } from '@/components/Header/Header.types'
import { Providers } from '@/providers/providers'
import '@/styles/globals.scss'
import { getCurrentUserWithCookie } from '@/lib/utils/getCurrentUserWithCookie'

export const metadata = {
	title: 'Welcome to Devolane!',
	description:
		'The Devolane is site for developer who want to improve your skills and reach big goals',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const currentUser = await getCurrentUserWithCookie()

	return (
		<html lang='en'>
			<body
				className={` ${bungeeOutline.variable}  ${bungeeShade.variable}  ${gugi.variable}`}
			>
				<Providers user={currentUser?.data}>
					<Header type={EnHeaderType.Main} />
					{children}
				</Providers>
			</body>
		</html>
	)
}
