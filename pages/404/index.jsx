import Link from 'next/link'

// components
import SEOContainer from '@/components/utils/seo-container'

// css
import styles from './404.module.scss'

export default function FourOhFour() {
    return (
		<>
			<SEOContainer
				title='404'
				description=""
			/>

			<main className={styles.fourOhFour}>
				<section style={{
					'minHeight': '80vh'
				}}>
					404
				</section>
			</main>
		</>
    )
}