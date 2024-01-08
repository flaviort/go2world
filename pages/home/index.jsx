import Image from 'next/image'

// components
import SEOContainer from '@/components/utils/seo-container'
import Clients from '@/components/clients'

// css
import styles from './home.module.scss'

export default function Home() {
    return (
		<>
			<SEOContainer
				title='Go2World'
				description='A Go2World conecta seu negócio ao mundo com eficiência na cadeia de suprimentos. Escolha a excelência, impulsione seu negócio!'
			/>

			<main className={styles.home}>

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

								<div className={styles.imageWrapper}>
									<Image
										alt='Vista aérea deslumbrante: Navio cargueiro repleto de containers'
										src='/img/ship-top-view.jpg'
										fill={true}
										sizes='
											(max-width: 767px) 100vw,
											50vw
										'
									/>
								</div>

							</div>

							<div className='col-md-6'>

								<div className={styles.imageWrapper}>
									<Image
										alt='Operário sorridente manuseando containers'
										src='/img/worker-smiling.jpg'
										fill={true}
										sizes='
											(max-width: 767px) 100vw,
											50vw
										'
									/>
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