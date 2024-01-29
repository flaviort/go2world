import Link from 'next/link'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

// import routes / utils
import routes from '@/utils/routes'
import { getAllServices, getIconComponent } from '@/utils/services'
import { fsMenuState } from '@/utils/atoms'

// swiper related imports
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// components
import AnimatedLink from '@/components/utils/animated-link'
import ServiceBlock from '@/components/service-block'

// import necessary svgs
import Logo from '@/assets/svg/logo.svg'
import UxClose from '@/assets/svg/ux/close.svg'
import SocialInstagram from '@/assets/svg/social/instagram.svg'
import SocialWhatsapp from '@/assets/svg/social/whatsapp.svg'

// css
import styles from './fs-menu.module.scss'

export default function FsMenu() {

	const [fsMenu, setFsMenu] = useRecoilState(fsMenuState)

	// close the fs menu and remove the overflow: hidden from the body tag
	function hideMenu() {
		setFsMenu(false)
		document.body.classList.remove('no-scroll')
	}

	// close menu when pressing ESC
	useEffect(() => {
		const handleKeyDown = (event) => {
		  	if (event.key === 'Escape') {
				hideMenu()
		  	}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
		  	document.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	// other items in the menu
	const menu = [
		{ name: 'Início', href: routes.home },
		{ name: 'Sobre', href: routes.about },
		{ name: 'Serviços', href: routes.services },
		{ name: 'Cotação', href: routes.quote },
		{ name: 'Contato', href: routes.contact }
	]

	return (
		<section className={clsx(styles.fsMenu, fsMenu && styles.active)}>
			<div className={styles.wrapper}>

				<div className={styles.top}>

					<AnimatedLink
						className={styles.logo}
						href={routes.home}
						onClick={hideMenu}
						aria-label='Início'
					>
						<Logo />
					</AnimatedLink>

					<div className={styles.right}>

						<Link
							className={clsx(styles.icon, styles.whatsapp)}
							href={routes.whatsappFlavia}
							target='_blank'
							aria-label='Whatsapp'
						>
							<SocialWhatsapp />
						</Link>

						<button
							className={clsx(styles.icon, styles.close)}
							onClick={hideMenu}
							title='Fechar Menu'
						>
							<UxClose />
						</button>

					</div>

				</div>

				<div className={styles.menu}>

					<Services onClick={hideMenu} />

					<ul className={styles.ul}>
						
						{menu.map((item, i) => (
							<li key={i}>
								<AnimatedLink
									href={item.href}
									onClick={hideMenu}
									aria-label={item.name}
								>
									{item.name}
								</AnimatedLink>
							</li>
						))}
					</ul>

				</div>

				<div className={styles.bottom}>

					<p>
						Siga-nos
					</p>

					<Link
						href={routes.instagram}
						target='_blank'
						aria-label='Instagram'
					>
						<SocialInstagram />
					</Link>

				</div>

			</div>

			<button
				className={styles.blur}
				onClick={hideMenu}
				title='Fechar Menu'
			/>

		</section>
	)
}

export const Services = ({ onClick }) => {

	// get all services
	const allServices = getAllServices()
	const serviceKeys = Object.keys(allServices)

	useEffect(() => {

		// this is needed for swiper
		register()

	}, [])

	return (
		<div className={styles.locations}>

			<Swiper
				className={styles.slider}
				spaceBetween={10}
				slidesPerView={1.3}
				freeMode={true}
				mousewheel={{  
					forceToAxis: true
				}}
				breakpoints={{
					576: {
						slidesPerView: 2.2
					}
				}}
			>
				{serviceKeys.map((key) => (
					<SwiperSlide key={key}>
						<ServiceBlock
							key={key}
							serviceTitle={allServices[key].title}
							serviceSmallDesc={allServices[key].smallDesc}
							serviceLink={'servicos/' + key}
							serviceIcon={getIconComponent(key)}
							onClick={onClick}
						/>
					</SwiperSlide>
				))}
			</Swiper>

		</div>
	)
}