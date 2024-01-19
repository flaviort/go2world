import { useState, useEffect } from 'react'
import { createClient } from '@/prismicio'

export default function Test() {

	const [page, setPage] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const client = createClient()
				const pageData = await client.getSingle('settings')
				setPage(pageData.data)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		if (page) {
		  console.log(page?.site_tittle);
		}
	}, [page])
	
	return (
		<h2>
			{page && page.site_tittle}
		</h2>
	)
}

