// components
import MagneticButton from '@/components/utils/magnetic-button'
import AnimatedLink from '@/components/utils/animated-link'

// import necessary svgs
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'

// css
import styles from './service-block.module.scss'

export default function ServiceBlock({ serviceTitle, serviceSmallDesc, serviceLink, serviceIcon, onClick }) {
	return (
		<MagneticButton>
			<AnimatedLink
				href={serviceLink}
				className={styles.serviceBlock}
				onClick={onClick}
			>
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
			</AnimatedLink>
		</MagneticButton>
	)
}
