import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import CaseStudyCard from '../ui/CaseStudyCard'
import { caseStudies } from '../../data/caseStudies'

export default function FeaturedWork() {
    // Show first 3 case studies
    const featuredProjects = caseStudies.slice(0, 3)

    return (
        <section className="section-padding bg-dark-50">
            <div className="container-custom">
                <SectionHeading
                    label="Featured Work"
                    title="Our Recent Projects"
                    subtitle="From logo design to full digital transformations, explore how we've helped businesses achieve remarkable results."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <CaseStudyCard {...project} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-dark-100 text-dark-800 font-bold rounded-xl border-2 border-dark-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300"
                    >
                        View All Work
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
