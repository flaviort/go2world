import Image from 'next/image'
import Link from 'next/link'

// import routes
import routes from '@/utils/routes'
import { getPostIdList, getAllServices, getIconComponent } from '@/utils/services'

// components
import SEOContainer from '@/components/utils/seo-container'
import MagneticButton from '@/components/utils/magnetic-button'
import ScrollingImage from '@/components/utils/scrolling-image'
import ServiceBlock from '@/components/service-block'
import CtaBig from '@/components/cta-big'
import Clients from '@/components/clients'

// import necessary svgs
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'

// css
import styles from './home.module.scss'

export default function Home() {
	const allServices = getAllServices()
	const serviceKeys = Object.keys(allServices)

    return (
		<>
			<SEOContainer
				title='Início'
				description='A Go2World conecta seu negócio ao mundo com eficiência na cadeia de suprimentos. Escolha a excelência, impulsione seu negócio!'
			/>

			<main className={styles.home}>

				<section className={styles.services}>
					<div className='container'>

						<div className={styles.top}>

							<h3 className='subtitle'>
								Nossos serviços
							</h3>

							<div className={styles.flex}>

								<h2 className='text-bigger medium'>
									Conheça todos os <br />
									nossos serviços.
								</h2>

								<MagneticButton>
									<Link href={routes.services} className='hollow-button text-small'>
										<span>Nossos serviços</span>
									</Link>
								</MagneticButton>

							</div>

						</div>

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

					</div>
				</section>

				<CtaBig />

				<section className={styles.why}>
					<div className='container'>
						<div className='row'>

							<div className='col-md-6'>

								<h3 className='subtitle'>
									Porque nos escolher
								</h3>

								<h2 className='text-bigger medium'>
									Insuperável Compromisso com a Qualidade.
								</h2>

								<p>
									Em um mercado de qualidade crucial, somos incontestáveis. Nossa busca incessante pela excelência redefine o frete marítimo, superando expectativas com serviço excepcional.
								</p>

								<div className={styles.imageWrapper + ' ' + styles.firstImage}>
									<ScrollingImage>
										<Image
											alt='Vista aérea deslumbrante: Navio cargueiro repleto de containers'
											src='/img/ship-top-view.jpg'
											fill={true}
											sizes='
												(max-width: 767px) 100vw,
												50vw
											'
										/>
									</ScrollingImage>
								</div>

							</div>

							<div className='col-md-6'>

								<div className={styles.imageWrapper + ' ' + styles.secondImage}>
									<ScrollingImage>
										<Image
											alt='Operário sorridente manuseando containers'
											src='/img/worker-smiling.jpg'
											fill={true}
											sizes='
												(max-width: 767px) 100vw,
												50vw
											'
										/>
									</ScrollingImage>
								</div>

								<p>
									Garantimos não apenas eficiência logística, mas uma abordagem dedicada a cada detalhe. Cada embarque reflete nossa promessa de qualidade inigualável, proporcionando tranquilidade aos nossos clientes. Opte por uma excelência que não pode ser superada.
								</p>

							</div>

						</div>
					</div>
				</section>

				<Clients />

			</main>
		</>
    )
}