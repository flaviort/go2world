import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import gsap from 'gsap'

// import necessary svgs
import UxSpinner from '@/assets/svg/ux/spinner.svg'

// css
import styles from './page-transition.module.scss'

export const PageTransitionAnimation = ({ href }) => {

    const router = useRouter();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const animationWrapper = document.getElementById('page-transition');
    
        if (animationWrapper && !hasAnimated) {

            const pageOut = gsap.timeline();
            const pageIn = gsap.timeline({ paused: true });

            // page OUT animation
            pageOut.to('#page-transition', {
                pointerEvents: 'all',
                duration: 0
            })

            pageOut.to('#page-transition .column', {
                yPercent: -100,
                stagger: -.1,
                onComplete: () => {
                    router.push(href); // navigate to the next page

                    // wait for the route change to happen before doing something
                    router.events.on('routeChangeComplete', () => {
                        window.scrollTo({ top: 0 }); // always scroll to the top of the page
                        pageIn.play(); // play the animation in
                    })
                }
            })

            pageOut.to('#page-transition .bg', {
                opacity: 1,
                duration: .5
            }, '=-.5')

            pageOut.to('#page-transition .spinner', {
                opacity: 1,
                duration: .5
            }, '=-.5')

            // page IN animation
            pageIn.to('#page-transition .column', {
                yPercent: 0,
                stagger: -.1,
                onComplete: () => {
                    setHasAnimated(true);           // restart the animation
                }
            })

            pageIn.to('#page-transition .bg', {
                opacity: 0,
                duration: .5
            }, '=-.75')

            pageIn.to('#page-transition .spinner', {
                opacity: 0,
                duration: .5
            }, '=-1')

            pageIn.to('#page-transition', {
                pointerEvents: 'none',
                duration: 0
            })

        }
    }, [href, router, hasAnimated]);
    
    return null
}

export default function PageTransition() {
    const nOfColumns = 5

    return (
        <div id='page-transition' className={styles.pageTransitionWrapper}>

            <div className={styles.pageTransition}>
                {Array(nOfColumns).fill().map((_, i) => (
                    <div className='column' key={i} />
                ))}
            </div>

            <div className={clsx(styles.bg, 'bg')} />

            <div className={clsx(styles.spinner, 'spinner')}>
                <UxSpinner />
            </div>

        </div>
    )
}