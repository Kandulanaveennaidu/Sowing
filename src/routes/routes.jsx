import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import ServiceDetail from '../pages/ServiceDetail'
import Portfolio from '../pages/Portfolio'
import CaseStudy from '../pages/CaseStudy'
import Process from '../pages/Process'
import Testimonials from '../pages/Testimonials'
import Contact from '../pages/Contact'
// import Blogs from '../pages/Blogs'

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:caseStudyId" element={<CaseStudy />} />
                <Route path="/process" element={<Process />} />
                {/* <Route path="/blogs" element={<Blogs />} /> */}
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                {/* 404 fallback */}
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    )
}
