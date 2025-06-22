import Header from '@/components/Header/Header'
import { Bungee_Outline, Bungee_Shade, Gugi } from 'next/font/google'
import { EnHeaderType } from '@/components/Header/Header.types'
import { Providers } from '@/providers/providers'
import '@/styles/globals.scss'
import { cookies } from 'next/headers'
import { IUserFullResponse } from '@/types/user/IUser'
import { getCurrentUser } from '@/lib/api/user/getUser'

export const metadata = {
	title: 'Welcome to Devolane!',
	description:
		'The Devolane is site for developer who want to improve your skills and reach big goals',
}

const bungeeOutline = Bungee_Outline({
	variable: '--font-bungee-outline',
	weight: '400',
	subsets: ['latin'],
})

const bungeeShade = Bungee_Shade({
	variable: '--font-bungee-shade',
	weight: '400',
	subsets: ['latin'],
})

const gugi = Gugi({
	variable: '--font-gugi-sans',
	weight: '400',
	subsets: ['latin'],
})

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const username = (await cookies()).get('username')?.value
	let currentUser: IUserFullResponse | null = null
	if (username) {
		currentUser = await getCurrentUser('te4st')
	}
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
