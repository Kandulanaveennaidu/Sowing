import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CTABanner from '../components/sections/CTABanner'
import { services } from '../data/services'

// Professional images for each service
const serviceImages = {
    'ui-ux-design': 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80',
    'web-development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    'logo-design': 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    'branding': 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&q=80',
    'seo-optimization': 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
    'product-design': 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
    'mobile-app-design': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    'ecommerce': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    'digital-marketing': 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
    'digital-strategy': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
}

export default function Services() {
    return (
        <>
            <Helmet>
                <title>Our Services | Sowing Digital Agency</title>
                <meta name="description" content="Comprehensive digital services including UI/UX Design, Web Development, Logo Design, SEO, Branding, and Digital Marketing." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase rounded-full bg-primary-100 text-primary-600"
                        >
                            Our Services
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-dark-900 mb-6"
                        >
                            Comprehensive <span className="gradient-text">Digital Solutions</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-dark-500"
                        >
                            From strategy to execution, we offer end-to-end digital services that help businesses thrive in the digital age.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services List with Real Images */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="space-y-16 md:space-y-24">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            const isEven = index % 2 === 0
                            const imageUrl = serviceImages[service.id] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'

                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
                                            {service.title}
                                        </h2>
                                        <p className="text-lg text-dark-600 mb-6">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="grid grid-cols-2 gap-3 mb-8">
                                            {service.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                                    <span className="text-sm text-dark-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            to={`/services/${service.id}`}
                                            className="inline-flex items-center gap-2 text-primary-500 font-semibold group"
                                        >
                                            Learn More
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>

                                    {/* Image */}
                                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                                        >
                                            <img
                                                src={imageUrl}
                                                alt={service.title}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Overlay gradient */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />

                                            {/* Service badge */}
                                            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                                <Icon className="w-5 h-5 text-primary-500" />
                                                <span className="text-sm font-semibold text-dark-900">{service.title}</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    )
}
