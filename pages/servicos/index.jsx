import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createClient } from '@/prismicio'

// import routes / services
import routes from '@/utils/routes'
import { getAllServices, getIconComponent } from '@/utils/services'

// swiper related imports
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// components
import SeoContainer from '@/components/utils/seo-container'
import MagneticButton from '@/components/utils/magnetic-button'
import ScrollingImage from '@/components/utils/scrolling-image'
import ServiceBlock from '@/components/service-block'

// css
import styles from './services.module.scss'

export default function Services() {

	// get all services
	const allServices = getAllServices()
	const serviceKeys = Object.keys(allServices)

	// state to track the window width on the client side
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {

		// this is needed for swiper
		register()
		
		const updateWindowWidth = () => {
		  	setWindowWidth(window.innerWidth)
		}
	
		// initial update
		updateWindowWidth()
	
		// event listener for window resize
		window.addEventListener('resize', updateWindowWidth)
	
		// cleanup the event listener on component unmount
		return () => {
		  	window.removeEventListener('resize', updateWindowWidth)
		}

	}, [])

	// calculate the breakpoint on the client side
	const breakXs = windowWidth > 575

    return (
		<>
			<SeoContainer
				pageTitle='Nossos serviços'
				pageDescription='Construímos relações sólidas com transparência e integridade, assegurando aos clientes que podem contar conosco em todas as fases do processo logístico.'
			/>

			<main className={styles.services}>

				<section className={styles.banner}>

					<div className={styles.pattern} />

					<div className='container relative z2'>

						<div className={styles.wrapper}>

							<h3 className='subtitle'>
								Serviços
							</h3>

							<h1 className='text-bigger-2 medium'>
								Ser um parceiro confiável é a essência da nossa missão<span className='blue'>.</span>
							</h1>

							<p>
								Construímos relações sólidas com transparência e integridade, assegurando aos clientes que podem contar conosco em todas as fases do processo logístico.
							</p>

						</div>

						<div className={styles.image}>
							<ScrollingImage>
								<Image
									alt='Entregador organizando caixas'
									src='/img/delivery-man.jpg'
									priority={true}
									fill={true}
									sizes='100vw'
								/>
							</ScrollingImage>
						</div>

					</div>
				</section>

				<section className={styles.allServices}>
					<div className='container'>

						<div className={styles.top}>

							<h3 className='subtitle'>
								Nossos serviços
							</h3>

							<h2 className='text-bigger medium'>
								Conheça todos os <br />
								nossos serviços<span className='blue'>.</span>
							</h2>

						</div>

						{ breakXs ? (
							<div className={styles.grid}>
								{serviceKeys.map((key) => (
									<ServiceBlock
										key={key}
										serviceTitle={allServices[key].title}
										serviceSmallDesc={allServices[key].smallDesc}
										serviceLink={'servicos/' + key}
										serviceIcon={getIconComponent(key)}
									/>
								))}
							</div>
						):(
							<Swiper
								className={styles.slider}
								spaceBetween={10}
								slidesPerView={1.3}
								freeMode={true}
								mousewheel={{  
									forceToAxis: true
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
						)}

					</div>
				</section>

			</main>
		</>
    )
}

/*
export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })
    const settings = await client.getSingle('settings')
	const page = await client.getSingle('services')

    return {
        props: {
			settings,
			page
		}
    }
}
*/