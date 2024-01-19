import Link from 'next/link'

// css
import styles from './about.module.scss'

export default function About() {
    return (
		<main className={styles.about}>
			<section style={{
				'minHeight': '80vh'
			}}>
				About
			</section>
		</main>
    )
}