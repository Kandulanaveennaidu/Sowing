import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, BarChart3, TrendingUp, Sprout, Award } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />

                {/* Animated gradient orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/20 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-400/20 to-primary-400/20 blur-3xl"
                />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
            </div>

            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Label with Icon */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-100 border border-primary-200"
                    >
                        <Sprout className="w-4 h-4 text-primary-600" />
                        <span className="text-sm font-semibold text-primary-700">
                            Digital Seeds That Grow Brands
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-dark-900 mb-6 text-balance"
                    >
                        Make Your Business{' '}
                        <span className="gradient-text">A Brand</span>
                    </motion.h1>

                    {/* Taglines with Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap items-center justify-center gap-4 mb-4"
                    >
                        <div className="flex items-center gap-2 text-dark-700">
                            <BarChart3 className="w-5 h-5 text-primary-500" />
                            <span className="font-semibold">Digital Marketing</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-dark-400 hidden sm:block" />
                        <div className="flex items-center gap-2 text-dark-700">
                            <TrendingUp className="w-5 h-5 text-accent-500" />
                            <span className="font-semibold">Management</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-dark-400 hidden sm:block" />
                        <div className="flex items-center gap-2 text-dark-700">
                            <Award className="w-5 h-5 text-primary-500" />
                            <span className="font-semibold">From Vision to Victory</span>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-base md:text-lg text-dark-600 mb-8 max-w-2xl mx-auto"
                    >
                        <span className="font-semibold text-dark-700">UI/UX Design</span> • <span className="font-semibold text-dark-700">Web Development</span> • <span className="font-semibold text-dark-700">Logo Design</span> • <span className="font-semibold text-dark-700">SEO</span> • <span className="font-semibold text-dark-700">Digital Marketing</span>
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button to="/contact" size="lg">
                            Start a Project
                        </Button>
                        <Button to="/portfolio" variant="secondary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                            View Our Work
                        </Button>
                    </motion.div>

                    {/* Stats preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-dark-200"
                    >
                        {[
                            { value: '8+', label: 'Years Experience' },
                            { value: '150+', label: 'Projects Delivered' },
                            { value: '50+', label: 'Happy Clients' },
                            { value: '99%', label: 'Client Satisfaction' }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-dark-600">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-dark-400 flex justify-center pt-2"
                >
                    <div className="w-1.5 h-2 rounded-full bg-dark-500" />
                </motion.div>
            </motion.div>
        </section>
    )
}
