import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Twitter, Linkedin, Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react'
import { footerLinks, socialLinks, contactInfo } from '../../data/navigation'
import sowingLogo from '../../assets/sowing.jpg'

const iconMap = {
    Twitter,
    Linkedin,
    Instagram,
    MessageCircle
}

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-dark-900 text-white" role="contentinfo">
            {/* Main Footer */}
            <div className="container-custom pt-16 md:pt-20 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-flex items-center gap-3 mb-6">
                            <img
                                src={sowingLogo}
                                alt="Sowing Digital Agency"
                                className="h-16 w-auto rounded-xl"
                            />
                        </Link>

                        {/* Taglines with Lucide Icons */}
                        <div className="space-y-3 mb-6">
                            {contactInfo.taglines.map((tagline, index) => {
                                const Icon = tagline.icon
                                return (
                                    <div key={index} className="flex items-center gap-3 text-dark-300 text-sm">
                                        <Icon className="w-4 h-4 text-primary-400" />
                                        <span>{tagline.text}</span>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 mt-6">
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors"
                            >
                                <Mail className="w-5 h-5 flex-shrink-0" />
                                {contactInfo.email}
                            </a>
                            <a
                                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                                className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors"
                            >
                                <Phone className="w-5 h-5 flex-shrink-0" />
                                {contactInfo.phone}
                            </a>
                            <div className="flex items-start gap-3 text-dark-400">
                                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span>{contactInfo.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-300 mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-dark-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-300 mb-4">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-dark-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-300 mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-dark-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-dark-800 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <p className="text-dark-500 text-sm">
                            © {currentYear} Sowing Digital Agency. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => {
                                const Icon = iconMap[social.icon]
                                const isWhatsApp = social.name === 'WhatsApp'
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isWhatsApp
                                            ? 'bg-green-500 text-white hover:bg-green-600'
                                            : 'bg-dark-800 text-dark-400 hover:bg-primary-500 hover:text-white'
                                            }`}
                                        aria-label={`Follow us on ${social.name}`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient bar */}
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-1" />
        </footer>
    )
}
