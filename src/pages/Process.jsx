import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import ProcessStep from '../components/ui/ProcessStep'
import CTABanner from '../components/sections/CTABanner'
import { processSteps } from '../data/process'

export default function Process() {
    return (
        <>
            <Helmet>
                <title>Our Process | Sowing Digital Agency</title>
                <meta name="description" content="Discover our proven 4-step process: Discover, Design, Develop, and Deliver. A methodology that ensures successful project delivery." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"
                        >
                            Our Process
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-dark-900 dark:text-white mb-6"
                        >
                            How We <span className="gradient-text">Bring Ideas to Life</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-dark-500 dark:text-dark-400"
                        >
                            Our proven 4-step methodology ensures every project is delivered with excellence, on time, and within budget.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Process Overview */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} mb-4`}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1">
                                        {step.phase}
                                    </h3>
                                    <p className="text-sm text-dark-500 dark:text-dark-400">
                                        {step.duration}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Detailed Process */}
            <section className="section-padding bg-dark-50 dark:bg-dark-800/50">
                <div className="container-custom">
                    <SectionHeading
                        label="Step by Step"
                        title="Detailed Process Breakdown"
                        subtitle="Here's exactly what happens at each stage of your project."
                    />

                    <div className="max-w-4xl mx-auto">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="mb-12 last:mb-0"
                            >
                                <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 md:p-8 border border-dark-100 dark:border-dark-700">
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                                        {/* Icon and number */}
                                        <div className="flex-shrink-0">
                                            <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                                                <step.icon className="w-8 h-8 text-white" />
                                                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-dark-800 shadow-md flex items-center justify-center">
                                                    <span className="text-sm font-bold text-dark-900 dark:text-white">{step.id}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                                                <div>
                                                    <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
                                                        {step.phase}
                                                    </span>
                                                    <h3 className="text-xl md:text-2xl font-bold text-dark-900 dark:text-white">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <span className="text-sm text-dark-500 dark:text-dark-400 bg-dark-100 dark:bg-dark-700 px-3 py-1 rounded-full">
                                                    {step.duration}
                                                </span>
                                            </div>

                                            <p className="text-dark-600 dark:text-dark-300 mb-6">
                                                {step.description}
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {/* Activities */}
                                                <div>
                                                    <h4 className="text-sm font-semibold text-dark-500 dark:text-dark-400 uppercase tracking-wider mb-3">
                                                        Key Activities
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {step.activities.map((activity, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-dark-600 dark:text-dark-300 text-sm">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                                                {activity}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Deliverables */}
                                                <div>
                                                    <h4 className="text-sm font-semibold text-dark-500 dark:text-dark-400 uppercase tracking-wider mb-3">
                                                        Deliverables
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {step.deliverables.map((deliverable, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-dark-600 dark:text-dark-300 text-sm">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                                                                {deliverable}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline visual */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading
                        label="Timeline"
                        title="Typical Project Timeline"
                        subtitle="Most projects are completed within 8-12 weeks, depending on scope and complexity."
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 md:p-8 border border-dark-100 dark:border-dark-700">
                            <div className="relative">
                                {/* Timeline bar */}
                                <div className="absolute top-6 left-0 right-0 h-2 bg-dark-100 dark:bg-dark-700 rounded-full overflow-hidden">
                                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 via-emerald-500 to-orange-500" />
                                </div>

                                {/* Timeline markers */}
                                <div className="relative flex justify-between pt-0">
                                    {processSteps.map((step, index) => (
                                        <div key={step.id} className="text-center">
                                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-3 ring-4 ring-white dark:ring-dark-800`}>
                                                <step.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <p className="text-sm font-semibold text-dark-900 dark:text-white">
                                                {step.phase}
                                            </p>
                                            <p className="text-xs text-dark-500 dark:text-dark-400">
                                                {step.duration}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <CTABanner />
        </>
    )
}
