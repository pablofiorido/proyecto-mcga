import css from './input.module.css'
export const TextField = ({onChange, value, placeholder, disabled, label, required, inputRef, type = "text", ...rest}) => {
    return (
        <div className={css.container}>
            <span className={css.label}>{label}</span>
            <input type={type} ref={inputRef} className={css.input} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} required={required} {...rest} />
        </div>
    )
}