import { useState } from 'react'
import clsx from 'clsx'

// components
import SeoContainer from '@/components/utils/seo-container'
import MagneticButton from '@/components/utils/magnetic-button'
import { Form, Input, Select, Textarea, InputHidden } from '@/components/form'
import Faq from '@/components/faq'
import Clients from '@/components/clients'

// import necessary svgs
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'
import UxSpinner from '@/assets/svg/ux/spinner.svg'

// css
import styles from './quote.module.scss'

export default function Quote() {

	const [transporte, setTransporte] = useState('')
	const [modal, setModal] = useState('Full Container')

    return (
		<>
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

							<InputHidden
								label='Página'
								value='Cotação'
							/>

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

								<div className='col-md-6 col-lg-4'>
									<Input
										label='Produto'
										type='text'
										id='quote-product'
										placeholder='Carga geral, metal, alimentos...'
										required
										maxLength={100}
									/>
								</div>

								<div className='col-md-6 col-lg-4'>
									<Select
										label='Tipo de transporte'
										id='quote-transport'
										placeholder='Selecione o tipo de frete'
										required
										value={transporte}
          								onChange={(e) => setTransporte(e.target.value)}
										defaultValue=''
									>
										<option value='' disabled>Selecione</option>
										<option value='Frete Aéreo'>Frete Aéreo</option>
										<option value='Frete Marítimo'>Frete Marítimo</option>
										<option value='Frete Rodoviário'>Frete Rodoviário</option>
										<option value='Outros'>Outros</option>
									</Select>
								</div>

								{ transporte === 'Frete Marítimo' && (
									<>

										<div className='col-md-6'>
											<Select
												label='Modal'
												id='quote-modal'
												defaultValue='Full Container'
												value={modal}
          										onChange={(e) => setModal(e.target.value)}
												required
											>
												<option value='Full Container'>Full Container</option>
												<option value='LCL'>LCL</option>
											</Select>
										</div>

										{ modal === 'Full Container' && (
											<div className='col-md-6'>
												<Input
													label='Tipo de Container'
													type='text'
													id='quote-container'
													placeholder='20NOR, 40HC, 40Dry...'
													required
													maxLength={100}
												/>
											</div>
										)}

										{ modal === 'LCL' && (
											<div className='col-md-6'>
												<Input
													label='Carga Consolidada'
													type='text'
													id='quote-cargo'
													placeholder='Metros cúbicos, peso, etc'
													required
													maxLength={150}
												/>
											</div>
										)}

									</>
								)}

								<div className='col-md-6 col-lg-4'>
									<Input
										label='Incoterms'
										type='text'
										id='quote-incoterms'
										placeholder='EXW, CIF, FOB...'
										maxLength={100}
									/>
								</div>

								<div className='col-md-6 col-lg-4'>
									<Input
										label='Origem'
										type='text'
										id='quote-from'
										placeholder='Cidade / País'
										required
										maxLength={100}
									/>
								</div>

								<div className='col-md-6 col-lg-4'>
									<Input
										label='Destino'
										type='text'
										id='quote-to'
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
								label='Mensagem'
								id='quote-infos'
								placeholder='Digite aqui sua mensagem'
								maxLength={2000}
							/>

							<div className={styles.lastLine}>
								<MagneticButton>
									<button type='submit' className={clsx(styles.sendButton, 'blue-button text-small')}>
										
										<span>Solicitar cotação</span>
										<UxArrowRight />

										<span className='spinner'>
											<UxSpinner />
										</span>

									</button>
								</MagneticButton>
							</div>

						</Form>

					</div>
				</section>

				<Faq />

				<Clients />

			</main>
		</>
    )
}