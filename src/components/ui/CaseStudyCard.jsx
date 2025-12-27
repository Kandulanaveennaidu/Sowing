import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function CaseStudyCard({
    id,
    title,
    client,
    category,
    tags,
    thumbnail,
    summary
}) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-2xl overflow-hidden border border-dark-200 shadow-sm hover:shadow-xl transition-all duration-300"
        >
            <Link to={`/portfolio/${id}`}>
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* View button */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                            <ArrowUpRight className="w-5 h-5 text-dark-900" />
                        </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-white text-dark-800 shadow-sm">
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm font-medium text-dark-600 mb-3">
                        {client}
                    </p>
                    <p className="text-sm text-dark-600 line-clamp-2">
                        {summary}
                    </p>
                </div>
            </Link>
        </motion.div>
    )
}
