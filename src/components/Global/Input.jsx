const Input = ({ titleName, type, onChange, value, required, eyeIcon, className, iconName, placeholder, minLength, maxLength, disabled }) => {
    return (
        <div className="flex flex-col gap-1.5">
            <span className="text-[12px]">{titleName}</span>
            <div className="w-full flex  items-center gap-3 border border-gray-200 bg-[var(--color-bg)] focus-within:border-[var(--color-1)] rounded-lg px-2.5 py-1.5">
                {iconName}
                <input value={value} className={`w-full text-[14px] text-[var(--color-3)] ${className}`} type={type} onChange={onChange} required={required} placeholder={placeholder} disabled={disabled} minLength={minLength} maxLength={maxLength} />
                {eyeIcon}
            </div>
        </div>
    )
}

export default Input
