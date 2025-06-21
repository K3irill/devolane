import React, { useEffect } from 'react'
import ArticleIcon from '@mui/icons-material/Article'
import WallpaperIcon from '@mui/icons-material/Wallpaper'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import Groups3Icon from '@mui/icons-material/Groups3'
import {
	ProfileElementsWrapper,
	ProfileElementsContent,
	ProfileElementItem,
	ProfileItemTitle,
	ProfileElementsList,
	FullElementContent,
	GroupElement,
	SwiperWrapper,
	GroupImg,
	GroupInfo,
} from './styled'
import { ProfileElementsProps } from './types'

import { Navigation } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { spring } from 'framer-motion'
import Link from 'next/link'

type IconType = 'Groups3' | 'Article' | 'Wallpaper' | 'Slideshow'
type ElementType = 'group' | 'article' | 'photo' | 'video'

const iconComponents = {
	Groups3: Groups3Icon,
	Article: ArticleIcon,
	Wallpaper: WallpaperIcon,
	Slideshow: SlideshowIcon,
} as const

const ProfileElements: React.FC<ProfileElementsProps> = () => {
	const [activeElement, setActiveElement] = React.useState<ElementType | null>(
		null
	)
	const GROUPS = [
		{
			id: 0,
			name: 'Easy coding',
			image:
				'https://static10.tgstat.ru/channels/_0/65/65f536c4c944d5b382140383a7fd5c6d.jpg',
			href: '/',
		},
		{
			id: 1,
			name: 'IT for kids',
			image:
				'https://avatars.mds.yandex.net/i?id=e78cbb15a78ed4139bb67c64b4cb2518_l-5281219-images-thumbs&n=13',
			href: '/',
		},
		{
			id: 2,
			name: 'JS-Doctor',
			image: 'https://dm-dobrov.ru/uploads/images/l/_/b/l_b_elbi_puls.jpg',
			href: '/',
		},
		{
			id: 3,
			name: 'Marketing for everyone!',
			image:
				'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f5189de-e4b3-4ecb-aeb8-867013e5e501/d4duwl5-64f2703b-89a5-484a-8153-22f3ab4221e5.jpg/v1/fill/w_900,h_575,q_75,strp/community_by_stevenraybrown_d4duwl5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc1IiwicGF0aCI6IlwvZlwvM2Y1MTg5ZGUtZTRiMy00ZWNiLWFlYjgtODY3MDEzZTVlNTAxXC9kNGR1d2w1LTY0ZjI3MDNiLTg5YTUtNDg0YS04MTUzLTIyZjNhYjQyMjFlNS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4or22wb7DjaSa9w2M53j0zkwwATrgOvSu-806GsPRm0',
			href: '/',
		},
	]

	const ELEMENTS = [
		{
			id: 0,
			title: 'Groups',
			count: GROUPS.length,
			icon: 'Groups3' as IconType,
			type: 'group' as ElementType,
		},
		{
			id: 1,
			title: 'Articles',
			count: 0,
			icon: 'Article' as IconType,
			type: 'article' as ElementType,
		},
		{
			id: 2,
			title: 'Photos',
			count: 0,
			icon: 'Wallpaper' as IconType,
			type: 'photo' as ElementType,
		},
		{
			id: 3,
			title: 'Videos',
			count: 0,
			icon: 'Slideshow' as IconType,
			type: 'video' as ElementType,
		},
	]

	useEffect(() => {
		setActiveElement('group')
	}, [])

	const handleOpenElement = (type: ElementType) => {
		setActiveElement(type)
	}

	const renderContent = () => {
		switch (activeElement) {
			case 'group':
				return (
					<SwiperWrapper>
						<Swiper
							modules={[Navigation]}
							spaceBetween={10}
							slidesPerView={1}
							navigation
							pagination={{ clickable: true }}
							breakpoints={{
								640: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								1024: {
									slidesPerView: 3,
									spaceBetween: 30,
								},
							}}
						>
							{GROUPS.map(group => (
								<SwiperSlide key={group.id}>
									<GroupElement
										initial={{ scale: 0.7, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ type: spring }}
									>
										<GroupImg>
											<img src={group.image} alt={group.name} />
										</GroupImg>
										<GroupInfo>
											<Link href={'/'}> {group.name}</Link>
										</GroupInfo>
									</GroupElement>
								</SwiperSlide>
							))}
						</Swiper>
					</SwiperWrapper>
				)
			case 'article':
				return <>There&apos;s nothing here</>
			case 'photo':
				return <>There&apos;s nothing here</>
			case 'video':
				return <>There&apos;s nothing here</>
			default:
				return null
		}
	}

	return (
		<ProfileElementsWrapper>
			<ProfileElementsList>
				{ELEMENTS &&
					ELEMENTS.map(element => {
						const IconComponent = iconComponents[element.icon]
						return (
							<ProfileElementItem
								onClick={() => handleOpenElement(element.type)}
								key={element.id}
								isOpen={activeElement === element.type}
							>
								<IconComponent />
								<ProfileItemTitle>{element.title}</ProfileItemTitle>
							</ProfileElementItem>
						)
					})}
			</ProfileElementsList>
			{activeElement && (
				<ProfileElementsContent
					key={activeElement}
					initial={{ transform: 'translateY(5px)' }}
					animate={{ transform: 'translateX(0px)' }}
					transition={{ type: spring }}
				>
					<FullElementContent>{renderContent()}</FullElementContent>
				</ProfileElementsContent>
			)}
		</ProfileElementsWrapper>
	)
}

export default ProfileElements
