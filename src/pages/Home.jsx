import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import ClientLogos from '../components/sections/ClientLogos'
import ServicesOverview from '../components/sections/ServicesOverview'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import TestimonialsSlider from '../components/sections/TestimonialsSlider'
import CTABanner from '../components/sections/CTABanner'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Sowing Digital Agency | Design & Development</title>
                <meta name="description" content="Digital Marketing & Management. Make your Business a Brand. We offer UI/UX Design, Web Development, Logo Design, SEO, and Digital Marketing services." />
            </Helmet>

            <Hero />
            <ClientLogos />
            <ServicesOverview />
            <ProcessTimeline />
            <TestimonialsSlider />
            <CTABanner />
        </>
    )
}
