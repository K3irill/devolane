import Header from '@/components/Header/Header'
import { Bungee_Outline, Bungee_Shade, Gugi } from 'next/font/google'
import { EnHeaderType } from '@/components/Header/Header.types'
import { Providers } from '@/providers/providers'
import '@/styles/globals.scss'

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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<Header type={EnHeaderType.Auth} />
			<body
				className={` ${bungeeOutline.variable}  ${bungeeShade.variable}  ${gugi.variable}`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
