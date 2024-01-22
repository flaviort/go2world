import Link from 'next/link'
import { useEffect } from 'react'
import { atom, useRecoilState } from 'recoil'

// import routes
import routes from '@/utils/routes'
import { getAllServices, getIconComponent } from '@/utils/services'

// swiper related imports
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// components
import ServiceBlock from '@/components/service-block'

// import necessary svgs
import Logo from '@/assets/svg/logo.svg'
import UxClose from '@/assets/svg/ux/close.svg'
import SocialInstagram from '@/assets/svg/social/instagram.svg'
import SocialWhatsapp from '@/assets/svg/social/whatsapp.svg'

// css
import styles from './fs-menu.module.scss'

// export fs menu state via recoil
export const fsMenuState = atom({
	key: 'fsMenuStateKey',
	default: false
})

export default function FsMenu(props) {

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
		<section className={styles.fsMenu + ' ' + (fsMenu ? styles.active : '')}>
			<div className={styles.wrapper}>

				<div className={styles.top}>

					<Link
						className={styles.logo}
						href={routes.home}
						onClick={hideMenu}
						aria-label='Início'
					>
						<Logo />
					</Link>

					<div className={styles.right}>

						<Link
							className={styles.icon + ' ' + styles.whatsapp}
							href={routes.whatsappFlavia}
							aria-label='Whatsapp'
						>
							<SocialWhatsapp />
						</Link>

						<button
							className={styles.icon + ' ' + styles.close}
							onClick={hideMenu}
							title='Fechar Menu'
						>
							<UxClose />
						</button>

					</div>

				</div>

				<div className={styles.menu}>

					<Services />

					<ul className={styles.ul}>
						
						{menu.map((item, i) => (
							<li key={i}>
								<Link
									href={item.href}
									onClick={hideMenu}
									aria-label={item.name}
								>
									{item.name}
								</Link>
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

export const Services = () => {

	// get all services
	const allServices = getAllServices()
	const serviceKeys = Object.keys(allServices)

	const [fsMenu, setFsMenu] = useRecoilState(fsMenuState)

	// close the fs menu and remove the overflow: hidden from the body tag
	function hideMenu() {
		setFsMenu(false)
		document.body.classList.remove('no-scroll')
	}

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
						/>
					</SwiperSlide>
				))}
			</Swiper>

		</div>
	)
}