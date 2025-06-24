import { usePreference } from "../../contexts/PreferenceContext"

const Input = ({ titleName, type, onChange, value, pattern, required, inputBox, eyeIcon, className, iconName, placeholder, minLength, maxLength, disabled }) => {
    const { theme } = usePreference()

    return (
        <div className="flex flex-col gap-1.5">
            <span className={`${theme === 'dark' && 'text-zinc-300'} text-[12px] `}>{titleName}</span>
            <label className={`${theme === 'dark' && 'bg-zinc-700 border-0'} w-full flex items-center gap-3 border border-gray-200 bg-[var(--color-bg)] focus-within:border-[var(--color-1)] rounded-lg px-2.5 py-1.5`}>
                {iconName}
                <input value={value} className={`${theme === 'dark' && 'text-zinc-300'} w-full text-[14px] text-[var(--color-3)] ${className}`} type={type} onChange={onChange} required={required} pattern={pattern} placeholder={placeholder} disabled={disabled} minLength={minLength} maxLength={maxLength} />
                {eyeIcon}
            </label>
        </div>
    )
}

export default Input
