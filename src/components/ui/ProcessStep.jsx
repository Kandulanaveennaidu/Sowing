import { motion } from 'framer-motion'

export default function ProcessStep({
    step,
    icon: Icon,
    phase,
    title,
    description,
    color,
    isActive = false,
    isLast = false,
    className = ''
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: step * 0.1 }}
            className={`relative flex gap-6 ${className}`}
        >
            {/* Timeline line */}
            {!isLast && (
                <div className="absolute left-7 top-16 w-0.5 h-[calc(100%-2rem)] bg-gradient-to-b from-primary-200 to-transparent dark:from-primary-800" />
            )}

            {/* Icon */}
            <div className="relative flex-shrink-0">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`
            w-14 h-14 rounded-xl flex items-center justify-center
            bg-gradient-to-br ${color || 'from-primary-500 to-accent-500'}
            shadow-lg shadow-primary-500/20
          `}
                >
                    <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-dark-800 border-2 border-primary-500 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-500">{step}</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-12">
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    {phase}
                </span>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                    {title}
                </h3>
                <p className="text-dark-500 dark:text-dark-400 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}
