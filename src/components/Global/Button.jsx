const Button = ({ className, disabled, onClick, children }) => {
    return (
        <button onClick={onClick} className={`cursor-pointer flex items-center justify-center text-[14px] bg-[var(--color-1)] py-2 px-4.5 disabled:bg-zinc-300 disabled:cursor-default gap-2 rounded-lg font-normal text-white ${className}`} disabled={disabled}>{children}</button>
    )
}

export default Button;
