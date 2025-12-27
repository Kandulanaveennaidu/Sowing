import { motion } from 'framer-motion'

const animations = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    },
    fadeDown: {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 }
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 }
    },
    fadeRight: {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 }
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    },
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }
}

export default function AnimatedSection({
    children,
    animation = 'fadeUp',
    delay = 0,
    duration = 0.5,
    className = '',
    once = true,
    ...props
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: '-50px' }}
            variants={animations[animation]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export function StaggerContainer({
    children,
    staggerDelay = 0.1,
    className = '',
    ...props
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({
    children,
    animation = 'fadeUp',
    className = '',
    ...props
}) {
    return (
        <motion.div
            variants={animations[animation]}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}
