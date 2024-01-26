import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'

// import routes
import routes from '@/utils/routes'

// components
import MagneticButton from '@/components/utils/magnetic-button'
import ScrollingImage from '@/components/utils/scrolling-image'

// css
import styles from './location.module.scss'

export default function Location() {
	return (
		<section className={styles.location}>
			<div className={clsx(styles.container, 'container')}>

				<div className={styles.image}>
					<ScrollingImage>
						<Image
							alt='Foto de prédios'
							src='/img/buildings.webp'
							fill={true}
							sizes='100vw'
						/>
					</ScrollingImage>
				</div>

				<div className={styles.blackBox}>

					<h3 className='subtitle'>
						Localização
					</h3>

					<p className='text-bigger medium'>
						Venha nos visitar<span className='blue'>.</span>
					</p>

					<p className={styles.desc}>
						Operamos em locais estratégicos, garantindo eficiência logística e conectividade para facilitar o fluxo de mercadorias em toda a nossa rede de serviços.
					</p>

					<ul>

						<li>
							<div>
								<b>Curitiba / Paraná</b><br />
								<MagneticButton>
									<Link href={routes.addressCuritibaLink} className='hover-underline' target='_blank'>
										{routes.addressCuritiba}
									</Link>
								</MagneticButton>
								<MagneticButton>
									<Link href={'tel:' + routes.phoneCuritiba.replace(/[^0-9]/g, '')} className='hover-underline'>
										{routes.phoneCuritiba}
									</Link>
								</MagneticButton>
							</div>
						</li>

						<li>
							<div>
								<b>São Paulo / São Paulo</b><br />
								<MagneticButton>
									<Link href={routes.addressSaoPauloLink} className='hover-underline' target='_blank'>
										{routes.addressSaoPaulo}
									</Link>
								</MagneticButton>
								<MagneticButton>
									<Link href={'tel:' + routes.phoneSaoPaulo.replace(/[^0-9]/g, '')} className='hover-underline'>
										{routes.phoneSaoPaulo}
									</Link>
								</MagneticButton>
							</div>
						</li>

					</ul>

				</div>

			</div>
		</section>
	)
}
