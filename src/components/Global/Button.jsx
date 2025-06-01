const Button = ({ className, disabled, onClick, children }) => {
    return (
        <button onClick={onClick} className={`bg-amber-400 py-1 px-6 rounded-lg font-medium text-white ${className}`} disabled={disabled}>{children}</button>
    )
}

export default Button;
