import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

// gsap related imports
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// import routes
import routes from '@/config/routes'

// components
import MagneticButton from '@/components/utils/magnetic-button'

// import necessary svgs
import Logo from '@/assets/svg/logo.svg'
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'
import SocialInstagram from '@/assets/svg/social/instagram.svg'
//import SocialLinkedin from '@/assets/svg/social/linkedin.svg'
//import SocialPinterest from '@/assets/svg/social/pinterest.svg'
//import SocialTwitter from '@/assets/svg/social/twitter.svg'
//import SocialWhatsapp from '@/assets/svg/social/whatsapp.svg'
//import SocialYoutube from '@/assets/svg/social/youtube.svg'

// css
import styles from './footer.module.scss'

export default function Footer() {

	const container = useRef(null)
	const blueBox = useRef(null)

	useEffect(() => {
        if (container.current) {
            const item = container.current

			gsap.from(item, {
				y: 100,
				scrollTrigger: {
					trigger: blueBox.current,
					end: 'bottom top',
					scrub: 3
				}
			})
        }
	}, [])

	const menu = [
		{
			title: 'Quem somos',
			links: [
				{ name: 'Início', url: routes.home },
				{ name: 'Sobre', url: routes.about },
				{ name: 'Serviços', url: routes.services },
				{ name: 'Cotação', url: routes.quote },
				{ name: 'Contato', url: routes.contact }
			]
		}, {
			title: 'Serviços',
			links: [
				{ name: 'Frete Aéreo', url: '/servicos/frete-aereo' },
				{ name: 'Frete Marítimo', url: '/servicos/frete-maritimo' },
				{ name: 'Frete Rodoviário', url: '/servicos/frete-rodoviario' },
				{ name: 'Carga Projeto', url: '/servicos/carga-projeto' },
				{ name: 'Door to Door', url: '/servicos/door-to-door' },
				{ name: 'Serviços Logísticos', url: '/servicos/servicos-logisticos' },
			]
		}
	]

	return (
		<>
			<section className={styles.cta}>
				<div className='container'>
					<div className={styles.blueBox} ref={blueBox}>

						<div className={styles.pattern} />

						<Image
							className={styles.shippingContainer}
							alt='Container'
							src='/img/container.png'
							width='1200'
							height='895'
							sizes='45vw'
							ref={container}
						/>

						<div className={styles.flex}>

							<h2 className='text-bigger medium'>
								Faça uma cotação <br />
								hoje mesmo.
							</h2>

							<MagneticButton strength='30'>
								<Link href={routes.quote} className='black-button text-small'>
									<span>Solicite uma cotação</span>
									<UxArrowRight />
								</Link>
							</MagneticButton>

						</div>

					</div>
				</div>
			</section>

			<section className={styles.footer}>
				<div className='container'>
					<div className='row'>

						<div className={styles.left + ' col-lg-4'}>

							<Link href={routes.home} className={styles.logo} aria-label='Go to Homepage'>
								<Logo />
							</Link>

							<ul className={styles.social}>
								
								<li>
									<a
										href={routes.instagram}
										target='_blank'
										rel='noreferrer'
										aria-label='Instagram'
									>
										<SocialInstagram />
									</a>
								</li>

							</ul>

						</div>

						<div className={styles.right + ' col-lg-8'}>
							<nav className={styles.menu}>
								{ menu.map((item, i) => (
									<ul key={i}>

										<li>
											<p className={styles.title}>
												{ item.title }
											</p>
										</li>

										{item.links.map((link, i) => (
											<li key={i}>
												<Link
													href={link.url}
													className='hover-underline'
													aria-label={link.name}
												>
													{link.name}
												</Link>
											</li>
										))}

									</ul>
								))}
							</nav>
						</div>

					</div>

					<div className={styles.bottom}>

						<Link href={routes.home}>
							<Logo />
						</Link>

						<p className='text-small'>
							Copyright @ Go2World {new Date().getFullYear()} - Powered by <Link href={routes.senz} target='_blank' className='hover-underline-white'>Senz</Link>
						</p>

					</div>

				</div>
			</section>
		</>
	)
}
