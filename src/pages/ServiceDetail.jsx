import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'
import CTABanner from '../components/sections/CTABanner'
import { services } from '../data/services'

export default function ServiceDetail() {
    const { serviceId } = useParams()
    const service = services.find((s) => s.id === serviceId)

    if (!service) {
        return <Navigate to="/services" replace />
    }

    const Icon = service.icon

    return (
        <>
            <Helmet>
                <title>{service.title} | Sowing Digital Agency</title>
                <meta name="description" content={service.description} />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800">
                <div className="container-custom">
                    {/* Back link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-primary-500 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Services
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}
                            >
                                <Icon className="w-10 h-10 text-white" />
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-dark-900 dark:text-white mb-6"
                            >
                                {service.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-dark-500 dark:text-dark-400 mb-8"
                            >
                                {service.description}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Button to="/contact" size="lg">
                                    Start Your Project
                                </Button>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className={`aspect-square rounded-3xl bg-gradient-to-br ${service.color} p-8 md:p-12 flex items-center justify-center`}
                        >
                            <Icon className="w-32 h-32 md:w-48 md:h-48 text-white/30" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 dark:text-white mb-4">
                            What's Included
                        </h2>
                        <p className="text-dark-500 dark:text-dark-400">
                            Our comprehensive {service.title.toLowerCase()} service covers everything you need.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-6 bg-white dark:bg-dark-800 rounded-xl border border-dark-100 dark:border-dark-700"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-primary-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-900 dark:text-white">
                                        {feature}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-dark-50 dark:bg-dark-800/50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 dark:text-white mb-4">
                            Our Process
                        </h2>
                        <p className="text-dark-500 dark:text-dark-400">
                            A proven methodology that ensures successful project delivery.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-white dark:bg-dark-800 rounded-xl p-6 border border-dark-100 dark:border-dark-700"
                            >
                                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                                    {index + 1}
                                </div>
                                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2 mt-2">
                                    {step.step}
                                </h3>
                                <p className="text-dark-500 dark:text-dark-400 text-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables & Benefits */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Deliverables */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-900 dark:text-white mb-6">
                                What You'll Receive
                            </h2>
                            <div className="space-y-4">
                                {service.deliverables.map((deliverable, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-dark-600 dark:text-dark-300">{deliverable}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-900 dark:text-white mb-6">
                                Key Benefits
                            </h2>
                            <div className="space-y-4">
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <ArrowRight className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-dark-600 dark:text-dark-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    )
}
