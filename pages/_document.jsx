import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
 
export default function Document() {
    return (
        <Html lang='pt-BR'>
          	<Head>
			  	
				<Script
					strategy='lazyOnload'
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}
				/>

				<Script id="gtag-script" strategy='lazyOnload'>
    				{`
        				window.dataLayer = window.dataLayer || [];
        				function gtag() {
            				dataLayer.push(arguments);
        				}
        				gtag('js', new Date());
        				gtag('config', '${process.env.GTAG}', {
            				page_path: window.location.pathname,
        				});
    				`}
				</Script>
				
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
    )
}