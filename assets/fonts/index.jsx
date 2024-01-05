import { Poppins } from 'next/font/google'
 
export const poppins = Poppins({
	weight: ['400', '500', '600'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins'
})