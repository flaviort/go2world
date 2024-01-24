import Link from 'next/link'

// components
import PageTransition from '@/components/utils/page-transition'

// css
import styles from './404.module.scss'

export default function FourOhFour() {
    return (
		<PageTransition>
			<main className={styles.fourOhFour}>
				<section style={{
					'minHeight': '80vh'
				}}>
					404
				</section>
			</main>
		</PageTransition>
    )
}