import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function TestimonialCard({
    quote,
    author,
    role,
    company,
    avatar,
    rating = 5,
    variant = 'default'
}) {
    const isLarge = variant === 'large'

    return (
        <motion.div
            whileHover={{ y: -4 }}
            className={`
        relative bg-gray-900 rounded-2xl border border-gray-800 shadow-sm hover:border-primary-500/50 transition-colors
        ${isLarge ? 'p-8 md:p-12' : 'p-6'}
      `}
        >
            {/* Quote icon */}
            <Quote className={`text-primary-500/30 mb-4 ${isLarge ? 'w-12 h-12' : 'w-8 h-8'}`} />

            {/* Rating */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-700'
                            }`}
                    />
                ))}
            </div>

            {/* Quote */}
            <blockquote className={`text-gray-300 mb-6 leading-relaxed ${isLarge ? 'text-lg md:text-xl' : ''}`}>
                "{quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
                {avatar && (
                    <img
                        src={avatar}
                        alt={author}
                        className={`rounded-full object-cover ${isLarge ? 'w-14 h-14' : 'w-12 h-12'}`}
                    />
                )}
                <div>
                    <p className="font-semibold text-white">{author}</p>
                    {role && company && (
                        <p className="text-sm text-gray-500">
                            {role} at {company}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
