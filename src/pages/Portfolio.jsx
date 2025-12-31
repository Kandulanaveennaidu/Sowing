import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import CaseStudyCard from '../components/ui/CaseStudyCard'
import CTABanner from '../components/sections/CTABanner'
import { caseStudies, categories } from '../data/caseStudies'

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredProjects = activeCategory === 'All'
        ? caseStudies
        : caseStudies.filter(project =>
            project.category === activeCategory || project.tags.includes(activeCategory)
        )

    return (
        <>
            <Helmet>
                <title>Our Work | Sowing Digital Agency</title>
                <meta name="description" content="Explore our portfolio of successful projects across UI/UX design, web development, logo design, SEO, branding, and digital marketing." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-black via-gray-950 to-black">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase rounded-full bg-primary-500/20 text-primary-400"
                        >
                            Our Work
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white mb-6"
                        >
                            Case Studies & <span className="gradient-text">Portfolio</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400"
                        >
                            Explore our portfolio of successful projects in Logo Design, SEO, Digital Marketing, Web Development, and more.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section-padding">
                <div className="container-custom">
                    {/* Filter buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-2 mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`
                  px-5 py-2.5 rounded-full font-medium text-sm
                  transition-all duration-300
                  ${activeCategory === category
                                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                                    }
                `}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <CaseStudyCard {...project} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <p className="text-gray-400">
                                No projects found in this category.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>

            <CTABanner />
        </>
    )
}
