import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import Button from '../ui/Button'
import { servicesOverview } from '../../data/services'

export default function ServicesOverview() {
    const [showAll, setShowAll] = useState(false)
    const displayedServices = showAll ? servicesOverview : servicesOverview.slice(0, 6)

    return (
        <section className="section-padding" id="services">
            <div className="container-custom">
                <SectionHeading
                    label="Our Services"
                    title="Everything You Need to Succeed Online"
                    subtitle="We provide digital marketing, UI/UX design, web development, and graphic design services to help businesses grow online."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                link={service.link}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    {!showAll && servicesOverview.length > 6 && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl border-2 border-gray-700 hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
                        >
                            View All Services
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    )}
                    {showAll && (
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 text-primary-400 font-semibold hover:gap-3 transition-all"
                        >
                            Explore All Services in Detail
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
