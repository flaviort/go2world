import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

// gsap related imports
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// import routes
import routes from '@/utils/routes'

// components
import MagneticButton from '@/components/utils/magnetic-button'
import { Form, Input } from '@/components/form'

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
			title: 'Menu',
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

							<MagneticButton>
								<Link
									href={routes.quote}
									className='black-button text-small'
								>
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

					<div className={styles.top}>
						<div className='row'>

							<div className={clsx(styles.left, 'col-lg-6')}>
								<div className={styles.wrapper}>

									<p className={styles.text}>
										<b>Se inscreva na nossa newsletter</b>
										Inscreva-se na nossa newsletter para informações relevantes. Sem spam, apenas conteúdo valioso diretamente para você.
									</p>

									<Form className={styles.form}>

										<Input
											dark
											label='Email'
											type='email'
											id='newsletter-email'
											placeholder='email@email.com'
											required
										/>

										<div className={styles.lastLine}>

											<MagneticButton>
												<button type='submit' className='blue-button text-small'>
													<span>Enviar</span>
													<UxArrowRight />
												</button>
											</MagneticButton>

											<MagneticButton>
												<Link
													href={routes.instagram}
													target='_blank'
													className={styles.social}
													rel='noreferrer'
													aria-label='Instagram'
												>
													<SocialInstagram />
												</Link>
											</MagneticButton>

										</div>

									</Form>

								</div>
							</div>

							<div className={clsx(styles.right, 'col-lg-6')}>
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
													<MagneticButton>
														<Link
															href={link.url}
															className='hover-underline'
															aria-label={link.name}
														>
															{link.name}
														</Link>
													</MagneticButton>
												</li>
											))}

										</ul>
									))}
								</nav>
							</div>

						</div>
					</div>

					<div className={styles.bottom}>

						<MagneticButton>
							<Link
								href={routes.home}
								className={styles.logo}
								aria-label='Início'
							>
								<Logo />
							</Link>
						</MagneticButton>

						<p className='text-small'>
							Copyright @ Go2World {new Date().getFullYear()}
						</p>

					</div>

				</div>
			</section>
		</>
	)
}
