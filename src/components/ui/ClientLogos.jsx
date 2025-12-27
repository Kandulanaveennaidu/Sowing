import { motion } from 'framer-motion'
import { clients } from '../../data/navigation'

export default function ClientLogos() {
    // Double the clients for seamless loop
    const duplicatedClients = [...clients, ...clients]

    return (
        <section className="py-12 md:py-16 overflow-hidden bg-dark-50 dark:bg-dark-800/50">
            <div className="container-custom mb-8">
                <p className="text-center text-sm font-medium uppercase tracking-wider text-dark-500 dark:text-dark-400">
                    Trusted by innovative companies
                </p>
            </div>

            <div className="relative">
                {/* Gradient masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-50 dark:from-dark-800/50 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-50 dark:from-dark-800/50 to-transparent z-10" />

                {/* Scrolling logos */}
                <motion.div
                    className="flex gap-12 md:gap-16"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    {duplicatedClients.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex items-center justify-center"
                        >
                            <span className="text-xl md:text-2xl font-display font-bold text-dark-400 dark:text-dark-500 whitespace-nowrap hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                                {client}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
