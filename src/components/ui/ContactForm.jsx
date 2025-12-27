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
                className="bg-green-50 rounded-2xl p-8 md:p-12 text-center"
            >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">
                    Message Sent Successfully!
                </h3>
                <p className="text-dark-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                >
                    Send another message
                </button>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 border border-dark-100 shadow-sm">
            <h3 className="text-2xl font-bold text-dark-900 mb-6">
                Send Us a Message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="label">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="John Doe"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="label">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Company */}
                <div>
                    <label htmlFor="company" className="label">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input"
                        placeholder="Your Company"
                    />
                </div>

                {/* Service */}
                <div>
                    <label htmlFor="service" className="label">
                        Service Interested In
                    </label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Select a service</option>
                        {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                        ))}
                    </select>
                </div>

                {/* Budget */}
                <div className="md:col-span-2">
                    <label htmlFor="budget" className="label">
                        Budget Range
                    </label>
                    <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Select your budget</option>
                        {budgets.map(budget => (
                            <option key={budget} value={budget}>{budget}</option>
                        ))}
                    </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                    <label htmlFor="message" className="label">
                        Project Details *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`input resize-none ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                </div>
            </div>

            {status === 'error' && (
                <div className="flex items-center gap-2 mt-4 p-4 bg-red-50 rounded-lg text-red-600">
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
