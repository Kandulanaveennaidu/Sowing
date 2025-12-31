import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react'
import ContactForm from '../components/ui/ContactForm'
import { contactInfo } from '../data/navigation'

const contactDetails = [
    {
        icon: Mail,
        label: 'Email',
        value: contactInfo.email,
        href: `mailto:${contactInfo.email}`
    },
    {
        icon: Phone,
        label: 'Phone',
        value: contactInfo.phone,
        href: `tel:${contactInfo.phone.replace(/\s/g, '')}`
    },
    {
        icon: MessageCircle,
        label: 'WhatsApp',
        value: contactInfo.phone,
        href: `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`
    },
    {
        icon: MapPin,
        label: 'Location',
        value: contactInfo.address,
        href: null
    }
]

const faqs = [
    {
        question: 'How long does a typical project take?',
        answer: 'Most projects are completed within 8-12 weeks, depending on scope and complexity. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
        question: 'What is your pricing structure?',
        answer: 'We offer project-based pricing tailored to your specific needs. After understanding your requirements, we\'ll provide a detailed proposal with transparent pricing.'
    },
    {
        question: 'Do you work with startups?',
        answer: 'Absolutely! We love working with startups and offer specialized packages to help early-stage companies launch with a strong digital presence.'
    },
    {
        question: 'What happens after the project is complete?',
        answer: 'We offer ongoing support and maintenance packages. We\'re committed to your long-term success and can continue to optimize and enhance your digital products.'
    }
]

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact Us | Sowing Digital Agency</title>
                <meta name="description" content="Get in touch with Sowing Digital Agency. Let's discuss your project and explore how we can help you achieve your business goals." />
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
                            Get In Touch
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white mb-6"
                        >
                            Let's <span className="gradient-text">Start a Project</span> Together
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400"
                        >
                            Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                                Contact Information
                            </h2>
                            <p className="text-gray-400 mb-8">
                                Reach out through any of these channels. We're here to help and answer any questions you might have.
                            </p>

                            <div className="space-y-6 mb-10">
                                {contactDetails.map((item, index) => {
                                    const Icon = item.icon
                                    const content = (
                                        <div className="flex items-start gap-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.label === 'WhatsApp'
                                                ? 'bg-green-500/20'
                                                : 'bg-primary-500/20'
                                                }`}>
                                                <Icon className={`w-6 h-6 ${item.label === 'WhatsApp' ? 'text-green-400' : 'text-primary-400'
                                                    }`} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">
                                                    {item.label}
                                                </p>
                                                <p className="font-medium text-white">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    )

                                    return item.href ? (
                                        <motion.a
                                            key={index}
                                            href={item.href}
                                            target={item.label === 'WhatsApp' ? '_blank' : undefined}
                                            rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="block hover:bg-gray-800/50 -mx-4 px-4 py-3 rounded-xl transition-colors"
                                        >
                                            {content}
                                        </motion.a>
                                    ) : (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="py-3"
                                        >
                                            {content}
                                        </motion.div>
                                    )
                                })}
                            </div>

                            {/* CTA */}
                            <a
                                href={`https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white hover:from-green-600 hover:to-green-700 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <MessageCircle className="w-6 h-6" />
                                    <h3 className="text-xl font-bold">
                                        Chat on WhatsApp
                                    </h3>
                                </div>
                                <p className="text-white/80 text-sm mb-4">
                                    Get instant response! Chat with us on WhatsApp for quick queries and project discussions.
                                </p>
                                <span className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
                                    Start Chat <ArrowRight className="w-4 h-4" />
                                </span>
                            </a>
                        </motion.div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-gray-950">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-400">
                            Quick answers to common questions about working with us.
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        <div className="grid gap-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-900 rounded-xl p-6 border border-gray-800"
                                >
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-400">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map placeholder */}
            <section className="h-[400px] bg-gray-900 flex items-center justify-center border-t border-gray-800">
                <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-300 font-medium">
                        {contactInfo.address}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                        Hyderabad, Telangana, India
                    </p>
                </div>
            </section>
        </>
    )
}
