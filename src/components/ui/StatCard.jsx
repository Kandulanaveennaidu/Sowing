import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'

export default function StatCard({
    value,
    label,
    icon: Icon,
    className = ''
}) {
    const { ref, isInView } = useInView({ once: true, threshold: 0.5 })
    const [displayValue, setDisplayValue] = useState('0')

    useEffect(() => {
        if (isInView) {
            // Parse the value to animate numbers
            const numericMatch = value.match(/^([\d.]+)(.*)$/)
            if (numericMatch) {
                const targetNum = parseFloat(numericMatch[1])
                const suffix = numericMatch[2] || ''
                const isFloat = numericMatch[1].includes('.')

                const count = { value: 0 }
                const controls = animate(count, { value: targetNum }, {
                    duration: 2,
                    ease: [0.25, 0.1, 0.25, 1],
                    onUpdate: (latest) => {
                        if (isFloat) {
                            setDisplayValue(latest.value.toFixed(1) + suffix)
                        } else {
                            setDisplayValue(Math.floor(latest.value) + suffix)
                        }
                    }
                })

                return () => controls.stop()
            } else {
                setDisplayValue(value)
            }
        }
    }, [isInView, value])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-center ${className}`}
        >
            {Icon && (
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-primary-100 dark:bg-primary-900/30">
                    <Icon className="w-6 h-6 text-primary-500" />
                </div>
            )}
            <motion.div
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-2"
            >
                {displayValue}
            </motion.div>
            <p className="text-dark-500 dark:text-dark-400 font-medium">
                {label}
            </p>
        </motion.div>
    )
}
