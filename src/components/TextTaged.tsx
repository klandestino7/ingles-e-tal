const TextTaged = ({
    children,
    color,
    background,
}: {
    children: React.ReactNode,
    color?: string,
    background?: string
}) => {

    return (
        <span style={{
            color: color ?? "var(--color-light)",
            background: background ?? "var(--color-primary)",
            borderRadius: "3px",
            paddingInline: "5px"
        }}>
            {children}
        </span>
    )
}

export default TextTaged;