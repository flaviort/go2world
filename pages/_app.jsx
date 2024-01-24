import { RecoilRoot } from 'recoil'
import SmoothScrolling from '@/components/utils/smooth-scrolling'
import { AnimatePresence } from 'framer-motion'

// components
import TopMenu from '@/components/top-menu'
import FsMenu from '@/components/fs-menu'
import Footer from '@/components/footer'

// css
import '@/assets/css/normalize.min.css'
import '@/assets/css/bootstrap-grid.css'
import '@/assets/scss/main.scss'

// google fonts
import { poppins } from '@/assets/fonts/index'

export default function App({ Component, pageProps, router }) {
	return (
		<div className={poppins.className}>
			<RecoilRoot>

				<FsMenu />

				<SmoothScrolling>

					<TopMenu />

					<AnimatePresence
						mode='wait'
						initial={false}
						onExitComplete={() => {
							if (typeof window !== 'undefined') {
							  	window.scrollTo({ top: 0 })
							}
						}}
					>
						
						<Component key={router.route} {...pageProps} />

					</AnimatePresence>

					<Footer />

				</SmoothScrolling>

			</RecoilRoot>
		</div>
	)
}