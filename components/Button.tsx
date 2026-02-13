import React from "react";

interface ButtonProps {
    variant?: "primary" | "outline";
    href?: string;
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
    "data-hoverable"?: string;
    "data-cursor-text"?: string;
}

const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105";

const variantStyles = {
    primary:
        "bg-accent text-base px-8 py-4 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]",
    outline:
        "border border-[rgba(245,245,247,0.42)] text-primaryText px-8 py-4 hover:bg-[rgba(245,245,247,0.06)] hover:shadow-[0_0_15px_rgba(245,245,247,0.08)]",
};

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    href,
    children,
    className = "",
    onClick,
    ...rest
}) => {
    const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes} onClick={onClick} {...rest}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} onClick={onClick} {...rest}>
            {children}
        </button>
    );
};

export default Button;
