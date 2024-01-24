import Link from 'next/link'
import AnimatedLink from '@/components/utils/animated-link'

// css
import styles from './404.module.scss'

export default function FourOhFour() {
    return (
		<>
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