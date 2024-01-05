// components
import SEOContainer from '@/components/utils/seo-container'

// css
import styles from './home.module.scss'

export default function Home() {
    return (
		<>
			<SEOContainer
				title='Go2World'
				description="A Go2World conecta seu negócio ao mundo com eficiência na cadeia de suprimentos. Escolha a excelência, impulsione seu negócio!"
			/>

			<main className={styles.home}>

			</main>
		</>
    )
}