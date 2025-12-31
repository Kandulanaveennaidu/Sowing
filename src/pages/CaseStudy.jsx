import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import Button from '../components/ui/Button'
import CTABanner from '../components/sections/CTABanner'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudy() {
    const { caseStudyId } = useParams()
    const project = caseStudies.find((p) => p.id === caseStudyId)

    if (!project) {
        return <Navigate to="/portfolio" replace />
    }

    // Get next and previous projects
    const currentIndex = caseStudies.findIndex((p) => p.id === caseStudyId)
    const prevProject = caseStudies[currentIndex - 1]
    const nextProject = caseStudies[currentIndex + 1]

    return (
        <>
            <Helmet>
                <title>{project.title} | Case Study | Sowing Digital Agency</title>
                <meta name="description" content={project.summary} />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-black via-gray-950 to-black">
                <div className="container-custom">
                    {/* Back link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Portfolio
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            {/* Tags */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-wrap gap-2 mb-6"
                            >
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm font-medium rounded-full bg-primary-500/20 text-primary-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-white mb-4"
                            >
                                {project.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                className="text-xl text-primary-400 font-medium mb-4"
                            >
                                {project.client}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-gray-400 mb-6"
                            >
                                {project.summary}
                            </motion.p>

                            {/* Services used */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                            >
                                <p className="text-sm font-medium text-gray-400 mb-2">
                                    Services Provided:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.services.map((service) => (
                                        <span
                                            key={service}
                                            className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-800"
                        >
                            <img
                                src={project.heroImage}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Problem & Solution */}
            <section className="section-padding bg-gray-950">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
                        >
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                                The Challenge
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                {project.problem}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
                        >
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                                Our Solution
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                {project.solution}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            The Results
                        </h2>
                        <p className="text-gray-400">
                            Measurable outcomes that demonstrate the impact of our work.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {project.results.map((result, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center bg-gray-900 rounded-2xl p-6 border border-gray-800"
                            >
                                <div className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-2">
                                    {result.metric}
                                </div>
                                <p className="text-gray-400 text-sm">
                                    {result.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            {project.testimonial && (
                <section className="section-padding bg-gradient-to-br from-primary-600 to-accent-600">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <Quote className="w-16 h-16 text-white/20 mx-auto mb-6" />
                            <blockquote className="text-2xl md:text-3xl text-white font-medium mb-8 leading-relaxed">
                                "{project.testimonial.quote}"
                            </blockquote>
                            <div>
                                <p className="text-white font-semibold text-lg">
                                    {project.testimonial.author}
                                </p>
                                <p className="text-white/70">
                                    {project.testimonial.role}, {project.testimonial.company}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Navigation */}
            <section className="py-12 border-t border-gray-800">
                <div className="container-custom">
                    <div className="flex justify-between items-center">
                        {prevProject ? (
                            <Link
                                to={`/portfolio/${prevProject.id}`}
                                className="flex items-center gap-3 group"
                            >
                                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-primary-400 group-hover:-translate-x-1 transition-all" />
                                <div className="text-left">
                                    <p className="text-sm text-gray-500">Previous</p>
                                    <p className="font-medium text-white group-hover:text-primary-400 transition-colors">
                                        {prevProject.title}
                                    </p>
                                </div>
                            </Link>
                        ) : (
                            <div />
                        )}

                        {nextProject ? (
                            <Link
                                to={`/portfolio/${nextProject.id}`}
                                className="flex items-center gap-3 group text-right"
                            >
                                <div>
                                    <p className="text-sm text-gray-500">Next</p>
                                    <p className="font-medium text-white group-hover:text-primary-400 transition-colors">
                                        {nextProject.title}
                                    </p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    )
}
