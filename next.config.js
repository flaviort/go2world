/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	output: 'export',

	// Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
	// trailingSlash: true,
	
	// Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
	// skipTrailingSlashRedirect: true,
	
	// Optional: Change the output directory `out` -> `dist`
	// distDir: 'dist',
}

module.exports = nextConfig

const path = require('path')

module.exports = {
	//assetPrefix: './',
	sassOptions: {
		includePaths: [path.join(__dirname, 'assets/scss')],
		prependData: `@import 'atoms/variables.scss';`
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	//basePath: process.env.PUBLIC_URL,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: {
				loader: '@svgr/webpack',
				options: {
					svgoConfig: {
						plugins: [{
							name: 'removeViewBox',
							active: false
						}]
					}
				}
			}
		})

		return config
	}
}