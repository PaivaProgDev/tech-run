const Button = ({ className, disabled, onClick, children }) => {
    return (
        <button onClick={onClick} className={`cursor-pointer bg-[var(--color-1)] py-2 px-6 rounded-lg font-medium text-white ${className}`} disabled={disabled}>{children}</button>
    )
}

export default Button;
