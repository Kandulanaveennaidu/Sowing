import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import TestimonialCard from '../components/ui/TestimonialCard'
import CTABanner from '../components/sections/CTABanner'
import { testimonials } from '../data/testimonials'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

export default function Testimonials() {
    const swiperRef = useRef(null)

    return (
        <>
            <Helmet>
                <title>Testimonials | Sowing Digital Agency</title>
                <meta name="description" content="Read what our clients say about working with Sowing Digital Agency. Real testimonials from real businesses." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"
                        >
                            Testimonials
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-dark-900 dark:text-white mb-6"
                        >
                            What Our <span className="gradient-text">Clients Say</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-dark-500 dark:text-dark-400"
                        >
                            Don't just take our word for it. Here's what businesses say about working with us.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Featured Testimonial */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <TestimonialCard
                            quote={testimonials[0].quote}
                            author={testimonials[0].author}
                            role={testimonials[0].role}
                            company={testimonials[0].company}
                            avatar={testimonials[0].avatar}
                            rating={testimonials[0].rating}
                            variant="large"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Carousel */}
            <section className="section-padding bg-dark-50 dark:bg-dark-800/50 overflow-hidden">
                <div className="container-custom">
                    <SectionHeading
                        label="More Reviews"
                        title="Stories from Our Clients"
                        subtitle="Every project is a partnership. Here's how we've helped businesses succeed."
                    />

                    <div className="relative">
                        {/* Navigation buttons */}
                        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none z-10 px-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="w-12 h-12 rounded-full bg-white dark:bg-dark-700 shadow-lg flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-primary-500 hover:text-white transition-colors pointer-events-auto"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => swiperRef.current?.slideNext()}
                                className="w-12 h-12 rounded-full bg-white dark:bg-dark-700 shadow-lg flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-primary-500 hover:text-white transition-colors pointer-events-auto"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>

                        <Swiper
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper
                            }}
                            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2,
                                slideShadows: false,
                            }}
                            spaceBetween={32}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.5,
                                },
                                1024: {
                                    slidesPerView: 2.5,
                                },
                            }}
                            className="pb-12"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <TestimonialCard
                                        quote={testimonial.quote}
                                        author={testimonial.author}
                                        role={testimonial.role}
                                        company={testimonial.company}
                                        avatar={testimonial.avatar}
                                        rating={testimonial.rating}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* All Testimonials Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading
                        label="All Reviews"
                        title="Every Voice Matters"
                        subtitle="Read all testimonials from our valued clients."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <TestimonialCard
                                    quote={testimonial.quote}
                                    author={testimonial.author}
                                    role={testimonial.role}
                                    company={testimonial.company}
                                    avatar={testimonial.avatar}
                                    rating={testimonial.rating}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    )
}
