import { useRouter } from 'next/router'
import { CreateClient } from '@prismicio/client'

// utils
import { getIconComponent, getPostDetails, getPostIdList } from '@/utils/services'

// components


// css
import styles from './single.module.scss'

export default function Service({ allServices }){
	const { title, smallDesc } = allServices
	const router = useRouter()
	
    return (
		<>
			<main className={styles.service}>

				<h2>
					title: {title}<br />
					desc: {smallDesc}<br />
					icon: {getIconComponent(router.query.id)}
				</h2>

			</main>
		</>
    )
}

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

/*
export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })
    const settings = await client.getSingle('settings')
	const page = await client.getSingle('services')

    return {
        props: {
			settings,
			page
		}
    }
}
*/