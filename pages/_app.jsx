import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import TopMenu from '../components/top-menu'
import FsMenu from '../components/fs-menu'
import Footer from '../components/footer'

import '../assets/css/normalize.min.css'
import '../assets/css/bootstrap-grid.css'
import '../assets/scss/main.scss'

// google fonts
import { poppins } from '../assets/fonts/index'

export default function App({ Component, pageProps, router }) {

	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	})

	return (
		<div className={poppins.className}>

			<Head>
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
				<meta name='format-detection' content='telephone=no' />
				<meta name='author' content='Senz Design' />
				<link rel='shortcut icon' href='./img/favicon.png' />
			</Head>

			<RecoilRoot>
				<ReactLenis root>

					<TopMenu />

					<FsMenu />

					<div key={router.route}>
						<Component {...pageProps} />
					</div>

					<Footer />

				</ReactLenis>
			</RecoilRoot>

		</div>
	)
}