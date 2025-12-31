import { motion } from 'framer-motion'
import { Search, PenTool, Code, Rocket } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const steps = [
    {
        step: 1,
        title: 'Discover',
        description: 'We dive deep into understanding your business, users, and goals through research and discovery sessions.',
        icon: Search,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        step: 2,
        title: 'Design',
        description: 'We create wireframes and prototypes, iterating on designs until they perfectly match your vision.',
        icon: PenTool,
        color: 'from-purple-500 to-pink-500'
    },
    {
        step: 3,
        title: 'Develop',
        description: 'Our engineers build your product with clean, scalable code using modern technologies.',
        icon: Code,
        color: 'from-emerald-500 to-teal-500'
    },
    {
        step: 4,
        title: 'Deliver',
        description: 'We launch your product and provide ongoing support to ensure continued success.',
        icon: Rocket,
        color: 'from-orange-500 to-red-500'
    }
]

export default function ProcessTimeline() {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <SectionHeading
                    label="Our Process"
                    title="How We Work"
                    subtitle="A proven methodology that ensures successful project delivery, every time."
                />

                <div className="relative">
                    {/* Connection line for desktop */}
                    <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-emerald-500 to-orange-500 opacity-20" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    {/* Step card */}
                                    <div className="text-center">
                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className={`
                        relative inline-flex items-center justify-center w-16 h-16 rounded-2xl
                        bg-gradient-to-br ${step.color}
                        shadow-lg mb-6
                      `}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                            {/* Step number */}
                                            <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gray-900 shadow-md flex items-center justify-center border border-gray-700">
                                                <span className="text-sm font-bold text-white">{step.step}</span>
                                            </div>
                                        </motion.div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="/process"
                        className="inline-flex items-center gap-2 text-primary-400 font-medium hover:gap-3 transition-all"
                    >
                        Learn more about our process
                        <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
