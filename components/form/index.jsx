export const Input = ({ id, label, type, placeholder, required, maxLength, dark }) => {
    return (
        <div className={(dark && 'dark') + ' form-line'}>

            <label className='label text-small' htmlFor={id}>
                {label}
            </label>

            <div className='line-wrapper'>
                <input
                    type={type}
                    id={id}
                    name={label}
                    placeholder={placeholder}
                    className='input'
                    required={required}
                    maxLength={maxLength}
                />
            </div>

        </div>
    )
}

export const Textarea = ({ id, label, placeholder, required, maxLength, dark }) => {
    return (
        <div className={(dark && 'dark') + ' form-line'}>

            <label className='label text-small' htmlFor={id}>
                {label}
            </label>

            <div className='line-wrapper'>
                <textarea
                    id={id}
                    name={label}
                    placeholder={placeholder}
                    className='input textarea'
                    required={required}
                    maxLength={maxLength}
                />
            </div>

        </div>
    )
}