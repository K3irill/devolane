import Link from 'next/link'
import {
	BurgerMenuNavigation,
	BurgerMenuNavList,
	BurgerMenuStyled,
	BurgerNavItem,
} from './styled'

function BurgerMenu(links) {
	return (
		<BurgerMenuStyled>
			<BurgerMenuNavigation>
				<BurgerMenuNavList>
					{links &&
						links.links.map(item => (
							<BurgerNavItem isDisabled={!item.enable} key={item.id}>
								<Link aria-disabled={item.enable} href={item.href}>
									{item.title}
								</Link>
							</BurgerNavItem>
						))}
				</BurgerMenuNavList>
			</BurgerMenuNavigation>
		</BurgerMenuStyled>
	)
}

export default BurgerMenu
