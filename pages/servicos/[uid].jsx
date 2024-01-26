import { createClient } from '@/prismicio'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

// gsap related imports
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// import routes / services
import routes from '@/utils/routes'
import { getAllServices, getIconComponent } from '@/utils/services'

// components
import SeoContainer from '@/components/utils/seo-container'
import ScrollingImage from '@/components/utils/scrolling-image'
import MagneticButton from '@/components/utils/magnetic-button'
import AnimatedLink from '@/components/utils/animated-link'
import { Form, Input, Textarea } from '@/components/form'
import ServiceBlock from '@/components/service-block'

// import necessary svgs
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'

// css
import styles from './single.module.scss'

export default function Service({ page }) {

  	console.log(page)

	const titleDesc = useRef(null)
	const content = useRef(null)
	const slidingForm = useRef(null)

	useGSAP(() => {
		if (window.innerWidth >= 767) {

			// get the height of the refs
			const titleDescHeight = titleDesc.current.offsetHeight
			const contentHeight = content.current.offsetHeight
			const slidingFormHeight = slidingForm.current.offsetHeight

			// get the root (html) element
			var root = document.documentElement

			// get the value of the --section-space variable
			var sectionSpaceInRem = parseFloat(getComputedStyle(root).getPropertyValue('--section-space'))

			// get the font size of the root element in pixels
			var fontSizeInPixels = parseFloat(getComputedStyle(root).fontSize)

			// convert the value from rem to pixels
			var sectionSpace = sectionSpaceInRem * fontSizeInPixels

			// this hacky thing represents the space between the title of the page and the title (Sobre o serviço)
			const negativeMargin = sectionSpace * 3 * -1 - titleDescHeight

			// this moves the sliding form to the same height as the title of the page
			gsap.set(slidingForm.current, {
				y: negativeMargin
			})

			// finally we calculate everything to make the scrolltrigger effect
			// this calculates the space to make the bottom part of the sliding form unpin itself when it hit the bottom part of the content
			const endPosition = (contentHeight - slidingFormHeight - negativeMargin)

			// and here´s the scrolltrigger effect itself
			ScrollTrigger.create({
				trigger: slidingForm.current,
				start: 'top top',
				end: `+=${endPosition}`,
				pin: true,
				markers: true
			})
		}
	})

  	return (
		<>
			<SeoContainer
				pageTitle={page.data.meta_title}
				pageDescription={page.data.meta_description}
			/>

			<main className={styles.service}>

				<section className={styles.banner}>

					<ScrollingImage>
						<PrismicNextImage
							field={page.data.main_image}
							className={clsx(styles.bgImage, 'cover')}
							fill={true}
							priority={true}
						/>
					</ScrollingImage>

					<div className='container relative z2'>

						<div className={styles.icon}>
							{getIconComponent(page.uid)}
						</div>

						<div ref={titleDesc}>

							<h1 className='text-bigger-2'>
								<span className='medium'>
									{page.data.title}<span className='blue'>.</span>
								</span>
							</h1>

							<p className={styles.smallDesc}>
								{page.data.small_description}
							</p>

						</div>

					</div>
					
				</section>

				<section className={styles.middle}>
					<div className='relative container' ref={content}>

						<h2 className='text-bigger-2 medium'>
							Sobre o serviço
						</h2>

						<div className={styles.content}>
							<PrismicRichText field={page.data.content} />
						</div>
						
						<div className={styles.slidingForm} ref={slidingForm}>
							<Form className={styles.form}>

								<Input
									dark={true}
									label='Nome'
									type='text'
									id='service-name'
									placeholder='Nome completo'
									required
									maxLength={100}
								/>

								<Input
									dark={true}
									label='Email'
									type='email'
									id='service-email'
									placeholder='email@email.com'
									required
									maxLength={75}
								/>

								<Input
									dark={true}
									label='Telefone'
									type='text'
									id='service-phone'
									placeholder='+00 (00) 0000-0000'
									maxLength={50}
								/>

								<Textarea
									dark={true}
									label='Mais detalhes'
									id='service-infos'
									placeholder='Digite aqui sua mensagem'
									maxLength={2000}
								/>

								<MagneticButton>
									<button type='submit' className={clsx(styles.sendButton, 'blue-button text-small')}>
										<span>Enviar</span>
										<UxArrowRight />
									</button>
								</MagneticButton>

							</Form>
						</div>

					</div>
				</section>

				<section className={styles.alsoLike}>
					<div className='container'>

						<div className={styles.top}>

							<h2 className='text-bigger medium'>
								Mais serviços<span className='blue'>.</span>
							</h2>

							<MagneticButton>
								<AnimatedLink href={routes.services} className='hollow-button text-small'>
									<span>Nossos serviços</span>
									<UxArrowRight />
								</AnimatedLink>
							</MagneticButton>

						</div>

					</div>
				</section>

			</main>
		</>
  	)
}

export async function getStaticProps({ params }) {
  	const client = createClient()

  	try {
    	const page = await client.getByUID('service', params.uid)

    	return {
      		props: {
        		page
      		}
    	}
  	} catch (error) {
    	return {
			notFound: true
    	}
  	}
}

export async function getStaticPaths() {
  	const client = createClient()

  	try {
    	const pages = await client.getAllByType('service')

    	return {
      		paths: pages.map((page) => ({
        		params: {
          			uid: page.uid
        		}
      		})),
      		fallback: true
    	}
  	} catch (error) {
    	return {
      		paths: [],
      		fallback: true
    	}
  	}
}