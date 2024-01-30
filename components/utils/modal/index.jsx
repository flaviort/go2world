import { forwardRef } from 'react'

// css
import styles from './modal.module.scss'

const Modal = forwardRef(function Modal({ children, onClick }, ref) {

    return (
        <dialog ref={ref} className={styles.dialog}>

            <div className={styles.backdrop} onClick={onClick} />

            <div className={styles.dialogWrapper}>
                <div className='relative'>
                    {children}
                </div>
            </div>
        </dialog>
    )
})

export default Modal