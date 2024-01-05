import Link from 'next/link'

export default function SmoothScrollLink({ href, children, className }) {
    const smoothScroll = (e) => {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            })
        }
    }

    return (
        <Link href={href} className={className} onClick={smoothScroll}>
            {children}
        </Link>
    )
}