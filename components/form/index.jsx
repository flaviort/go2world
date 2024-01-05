import { useEffect, useState } from 'react'
import Image from 'next/image'

// import necessary svgs
import UxAngleDown from '@/assets/svg/ux/angle-down.svg'
import UxCheck from '@/assets/svg/ux/check.svg'

export const Input = ({ id, label, type, placeholder, required, maxLength }) => {
    return (
        <div className='form-line'>

            <label className='label text-small' htmlFor={id}>
                <b>
                    { label } {required && (
                        <span className='required'>
                            *
                        </span>
                    )}
                </b>
            </label>

            <div className='line-wrapper'>
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className='input'
                    required={required}
                    maxLength={maxLength}
                />
            </div>

        </div>
    )
}

export const Textarea = ({ id, label, placeholder, required, maxLength }) => {
    return (
        <div className='form-line'>

            <label className='label text-small' htmlFor={id}>
                <b>
                    { label } {required && (
                        <span className='required'>
                            *
                        </span>
                    )}
                </b>
            </label>

            <div className='line-wrapper'>
                <textarea
                    id={id}
                    placeholder={placeholder}
                    className='input textarea'
                    required={required}
                    maxLength={maxLength}
                />
            </div>

        </div>
    )
}

export const FormLine = ({ label, required, children }) => {
    return (
        <div className='form-line'>

            <label className='label text-small'>
                <b>
                    { label } {required && (
                        <span className='required'>
                            *
                        </span>
                    )}
                </b>
            </label>

            <div className='line-wrapper'>
                { children }
            </div>

        </div>
    )
}

export const FileInput = ({ id, label, required }) => {

    const dynamicId = `${id}1`

    const previewImage = (input) => {
        const imgPreview = document.getElementById(dynamicId)

        if (input.files && input.files[0]) {
            const reader = new FileReader()
            reader.onload = function (e) {
                imgPreview.setAttribute('src', e.target.result)
            }
            reader.readAsDataURL(input.files[0])
        } else {
            imgPreview.setAttribute(
                'src',
                '/img/transparent-pixel.png'
            )
        }
    }

    useEffect(() => {
        const fileInput = document.getElementById(id)
        const labelElement = document.querySelector(`label[for='${id}']`)

        const clickHandler = (e) => {
            e.preventDefault()
            fileInput.click()
        }

        labelElement.addEventListener('click', clickHandler, false)

        return () => {
            labelElement.removeEventListener('click', clickHandler)
        }
    }, [id])

    const previewImageOnChange = (e) => previewImage(e.target)

    useEffect(() => {
        const fileInput = document.getElementById(id)

        fileInput.addEventListener('change', previewImageOnChange)

        return () => {
            fileInput.removeEventListener('change', previewImageOnChange)
        }
    }, [id])

    return (
        <div className='file-input'>

            <label className='file-input-label' htmlFor={id} />

            <input
                type='file'
                id={id}
                accept='image/png, image/jpeg'
                required={required}
            />

            <Image
                src='/img/transparent-pixel.png'
                alt='Image'
                id={dynamicId}
                className='file-input-image'
                fill={true}
            />

            <p className='file-input-text-background text-small'>
                {label}
            </p>
        </div>
    )
}

export const Checkbox = ({ id, label, required, isChecked, name }) => {

    const [checked, setChecked] = useState(false)

    const handleCheckboxChange = () => {
        setChecked(!checked)
    }

    return (
        <div className='checkbox-wrap'>

            <input
                type='checkbox'
                id={id}
                name={name}
                checked={isChecked}
                required={required}
                onChange={handleCheckboxChange}
            />

            <label className='checkbox' htmlFor={id}>
                { checked &&  <UxCheck /> }
            </label>

            <label className='checkbox-text text-small' htmlFor={id}>
                { label }
            </label>

        </div>
    )
}