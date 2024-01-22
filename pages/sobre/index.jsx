import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { createClient } from '@/prismicio'

// swiper related imports
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// gsap related imports
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// import routes / services
import routes from '@/utils/routes'

// components
import SeoContainer from '@/components/utils/seo-container'
import ScrollingImage from '@/components/utils/scrolling-image'
import MagneticButton from '@/components/utils/magnetic-button'
import Counter from '@/components/utils/counter'
import Clients from '@/components/clients'
import Location from '@/components/location'

// import necessary svgs
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'
import IconTarget from '@/assets/svg/target.svg'
import IconEye from '@/assets/svg/eye.svg'
import IconValues from '@/assets/svg/values.svg'

// css
import styles from './about.module.scss'

export default function About() {

	const globe = useRef(null)

	useEffect(() => {

		// globe animation
		if (globe.current) {
			gsap.to(globe.current, {
                yPercent: 10,
                scrollTrigger: {
                    trigger: globe.current,
                    scrub: 3,
					start: 'center bottom',
                    end: 'bottom top'
                }
            })
        }

		// this is needed for swiper
		register()

	}, [])

    return (
		<>
			<SeoContainer
				pageTitle='Somos o futuro da logística'
				pageDescription='De ponta a ponta, a Go2World oferece soluções logísticas abrangentes que transcendem fronteiras, conectando seu produto ao mundo.'
			/>

			<main className={styles.about}>

				<section className={styles.globe}>

					<div className={styles.top}>
						<div className='container'>

							<h3 className='subtitle'>
								Nossos valores
							</h3>

							<div className={styles.flex}>

								<h1 className='text-bigger-2 medium'>
									A base que orienta <br />
									nossa jornada<span className='blue'>.</span>
								</h1>

								<p>
									Com transparência e inovação constantes, buscamos construir uma empresa sólida e relações bem-sucedidas no comércio global.
								</p>

							</div>

							<div className={styles.buttons}>
								<div className={styles.wrapper}>

									<MagneticButton>
										<Link href={routes.quote} className='blue-button text-small'>
											<span>Solicite uma cotação</span>
											<UxArrowRight />
										</Link>
									</MagneticButton>

									<MagneticButton>
										<Link href={routes.services} className='hollow-button text-small'>
											<span>Nossos serviços</span>
										</Link>
									</MagneticButton>

								</div>
							</div>

						</div>
					</div>

					<div className={styles.image}>
						<Image
							alt='Globo terrestre'
							src='/img/globe.png'
							width={1526}
							height={930}
							priority={true}
							ref={globe}
						/>
					</div>

					<div className={styles.numbers}>
						<div className='container'>
							<div className='row'>

								<div className={styles.col + ' col-lg-4'}>
									
									<div className={styles.flex}>

										<div className={styles.big + ' text-biggest'}>
											<Counter number={100} />
											<small className='blue'>%</small>
										</div>

										<p className={styles.title + ' text-big medium'}>
											Satisfação dos <br />
											clientes
										</p>

									</div>

									<p className={styles.smallDesc}>
										Excelência é nosso padrão. Garantimos 100% de satisfação, superando expectativas e oferecendo serviços logísticos de qualidade inigualável.
									</p>

								</div>

								<div className={styles.col + ' col-lg-4'}>
									
									<div className={styles.flex}>

										<div className={styles.big + ' text-biggest'}>
											<Counter number={57} />
											<small className='blue'>+</small>
										</div>

										<p className={styles.title + ' text-big medium'}>
											Clientes ao redor <br />
											do mundo
										</p>

									</div>

									<p className={styles.smallDesc}>
										Expandimos horizontes! Com orgulho, atendemos mais de 57 clientes em diversos países, proporcionando soluções logísticas globais e confiáveis.
									</p>

								</div>

								<div className={styles.col + ' col-lg-4'}>
									
									<div className={styles.flex}>

										<div className={styles.big + ' text-biggest'}>
											<Counter number={5000} />
											<small className='blue'>+</small>
										</div>

										<p className={styles.title + ' text-big medium'}>
											Containers <br />
											entregues
										</p>

									</div>

									<p className={styles.smallDesc}>
										Confiabilidade em números! Celebramos a marca de mais de 5000 containers entregues, assegurando eficiência e pontualidade em cada operação logística.
									</p>

								</div>

							</div>
						</div>
					</div>

				</section>

				<section className={styles.history}>

					<div className={styles.bg} />

					<div className='container'>

						<div className={styles.image}>
							<ScrollingImage>
								<Image
									alt='Foto de vários containers empilhados'
									src='/img/containers.jpg'
									fill={true}
									sizes='
										(max-width: 767px) 100vw,
										50vw
									'
								/>
							</ScrollingImage>
						</div>

						<div className={styles.content}>

							<h3 className='subtitle'>
								Hossa história
							</h3>

							<p className='text-bigger medium'>
								Desde o início, moldamos nossa história com paixão pela importação e exportação<span className='blue'>.</span>
							</p>

							<p className={styles.desc}>
								Nossos especialistas em logística internacional possuem uma vasta experiência em agenciamento de cargas/NVOCC em todo o território nacional. Ao combinar esse conhecimento a uma abordagem próxima aos clientes, compreendemos suas necessidades e desenvolvemos processos de trabalho otimizados para atendê-las de maneira eficaz.
							</p>

						</div>

					</div>
				</section>

				<section className={styles.values}>
					<div className='container'>

						<div className={styles.top}>

							<h3 className='subtitle'>
								Nossos valores
							</h3>

							<div className={styles.flex}>

								<h2 className='text-bigger medium'>
									A base que orienta <br />
									nossa jornada<span className='blue'>.</span>
								</h2>

								<p>
									Com transparência e inovação constantes, buscamos construir uma empresa sólida e relações bem-sucedidas no comércio global.
								</p>

							</div>

						</div>

						<Swiper
							className={styles.slider}
							spaceBetween={15}
							slidesPerView={1.3}
							freeMode={true}
							mousewheel={{  
								forceToAxis: true
							}}
							breakpoints={{
								576: {
									slidesPerView: 2.2,
									spaceBetween: 15
								}, 1201: {
									slidesPerView: 3,
									spaceBetween: 30
								}
							}}
						>

							<SwiperSlide>
								<div className={styles.block}>

									<div className={styles.icon}>
										<IconTarget />
									</div>

									<h3 className='text-medium-big medium'>
										Missão
									</h3>

									<p>
										Facilitar a globalização dos nossos clientes através dos melhores serviços logísticos a nível global integrados de ponta a ponta.
									</p>

								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className={styles.block}>

									<div className={styles.icon}>
										<IconEye />
									</div>

									<h3 className='text-medium-big medium'>
										Visão
									</h3>

									<p>
										Ser uma das dez maiores agentes de cargas do Brasil e apresentar disponibilidade de serviços para toda a América do Sul.
									</p>

								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className={styles.block}>

									<div className={styles.icon}>
										<IconValues />
									</div>

									<h3 className='text-medium-big medium'>
										Valores
									</h3>

									<ul>
										<li>Ética e transparência</li>
										<li>Foco total nas operações</li>
										<li>Processos ágeis e inovadores</li>
										<li>Foco em resultados</li>
										<li>Política de qualidade</li>
										<li>Valorização de parceiros</li>
									</ul>

								</div>
							</SwiperSlide>

						</Swiper>

					</div>
				</section>

				<Location />

				<Clients />

			</main>
		</>
    )
}

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })
    const settings = await client.getSingle('settings')
	const page = await client.getSingle('about')

    return {
        props: {
			settings,
			page
		}
    }
}