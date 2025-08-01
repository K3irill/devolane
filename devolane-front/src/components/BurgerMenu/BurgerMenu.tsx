import Link from 'next/link'
import {
	BurgerMenuNavigation,
	BurgerMenuNavList,
	BurgerMenuStyled,
	BurgerNavItem,
} from './styled'
import { IBurgerMenu } from './BurgerMenuType'

function BurgerMenu({ links, isShow }: IBurgerMenu) {
	return (
		<BurgerMenuStyled isShow={isShow}>
			<BurgerMenuNavigation>
				<BurgerMenuNavList>
					{links &&
						links.map(item => (
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
