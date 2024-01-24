import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

// import routes
import routes from '@/utils/routes'

// components
import { fsMenuState } from '@/components/fs-menu'
import MagneticButton from '@/components/utils/magnetic-button'

// import necessary svgs
import Logo from '@/assets/svg/logo.svg'
import UxMenu from '@/assets/svg/ux/menu.svg'
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'

// css
import styles from './top-menu.module.scss'

export default function TopMenu() {

	// open fs menu
	const [fsMenu, setFsMenu] = useRecoilState(fsMenuState)
	const [isShown, setIsShown] = useState(false)

	// open the fs menu and add the overflow: hidden to the body tag
	const openCloseFsMenu = () => {
		setFsMenu(!isShown)
		document.body.classList.add('no-scroll')
	}

	useEffect(() => {
		setIsShown(fsMenu)
	}, [fsMenu])

	// top menu
	const topMenu = [
		{ name: 'Início', href: routes.home },
		{ name: 'Sobre', href: routes.about },
		{ name: 'Serviços', href: routes.services },
		{ name: 'Contato', href: routes.contact }
	]

	const router = useRouter()
	const whiteMenu = 
		router.pathname === '/' ||
		router.pathname === '/404' ||
		router.pathname === '/servicos' ||
		router.pathname.startsWith('/servicos/')

	return (
		<section className={clsx(styles.topMenu, whiteMenu && styles.white)}>
			<div className='container container-big'>
				<div className={styles.flex}>

					<MagneticButton>
						<Link
							className={styles.logo}
							href={routes.home}
							aria-label='Início'
						>
							<Logo />
						</Link>
					</MagneticButton>

					<div className={clsx(styles.right, 'text-small')}>

						<nav className={styles.menu}>
							<ul>
								{topMenu.map((item, i) => (
									<li key={i}>
										<MagneticButton strength={25}>
											<Link
												href={item.href}
												className='hover-underline'
												aria-label={item.name}
											>
												{item.name}
											</Link>
										</MagneticButton>
									</li>
								))}
							</ul>
						</nav>

						<MagneticButton strength={50}>
							<Link
								href={routes.quote}
								className={clsx(styles.blueButton, 'blue-button')}
							>
								<span><span className={styles.hideMob}>Solicite uma </span>cotação</span>
								<span className={styles.hideMob}><UxArrowRight /></span>
							</Link>
						</MagneticButton>

						<button
							className={styles.openFs}
							onClick={openCloseFsMenu}
							title='Open Menu'
						>
							<UxMenu />
						</button>

					</div>

				</div>
			</div>
		</section>
	)
}