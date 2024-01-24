import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router';
import gsap from 'gsap'

// css
import styles from './page-transition.module.scss'

export default function PageTransition({ children }) {

    const bg = useRef(null)
    const router = useRouter()
    const nOfColumns = 5

    useEffect(() => {
        const handleRouteChange = () => {

            const tl = gsap.timeline()

            tl.to('.column', {
                yPercent: -100,
                stagger: -.1,
                onComplete: () => {
                    window.scrollTo({ top: 0 })
                }
            })

            tl.to(bg.current, {
                opacity: 1,
                duration: .5
            }, '=-.5')

            tl.to('.column', {
                yPercent: 0,
                stagger: -.1
            })

            tl.to(bg.current, {
                opacity: 0,
                duration: .5
            }, '=-.75')
        }

        router.events.on('beforeHistoryChange', handleRouteChange)

        return () => {
            router.events.off('beforeHistoryChange', handleRouteChange)
        }
    }, [router])

    return (
        <>

            <div className={styles.pageTransition}>
                {Array(nOfColumns).fill().map((_, i) => (
                    <div className='column' key={i} />
                ))}
            </div>

            <div className={styles.bg} ref={bg} />

            {children}

        </>
    )
}