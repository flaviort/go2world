// css
import styles from './page-transition.module.scss'

export default function PageTransition({ children }) {

    const anim = (variants, custom) => {
        return {
            initial: 'initial',
            animate: 'enter',
            exit: 'exit',
            variants,
            custom
        }
    }

    const expand = {
        initial: {
            top: 0
        },
        enter: (i) => ({
            top: '100%',
            transition: {
                duration: .4,
                delay: .05 * i
            },
            transitionEnd: {
                height: 0,
                top: 0
            }
        }),
        exit: (i) => ({
            height: '100%',
            transition: {
                duration: .4,
                delay: .05 * i
            }
        })
    }

    const overlay = {
        initial: {
            opacity: 1,
            transition: {
                duration: .5
            }
        },
        enter: {
            opacity: 0
        },
        exit: {
            opacity: 1,
            transition: {
                duration: .75
            }
        }
    }

    const nOfColumns = 5

    return (
        <>
            <div className={styles.pageTransition}>
                {Array(nOfColumns).fill().map((_, i) => (
                    <div
                        {...anim(expand, nOfColumns - i)}
                        key={i}
                    />
                ))}
            </div>

            <div
                {...anim(overlay)}
                className={styles.bg}
                key='bg'
            />

            {children}

        </>
    )
}