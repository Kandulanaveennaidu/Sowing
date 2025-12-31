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
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src={sowingLogo}
                                alt="Sowing Digital Agency"
                                className="h-16 w-auto rounded-xl border-2 border-primary-500/30 shadow-lg shadow-primary-500/20"
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
                                            ? 'text-primary-400'
                                            : 'text-gray-300 hover:text-primary-400'
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
                                    className="h-14 w-auto rounded-xl border-2 border-primary-500/30 shadow-lg shadow-primary-500/20"
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


