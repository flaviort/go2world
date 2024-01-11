import Image from 'next/image'
import { useEffect } from 'react'

// swiper related imports
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// css
import styles from './clients.module.scss'

export default function Clients() {

	useEffect(() => {

		// this is needed for swiper
		register()

	}, [])

	const clients = [
		{ name: 'Cosco Shipping', image: '/img/clients/cosco.svg', },
		{ name: 'Maersk', image: '/img/clients/maersk.svg', },
		{ name: 'MSC', image: '/img/clients/msc.svg', },
		{ name: 'Evergreen', image: '/img/clients/evergreen.svg', },
		{ name: 'TCP', image: '/img/clients/tcp.svg', },
		{ name: 'Hapag Lloyd', image: '/img/clients/hapag-lloyd.svg', }
	]

	return (
		<section className={styles.clients}>
			<div className='container'>

				<div className={styles.top}>

					<h3 className='subtitle'>
						Nossos parceiros
					</h3>

					<div className={styles.flex}>

						<h2 className='text-bigger medium'>
							Marcas e companhias com  as quais já trabalhamos.
						</h2>

						<p>
							Colaboramos com marcas líderes e companhias inovadoras, consolidando parcerias duradouras e elevando padrões na importação e exportação.
						</p>

					</div>

				</div>

				<Swiper
					className={styles.slider}
					spaceBetween={10}
					slidesPerView={2}
					freeMode={true}
					mousewheel={{  
						forceToAxis: true
					}}
					autoplay={{ delay: 1500, disableOnInteraction: false }}
					speed={600}
					breakpoints={{
						575: {
							slidesPerView: 3
						}, 767: {
							slidesPerView: 4
						},992: {
							slidesPerView: 5
						}, 1601: {
							slidesPerView: 6
						}
					}}
				>
					{clients.map((item, i) => (
						<SwiperSlide key={i}>
							<div className={styles.block}>
								<Image
									alt={item.name}
									src={item.image}
									fill={true}
									sizes='
										(max-width: 575px) 33vw,
										(max-width: 992px) 25vw,
										20vw
									'
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

			</div>
		</section>
	)
}
