import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navigation } from '../../data/navigation'
import Button from '../ui/Button'
import useScrollPosition from '../../hooks/useScrollPosition'
import sowingLogo from '../../assets/sowing.jpg'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { isScrolled } = useScrollPosition(50)
    const location = useLocation()

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false)
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
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-dark-100'
                : 'bg-transparent'
                }`}
        >
            <nav className="container-custom" role="navigation" aria-label="Main navigation">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Increased Size */}
                    <Link to="/" className="flex items-center gap-3 z-10">
                        <img
                            src={sowingLogo}
                            alt="Sowing Digital Agency"
                            className="h-16 w-auto rounded-xl shadow-md"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors ${isActive
                                        ? 'text-primary-500'
                                        : 'text-dark-600 hover:text-primary-500'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
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
                        className="lg:hidden p-2 text-dark-600 hover:text-dark-900 z-10"
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden fixed inset-0 bg-white z-40"
                    >
                        <div className="flex flex-col h-full pt-24 pb-8 px-6">
                            <div className="flex flex-col gap-2">
                                {navigation.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <NavLink
                                            to={item.href}
                                            className={({ isActive }) =>
                                                `block py-3 px-4 text-lg font-medium rounded-xl transition-colors ${isActive
                                                    ? 'bg-primary-50 text-primary-500'
                                                    : 'text-dark-600 hover:bg-dark-50'
                                                }`
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <Button to="/contact" className="w-full" size="lg">
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
