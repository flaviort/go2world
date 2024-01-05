import Link from 'next/link'
import { useEffect } from 'react'
import { atom, useRecoilState } from 'recoil'

// import routes
import routes from '@/config/routes'

// import necessary svgs
import Icon from '@/assets/svg/icon.svg'
import UxAngleDown from '@/assets/svg/ux/angle-down.svg'
import UxPhone from '@/assets/svg/ux/phone.svg'
import UxClose from '@/assets/svg/ux/close.svg'

// css
import styles from './fs-menu.module.scss'

// export fs menu state via recoil
export const fsMenuState = atom({
	key: 'fsMenuState',
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
						<Icon />
					</Link>

					<button
						className={styles.icon + ' ' + styles.close}
						onClick={hideMenu}
						title='Fechar Menu'
					>
						<UxClose />
					</button>

				</div>

				<div className={styles.menu}>
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

			</div>

			<button
				className={styles.blur}
				onClick={hideMenu}
				title='Fechar Menu'
			/>

		</section>
	)
}