const Input = ({ titleName, type, onChange, eyeIcon, iconName, placeholder, minLength, maxLength }) => {
    return (
        <div>
            {titleName}
            <div className="w-full flex  items-center gap-3 border border-gray-200 bg-[var(--color-bg)] focus-within:border-[var(--color-1)] rounded-lg px-2 p-1">
                {iconName}
                <input className="w-full" type={type} onChange={onChange} placeholder={placeholder} minLength={minLength} maxLength={maxLength} />
                {eyeIcon}
            </div>
        </div>
    )
}

export default Input
