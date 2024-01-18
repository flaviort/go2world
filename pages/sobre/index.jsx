import Link from 'next/link'

// components
import SEOContainer from '@/components/utils/seo-container'

// css
import styles from './about.module.scss'

export default function About() {
    return (
		<>
			<SEOContainer
				title='Sobre'
				description=""
			/>

			<main className={styles.about}>
				<section style={{
					'minHeight': '80vh'
				}}>
					About
				</section>
			</main>
		</>
    )
}