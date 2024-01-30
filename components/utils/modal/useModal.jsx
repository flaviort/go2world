import { useRef } from 'react'

export default function useModal() {
    const ref = useRef(null)
    const onOpen = () => ref.current.showModal()
    const onClose = () => ref.current.close()

    return { ref, onOpen, onClose }
}
