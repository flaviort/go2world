import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import clsx from 'clsx'

export const Form = ({ className, children }) => {

    const methods = useForm({
        criteriaMode: 'all',
        mode: 'all'
    })
    
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className={className}
            >
                {children}
            </form>
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
        <div className={clsx('form-line', dark && 'dark', errors[id] && 'error')}>

            <label className='label text-small' htmlFor={id}>
                {label}
            </label>

            <div className='line-wrapper'>

                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className='input'
                    {...register(id, validations)}
                />

            </div>

            {errors[id] && (
                <p className='text-small error-msg'>
                    {errors[id].message}
                </p>
            )}

        </div>
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
        <div className={clsx('form-line', dark && 'dark', errors[id] && 'error')}>

            <label className='label text-small' htmlFor={id}>
                {label}
            </label>

            <div className='line-wrapper'>
                <textarea
                    id={id}
                    name={label}
                    placeholder={placeholder}
                    className='input textarea'
                    {...register(id, validations)}
                />
            </div>

            {errors[id] && (
                <p className='text-small error-msg'>
                    {errors[id].message}
                </p>
            )}

        </div>
    )
}