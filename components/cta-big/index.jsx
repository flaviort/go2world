import Image from 'next/image'
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

// import necessary svgs
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'

// css
import styles from './cta-big.module.scss'

export default function CtaBig(props) {

	const container = useRef(null)
	const blueBox = useRef(null)

	useEffect(() => {
        if (container.current) {
            const item = container.current

			gsap.from(item, {
				y: 200,
				scrollTrigger: {
					trigger: blueBox.current,
					end: 'bottom top',
					scrub: 3
				}
			})
        }
	}, [])

	return (
		<section className={styles.ctaBig + ' ' + props.className}>
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

					<div className={styles.wrapper}>

						<h2 className='text-bigger medium'>
							Faça uma cotação <br />
							hoje mesmo.
						</h2>

						<p>
							Descubra como nossas soluções logísticas personalizadas podem impulsionar o sucesso do seu negócio. Agilidade, eficiência e confiabilidade estão a um clique de distância!
						</p>

						<MagneticButton>
							<Link href={routes.quote} className='white-button text-small'>
								<span>Solicite uma cotação</span>
								<UxArrowRight />
							</Link>
						</MagneticButton>

					</div>

				</div>
			</div>
		</section>
	)
}
