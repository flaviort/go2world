import Link from 'next/link'

// components
import MagneticButton from '@/components/utils/magnetic-button'

// import necessary svgs
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'

// css
import styles from './service-block.module.scss'

export default function ServiceBlock({ serviceTitle, serviceSmallDesc, serviceLink, serviceIcon }) {
	return (
		<MagneticButton>
			<Link href={serviceLink} className={styles.serviceBlock}>
				<div className={styles.wrapper}>

					<div className={styles.icon}>
						{serviceIcon}
					</div>

					<h3 className='text-medium-big medium'>
						{serviceTitle}
					</h3>

					<p>
						{serviceSmallDesc}
					</p>

					<div className={styles.arrow}>
						<UxArrowRight />
					</div>
					
				</div>
			</Link>
		</MagneticButton>
	)
}
