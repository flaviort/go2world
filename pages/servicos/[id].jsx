import { useRouter } from 'next/router'

// utils
import { getIconComponent, getPostDetails, getPostIdList } from '@/utils/services'

// css
import styles from './single.module.scss'

export async function getStaticPaths() {
	const paths = await getPostIdList()
	
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const { title, smallDesc } = await getPostDetails(params.id)

	return {
		props: {
			allServices: {
                title,
                smallDesc
            }
		}
	}
}

export default function Service({ allServices }){
	const { title, smallDesc } = allServices
	const router = useRouter()
	
    return (
		<main className={styles.service}>

			<h2>
				title: {title}<br />
				desc: {smallDesc}<br />
				icon: {getIconComponent(router.query.id)}
			</h2>

		</main>
    )
}