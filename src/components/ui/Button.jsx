import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2 } from 'lucide-react'

const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30',
    secondary: 'bg-dark-100 text-dark-800 border-2 border-dark-300 hover:bg-primary-500 hover:text-white hover:border-primary-500',
    outline: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    ghost: 'bg-transparent text-dark-700 hover:bg-dark-100 hover:text-dark-900',
    white: 'bg-white text-dark-900 hover:bg-primary-500 hover:text-white shadow-lg'
}

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    to,
    icon,
    iconPosition = 'right',
    loading = false,
    disabled = false,
    fullWidth = false,
    className = '',
    onClick,
    type = 'button',
    ariaLabel,
    ...props
}) {
    const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-xl
    transition-all duration-300
    hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `

    const content = (
        <>
            {loading && <Loader2 className="w-5 h-5 animate-spin" />}
            {!loading && icon && iconPosition === 'left' && icon}
            {children}
            {!loading && icon && iconPosition === 'right' && icon}
            {!loading && !icon && variant === 'primary' && (
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
        </>
    )

    const motionProps = {
        whileHover: { scale: disabled ? 1 : 1.02 },
        whileTap: { scale: disabled ? 1 : 0.98 },
        transition: { duration: 0.2 }
    }

    if (to) {
        return (
            <motion.div {...motionProps} className="inline-block">
                <Link
                    to={to}
                    className={`group ${baseClasses}`}
                    aria-label={ariaLabel}
                    {...props}
                >
                    {content}
                </Link>
            </motion.div>
        )
    }

    if (href) {
        return (
            <motion.a
                href={href}
                className={`group ${baseClasses}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                {...motionProps}
                {...props}
            >
                {content}
            </motion.a>
        )
    }

    return (
        <motion.button
            type={type}
            className={`group ${baseClasses}`}
            onClick={onClick}
            disabled={disabled || loading}
            aria-label={ariaLabel}
            {...motionProps}
            {...props}
        >
            {content}
        </motion.button>
    )
}
