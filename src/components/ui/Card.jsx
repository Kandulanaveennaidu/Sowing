import { motion } from 'framer-motion'

export default function Card({
    children,
    className = '',
    hover = true,
    glass = false,
    padding = 'p-6 md:p-8',
    onClick,
    ...props
}) {
    const baseClasses = glass
        ? 'glass-card rounded-2xl'
        : 'bg-gray-900 rounded-2xl border border-gray-800 shadow-card'

    const hoverClasses = hover
        ? 'hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-500/50'
        : ''

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            whileHover={hover ? { y: -4 } : {}}
            className={`
        ${baseClasses}
        ${hoverClasses}
        ${padding}
        transition-all duration-300
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.div>
    )
}

