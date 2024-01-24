import clsx from 'clsx'

// components
import PageTransition from '@/components/page-transition'
import SeoContainer from '@/components/utils/seo-container'
import MagneticButton from '@/components/utils/magnetic-button'
import { Form, Input, Textarea } from '@/components/form'
import Faq from '@/components/faq'
import Clients from '@/components/clients'

// import necessary svgs
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'

// css
import styles from './quote.module.scss'

export default function Quote() {

    return (
		<PageTransition>
			<SeoContainer
				pageTitle='Solicite uma cotação'
				pageDescription='Simples, rápido e eficiente. Preencha nosso formulário e receba uma proposta de orçamento.'
			/>

			<main className={styles.quote}>

				<section className={styles.topFolder}>
					<div className='container'>

						<div className={styles.topInfos}>

							<h3 className='subtitle'>
								Solicite uma cotação
							</h3>

							<div className={styles.flex}>

								<h1 className='text-bigger-2 medium'>
									Simples, rápido e <br />
									eficiente<span className='blue'>.</span>
								</h1>

								<p>
									Preencha o formulário abaixo com as informações necessárias para a sua solicitação. Assim que recebermos, elaboraremos uma proposta de orçamento e a enviaremos para o seu e-mail.
								</p>

							</div>

						</div>

						<Form className={styles.form}>
							<div className='row'>

								<div className='col-md-6 col-lg-4'>
									<Input
										label='Nome'
										type='text'
										id='quote-name'
										placeholder='Nome completo'
										required
										maxLength={100}
									/>
								</div>

								<div className='col-md-6 col-lg-4'>
									<Input
										label='Email'
										type='email'
										id='quote-email'
										placeholder='email@email.com'
										required
										maxLength={75}
									/>
								</div>

								<div className='col-md-6 col-lg-4'>
									<Input
										label='Telefone'
										type='text'
										id='quote-phone'
										placeholder='+00 (00) 0000-0000'
										maxLength={50}
									/>
								</div>

								<div className='col-md-6 col-lg-4'>
									<Input
										label='Empresa'
										type='text'
										id='quote-company'
										placeholder='Digite aqui'
										maxLength={100}
									/>
								</div>

								<div className='col-lg-4'>
									<Input
										label='Produto'
										type='text'
										id='quote-product'
										placeholder='Descreva qual a carga'
										required
										maxLength={100}
									/>
								</div>

								<div className='col-md-6 col-lg-4'>
									<Input
										label='Tipo de transporte'
										type='text'
										id='quote-transport'
										placeholder='Frete marítimo, aéreo...'
										required
										maxLength={100}
									/>
								</div>

								<div className='col-md-6'>
									<Input
										label='Origem'
										type='text'
										id='quote-origin'
										placeholder='Cidade / País'
										required
										maxLength={100}
									/>
								</div>

								<div className='col-md-6'>
									<Input
										label='Destino'
										type='text'
										id='quote-destiny'
										placeholder='Cidade / País'
										required
										maxLength={100}
									/>
								</div>

								<div className='col-md-6 col-lg-4'>
									<Input
										label='Volume'
										type='text'
										id='quote-volume'
										placeholder='Peso aproximado'
										maxLength={100}
									/>
								</div>

								<div className='col-md-6 col-lg-4'>
									<Input
										label='Dimensões'
										type='text'
										id='quote-dimensions'
										placeholder='Largura x Altura x Profundidade'
										maxLength={150}
									/>
								</div>

								<div className='col-md-6 col-lg-4'>
									<Input
										label='Quantidade'
										type='text'
										id='quote-quantity'
										placeholder='00'
										maxLength={100}
									/>
								</div>

							</div>

							<Textarea
								label='Mais detalhes'
								id='quote-infos'
								placeholder='Digite aqui sua mensagem'
								maxLength={2000}
							/>

							<div className={styles.lastLine}>
								<MagneticButton>
									<button type='submit' className={clsx(styles.sendButton, 'blue-button text-small')}>
										<span>Solicitar cotação</span>
										<UxArrowRight />
									</button>
								</MagneticButton>
							</div>

						</Form>

					</div>
				</section>

				<Faq />

				<Clients />

			</main>
		</PageTransition>
    )
}