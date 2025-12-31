import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navigation } from '../../data/navigation'
import { servicesOverview } from '../../data/services'
import Button from '../ui/Button'
import useScrollPosition from '../../hooks/useScrollPosition'
import sowingLogo from '../../assets/Sowing logo- Tbg.png'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const { isScrolled } = useScrollPosition(50)
    const location = useLocation()

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false)
        setIsServicesOpen(false)
    }, [location.pathname])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    return (
        <>
            {/* Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-black/95 backdrop-blur-md shadow-sm border-b border-white/10'
                    : 'bg-transparent'
                    }`}
            >
                <nav className="container-custom" role="navigation" aria-label="Main navigation">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <img
                                src={sowingLogo}
                                alt="Sowing Digital Agency"
                                className="h-44 w-auto object-contain brightness-0 invert"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navigation.map((item) => (
                                item.name === 'Services' ? (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => setIsServicesOpen(true)}
                                        onMouseLeave={() => setIsServicesOpen(false)}
                                    >
                                        <NavLink
                                            to={item.href}
                                            className={({ isActive }) =>
                                                `text-sm font-medium transition-colors flex items-center gap-1 ${isActive
                                                    ? 'text-primary-400'
                                                    : 'text-gray-300 hover:text-primary-400'
                                                }`
                                            }
                                        >
                                            {item.name}
                                            <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                        </NavLink>

                                        {/* Services Dropdown */}
                                        <AnimatePresence>
                                            {isServicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-800 shadow-2xl p-6 grid grid-cols-2 gap-3"
                                                >
                                                    {servicesOverview.map((service) => {
                                                        const Icon = service.icon
                                                        return (
                                                            <Link
                                                                key={service.title}
                                                                to={service.link}
                                                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors group"
                                                            >
                                                                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
                                                                    <Icon className="w-5 h-5 text-primary-400" />
                                                                </div>
                                                                <div>
                                                                    <p className="font-medium text-white text-sm group-hover:text-primary-400 transition-colors">{service.title}</p>
                                                                    <p className="text-xs text-gray-500 line-clamp-1">{service.description}</p>
                                                                </div>
                                                            </Link>
                                                        )
                                                    })}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className={({ isActive }) =>
                                            `text-sm font-medium transition-colors ${isActive
                                                ? 'text-primary-400'
                                                : 'text-gray-300 hover:text-primary-400'
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                )
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Button to="/contact" size="sm">
                                Get Started
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-gray-300 hover:text-white"
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-7 h-7" />
                            ) : (
                                <Menu className="w-7 h-7" />
                            )}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu - Full Screen Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden fixed inset-0 z-[100] bg-black"
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between h-20 px-4 border-b border-gray-800">
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                                <img
                                    src={sowingLogo}
                                    alt="Sowing Digital Agency"
                                    className="h-36 w-auto object-contain brightness-0 invert"
                                />
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-white hover:text-primary-400 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col h-[calc(100%-80px)] p-6 overflow-y-auto">
                            <div className="flex flex-col gap-2">
                                {navigation.map((item, index) => (
                                    item.name === 'Services' ? (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <button
                                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                                className="w-full flex items-center justify-between py-4 px-4 text-xl font-medium rounded-xl transition-colors text-white hover:bg-gray-800"
                                            >
                                                {item.name}
                                                <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {isServicesOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pl-6 py-2 space-y-1">
                                                            {servicesOverview.map((service) => (
                                                                <Link
                                                                    key={service.title}
                                                                    to={service.link}
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                    className="block py-2 px-4 text-gray-400 hover:text-primary-400 transition-colors text-sm"
                                                                >
                                                                    {service.title}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <NavLink
                                                to={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={({ isActive }) =>
                                                    `block py-4 px-4 text-xl font-medium rounded-xl transition-colors ${isActive
                                                        ? 'bg-primary-500/20 text-primary-400'
                                                        : 'text-white hover:bg-gray-800'
                                                    }`
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        </motion.div>
                                    )
                                ))}
                            </div>

                            <div className="mt-auto pt-6">
                                <Button
                                    to="/contact"
                                    className="w-full"
                                    size="lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
