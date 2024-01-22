import { useEffect, useRef } from 'react'

// gsap related imports
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Counter({number}) {

    const item = useRef(null)

    useEffect(() => {
        if (item.current) {
            // animated counter
            gsap.utils.toArray(item.current).forEach(item => {
                gsap.from(item, {
                    textContent: '0',
                    duration: 3,
                    ease: 'power2.inOut',
                    modifiers: {
                        textContent: value => formatNumber(value, 0)
                    },
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                })
            })

            // format the number in US standard
            function formatNumber(value, decimals) {
                return Math.floor(+value)
            }
        }
	}, [])

    return (
        <div ref={item}>
            {number}
        </div>
    )
}