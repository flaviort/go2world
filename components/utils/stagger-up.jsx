import { useRef } from 'react'

// gsap related imports
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function StaggerUp(props) {
    
    const item = useRef(null)

	useGSAP(() => {
        const children = item.current.children

        gsap.set(children, {
            opacity: 0,
            y: '25vh'
        })

        ScrollTrigger.batch(children, {
            start: '-50% 100%',
            onEnter: elements => {
                gsap.to(elements, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.25,
                    duration: 1
                })
            },
            onLeaveBack: elements => {
                gsap.to(elements, {
                    opacity: 0,
                    y: '25vh',
                    stagger: 0.15,
                    duration: 1
                })
            }
        })
	})

    return (
        <div ref={item} {...props} data-stagger>
            {props.children}
        </div>
    )
}