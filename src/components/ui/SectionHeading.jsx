import { motion } from 'framer-motion'

export default function SectionHeading({
    label,
    title,
    subtitle,
    align = 'center'
}) {
    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto'
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`max-w-3xl mb-12 md:mb-16 ${alignmentClasses[align]}`}
        >
            {label && (
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide uppercase rounded-full bg-primary-100 text-primary-700">
                    {label}
                </span>
            )}
            {title && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
                    {title}
                </h2>
            )}
            {subtitle && (
                <p className="text-lg text-dark-600">
                    {subtitle}
                </p>
            )}
        </motion.div>
    )
}
