import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
    })
    const [status, setStatus] = useState('idle') // idle, loading, success, error
    const [errors, setErrors] = useState({})

    const services = [
        'UI/UX Design',
        'Web Development',
        'Logo Design',
        'SEO Optimization',
        'Branding',
        'Digital Marketing',
        'E-Commerce',
        'Other'
    ]

    const budgets = [
        'Under ₹50,000',
        '₹50,000 - ₹1,00,000',
        '₹1,00,000 - ₹3,00,000',
        '₹3,00,000 - ₹5,00,000',
        'Above ₹5,00,000'
    ]

    const validateForm = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        setStatus('loading')

        // Simulate form submission
        // Replace with actual EmailJS integration
        try {
            await new Promise(resolve => setTimeout(resolve, 1500))
            setStatus('success')
            setFormData({
                name: '',
                email: '',
                company: '',
                service: '',
                budget: '',
                message: ''
            })
        } catch (error) {
            setStatus('error')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 rounded-2xl p-8 md:p-12 text-center border border-green-500/30"
            >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                    Message Sent Successfully!
                </h3>
                <p className="text-gray-400 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-primary-400 font-semibold hover:text-primary-300 transition-colors"
                >
                    Send another message
                </button>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 shadow-sm">
            <h3 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="John Doe"
                    />
                    {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Company */}
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Your Company"
                    />
                </div>

                {/* Service */}
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interested In
                    </label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                        <option value="">Select a service</option>
                        {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                        ))}
                    </select>
                </div>

                {/* Budget */}
                <div className="md:col-span-2">
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range
                    </label>
                    <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                        <option value="">Select your budget</option>
                        {budgets.map(budget => (
                            <option key={budget} value={budget}>{budget}</option>
                        ))}
                    </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                    )}
                </div>
            </div>

            {status === 'error' && (
                <div className="flex items-center gap-2 mt-4 p-4 bg-red-500/10 rounded-lg text-red-400 border border-red-500/30">
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        Send Message
                    </>
                )}
            </button>
        </form>
    )
}
