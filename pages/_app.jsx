import { RecoilRoot } from 'recoil'
import SmoothScrolling from '@/components/utils/smooth-scrolling'

// components
import TopMenu from '@/components/top-menu'
import FsMenu from '@/components/fs-menu'
import Footer from '@/components/footer'

// css
import '@/assets/css/normalize.min.css'
import '@/assets/css/bootstrap-grid.css'
import '@/assets/scss/main.scss'

// google fonts
import { poppins } from '../assets/fonts/index'

export default function App({ Component, pageProps, router }) {
	return (
		<div className={poppins.className}>
			<RecoilRoot>
				<SmoothScrolling>

					<TopMenu />

					<FsMenu />

					<div key={router.route}>
						<Component {...pageProps} />
					</div>

					<Footer />

				</SmoothScrolling>
			</RecoilRoot>
		</div>
	)
}