export const Button = ({ children = null, type, disabled, ...restButtonProps }) => {

    return (
        <button {...restButtonProps} disabled={disabled} type={type} className="ss-button">{children}</button>
    )
}

export default Button;