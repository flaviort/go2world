import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { useRef, useState } from 'react'
import clsx from 'clsx'

// components
import Modal from '@/components/utils/modal'
import MagneticButton from '../utils/magnetic-button'

// import necessary svgs
import Mailbox from '@/assets/svg/mailbox.svg'
import Bug from '@/assets/svg/bug.svg'

// css
import styles from './form.module.scss'

export const Form = ({ className, children }) => {
    
    // define all refs
    const modalSuccess = useRef(null)
    const modalError = useRef(null)
    const form = useRef(null)

    // useState to make the Modals invisible
    const [ renderSuccessModal, setRenderSuccessModal ] = useState(false)
    const [ renderErrorModal, setRenderErrorModal ] = useState(false)

    // close success modal
    const closeSuccessModal = () => {
        modalSuccess?.current?.close()
        setRenderSuccessModal(false)
    }

    // close error modal
    const closeErrorModal = () => {
        modalError?.current?.close()
        setRenderErrorModal(false)
    }

    // form validations
    const methods = useForm({
        criteriaMode: 'all',
        mode: 'all'
    })
    
    // submit function
    const onSubmit = (data) => {

        form.current.classList.add('sending')

        fetch('/api/sendgrid', {
            method: 'post',
            body: JSON.stringify(data)
        })

        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Failed to send message.')
            }
        })

        // if success
        .then(() => {
            setRenderSuccessModal(true)

            setTimeout(() => {
                modalSuccess.current.showModal()
                form.current.classList.remove('sending')
                form.current.reset()
            }, 1000)
        })

        // if error
        .catch(error => {
            console.error('Error:', error)
            setRenderErrorModal(true)

            setTimeout(() => {
                modalError.current.showModal()
                form.current.classList.remove('sending')
            }, 1000)
        })
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className={className}
                ref={form}
            >
                {children}
            </form>

            {renderSuccessModal && 
                <Modal ref={modalSuccess} onClick={closeSuccessModal}>

                    <div className={styles.modalIcon}>
                        <Mailbox />
                    </div>

                    <h2 className='text-bigger medium'>
                        Sucesso<span className='blue'>.</span>
                    </h2>

                    <p className={styles.modalDesc}>
                        Sua mensagem foi enviada com sucesso! <br />
                        Entraremos em contato o mais breve possível.
                    </p>

                    <div className={styles.button}>
                        <MagneticButton>
                            <button onClick={closeSuccessModal} className='blue-button text-small'>
                                <span>
                                    Fechar
                                </span>
                            </button>
                        </MagneticButton>
                    </div>
                    
                </Modal>
            }

            { renderErrorModal &&
                <Modal ref={modalError} onClick={closeErrorModal}>
                    
                    <div className={styles.modalIcon}>
                        <Bug />
                    </div>

                    <h2 className='text-bigger medium'>
                        Erro<span className='blue'>.</span>
                    </h2>

                    <p className={styles.modalDesc}>
                        Ocorreu um erro ao enviar sua mensagem! <br />
                        Por favor, aguarde um momento e tente novamente.
                    </p>

                    <div className={styles.button}>
                        <MagneticButton>
                            <button onClick={closeErrorModal} className='blue-button text-small'>
                                <span>
                                    Fechar
                                </span>
                            </button>
                        </MagneticButton>
                    </div>

                </Modal>
            }
            
        </FormProvider>
    )
}

export const Input = ({ id, label, type, placeholder, dark, required, maxLength }) => {

    const {
        register,
        formState: {
            errors
        }
    } = useFormContext() ?? {}

    let validations = {
        required: required && 'Este campo é obrigatório',
        maxLength: maxLength && {
            value: maxLength,
            message: `Limite de caracteres excedido`,
        },
    }

    // add pattern validation for email type
    if (type === 'email') {
        validations = {
            ...validations,
            pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Email inválido',
            },
        }
    }

    return (
        <div className={clsx('form-line', dark && 'dark', errors[label] && 'error')}>

            <label className='label text-small' htmlFor={id}>
                {label}
            </label>

            <div className='line-wrapper'>

                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className='input'
                    {...register(label, validations)}
                />

            </div>

            {errors[label] && (
                <p className='text-small error-msg'>
                    {errors[label].message}
                </p>
            )}

        </div>
    )
}

export const InputHidden = ({ label, value }) => {

    const {
        register
    } = useFormContext() ?? {}

    return (
        <input
            type='hidden'
            value={value}
            {...register(label)}
        />
    )
}

export const Textarea = ({ id, label, placeholder, required, maxLength, dark }) => {

    const {
        register,
        formState: {
            errors
        }
    } = useFormContext() ?? {}

    let validations = {
        required: required && 'Este campo é obrigatório',
        maxLength: maxLength && {
            value: maxLength,
            message: `Limite de caracteres excedido`,
        },
    }

    return (
        <div className={clsx('form-line', dark && 'dark', errors[label] && 'error')}>

            <label className='label text-small' htmlFor={id}>
                {label}
            </label>

            <div className='line-wrapper'>
                <textarea
                    id={id}
                    placeholder={placeholder}
                    className='input textarea'
                    {...register(label, validations)}
                />
            </div>

            {errors[label] && (
                <p className='text-small error-msg'>
                    {errors[label].message}
                </p>
            )}

        </div>
    )
}