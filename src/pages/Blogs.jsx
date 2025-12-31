import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/CTABanner'

export default function Blogs() {
    return (
        <>
            <Helmet>
                <title>Blogs | Sowing Digital Agency</title>
                <meta name="description" content="Read our latest insights on digital marketing, design, and technology." />
            </Helmet>

            <section className="pt-32 pb-20 bg-gray-950 min-h-[60vh]">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <SectionHeading
                            label="Our Blog"
                            title="Latest Insights"
                            subtitle="Coming soon. We are crafting valuable content for you."
                        />
                    </motion.div>
                </div>
            </section>

            <CTABanner />
        </>
    )
}
