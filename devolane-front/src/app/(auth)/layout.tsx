import Header from '@/components/Header/Header'
import { EnHeaderType } from '@/components/Header/Header.types'

import { Providers } from '@/providers/providers'
import '@/styles/globals.scss'
import { bungeeOutline, bungeeShade, gugi } from '@/assets/fonts/fonts'
import StyledComponentsRegistry from '@/components/StyledComponentsRegistry/StyledComponentsRegistry.tsx'

export const metadata = {
	title: 'Welcome to Devolane!',
	description:
		'The Devolane is site for developer who want to improve your skills and reach big goals',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={` ${bungeeOutline.variable}  ${bungeeShade.variable}  ${gugi.variable}`}
			>
				<Providers>
					<Header type={EnHeaderType.Auth} />
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</Providers>
			</body>
		</html>
	)
}
