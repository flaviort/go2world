import Head from 'next/head'
import { useRouter } from 'next/router'

export default function SEOContainer({ title, description }) {

    const router = useRouter()
    const { asPath } = useRouter()
    const image = router.basePath + '/img/og-image.jpg'
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''

    const urlAddress = `${origin}${asPath}`

    const siteName = 'Go2World'

    return (
        <Head>
            <title>{siteName + ' | ' + title}</title>
            <meta name='description' content={description} />

            <meta name='Robots' content='all' />

            {/* facebook */}
            <meta property='og:locale' content='en-US' />
            <meta property='og:type' content='website' />
            <meta property='og:image:width' content='1200' />
            <meta property='og:image:height' content='630' />
            <meta property='og:title' content={title + ' | ' + siteName} />
            <meta property='og:description' content={description} />
            <meta property='og:url' content={urlAddress} />
            <meta property='og:site_name' content={siteName} />
            <meta property='og:image:secure_url' content={image} />

            {/* twitter */}
            <meta name='twitter:title' content={title + ' | ' + siteName} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:url' content={urlAddress} />
            <meta name='twitter:image' content={image} />
            <meta name='twitter:card' content='summary' />

        </Head>
    )
}