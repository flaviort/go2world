import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'

// import routes / services / utils
import routes from '@/utils/routes'
import { whiteMenuState } from '@/utils/atoms'

// components
import AnimatedLink from '@/components/utils/animated-link'
import SeoContainer from '@/components/utils/seo-container'
import MagneticButton from '@/components/utils/magnetic-button'

// import necessary svgs
import Delivery from '@/assets/svg/delivery.svg'
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'

// css
import styles from './404.module.scss'

export default function FourOhFour() {

	const [whiteMenu, setWhiteMenu] = useRecoilState(whiteMenuState)

	const router = useRouter()

	useEffect(() => {
		if ( router.pathname.startsWith('/servicos/') ) {
			setWhiteMenu(false)
		} else {
			setWhiteMenu(true)
		}
	}, [router.pathname, setWhiteMenu])

    return (
		<>

			<SeoContainer
				pageTitle='Págnia não encontrada'
				pageDescription='Oops! Procuramos por toda parte mas infelizmente não conseguimos encontrar a página que você procura.'
			/>

			<main className={styles.fourOhFour}>
				<section className={styles.main}>
					<div className='container'>
						<div className={styles.flex}>

							<h3 className='subtitle'>
								Erro 404
							</h3>

							<div className={styles.illustration}>
								<Delivery />
							</div>

							<h1 className='text-bigger-2 medium'>
								Página não <br />
								encontrada<span className='blue'>.</span>
							</h1>

							<p className={styles.desc}>
								Oops! Procuramos por toda parte mas infelizmente não conseguimos encontrar a página que você procura.
							</p>

							<MagneticButton>
								<AnimatedLink
									href={routes.home}
									className='blue-button text-small'
								>
									<span>Voltar ao início</span>
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