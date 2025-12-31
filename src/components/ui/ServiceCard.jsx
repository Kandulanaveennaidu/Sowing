import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ icon: Icon, title, description, link }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="group relative bg-gray-900/80 rounded-2xl p-6 border border-gray-800 shadow-sm hover:shadow-xl hover:border-primary-500/50 transition-all duration-300"
        >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-2">
                {title}
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {description}
            </p>

            {/* Link */}
            <Link
                to={link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 group-hover:gap-3 transition-all"
            >
                Learn More
                <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Hover gradient border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl" style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.15))',
                }} />
            </div>
        </motion.div>
    )
}
