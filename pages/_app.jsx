import { RecoilRoot } from 'recoil'

// components
import SmoothScrolling from '@/components/utils/smooth-scrolling'
import PageTransition from '@/components/page-transition'
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

				<PageTransition />

				<FsMenu />

				<TopMenu />

				<SmoothScrolling>

					<Component key={router.route} {...pageProps} />

					<Footer />

				</SmoothScrolling>

			</RecoilRoot>
		</div>
	)
}