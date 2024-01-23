import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { createClient } from '@/prismicio'

// import routes / services
import routes from '@/utils/routes'

// components
import SeoContainer from '@/components/utils/seo-container'
import MagneticButton from '@/components/utils/magnetic-button'
import { Form, Input, Textarea } from '@/components/form'
import Location from '@/components/location'
import Faq from '@/components/faq'
import Clients from '@/components/clients'

// import necessary svgs
import UxEmail from '@/assets/svg/ux/envelope.svg'
import UxPhone from '@/assets/svg/ux/phone.svg'
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'

// css
import styles from './contact.module.scss'

export default function Contact() {
    return (
		<>
			<SeoContainer
				pageTitle='Entre em contato'
				pageDescription='Entre em contato conosco para obter soluções personalizadas e eficientes. Estamos prontos para tornar sua experiência logística mais simples e confiável.'
			/>

			<main className={styles.contact}>

				<section className={styles.topFolder}>
					<div className='container relative z2'>
						<div className='row'>

							<div className={clsx(styles.left, 'col-md-6')}>

								<h3 className='subtitle'>
									Entre em contato
								</h3>

								<h1 className='text-bigger-2 medium'>
									Contato<span className='blue'>.</span>
								</h1>

								<p className={styles.desc}>
									Entre em contato conosco para obter soluções personalizadas e eficientes. Estamos prontos para tornar sua experiência logística mais simples e confiável.
								</p>

								<ul>

									<li>

										<div className={styles.icon}>
											<UxEmail />
										</div>

										<div>
											Email

											<MagneticButton>
												<Link href={'mailto:' + routes.emailLuis} className='hover-underline'>
													<b>{routes.emailLuis}</b>
												</Link>
											</MagneticButton>

											<MagneticButton>
												<Link href={'mailto:' + routes.emailFlavia} className='hover-underline'>
													<b>{routes.emailFlavia}</b>
												</Link>
											</MagneticButton>

										</div>

									</li>

									<li>

										<div className={styles.icon}>
											<UxPhone />
										</div>

										<div>
											Telefone

											<MagneticButton>
												<Link href={routes.whatsappLuis} target='_blank' className='hover-underline'>
													<b>{routes.phoneLuis}</b>
												</Link>
											</MagneticButton>

											<MagneticButton>
												<Link href={routes.whatsappFlavia} target='_blank' className='hover-underline'>
													<b>{routes.phoneFlavia}</b>
												</Link>
											</MagneticButton>

										</div>

									</li>

								</ul>
								
							</div>

							<div className={clsx(styles.right, 'col-md-6')}>
								<div className='relative z2'>
									<Form className={styles.form}>

										<Input
											dark
											label='Nome'
											type='text'
											id='name'
											placeholder='Nome completo'
											required
											maxLength={100}
										/>

										<Input
											dark
											label='Email'
											type='email'
											id='email'
											placeholder='email@email.com'
											required
											maxLength={100}
										/>

										<Input
											dark
											label='Telefone'
											type='text'
											id='phone'
											placeholder='+00 (00) 0000-0000'
											maxLength={50}
										/>

										<Textarea
											dark
											label='Mensagem'
											id='message'
											placeholder='Digite aqui sua mensagem'
											required
											maxLength={2000}
										/>

										<MagneticButton>
											<button type='submit' className='blue-button text-small'>
												<span>Enviar</span>
												<UxArrowRight />
											</button>
										</MagneticButton>

									</Form>
								</div>
							</div>

						</div>
					</div>
				</section>

				<Location />

				<Faq />

				<Clients />

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