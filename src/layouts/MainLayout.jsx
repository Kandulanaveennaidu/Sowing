import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'

export default function MainLayout() {
    const location = useLocation()

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [location.pathname])

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />

            {/* Global WhatsApp Button */}
            <WhatsAppButton />
        </div>
    )
}
