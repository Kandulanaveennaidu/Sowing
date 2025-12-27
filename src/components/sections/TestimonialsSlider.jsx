import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from '../ui/TestimonialCard'
import { testimonials } from '../../data/testimonials'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function TestimonialsSlider() {
    const swiperRef = useRef(null)

    return (
        <section className="section-padding bg-dark-50 dark:bg-dark-800/50 overflow-hidden">
            <div className="container-custom">
                <SectionHeading
                    label="Testimonials"
                    title="What Our Clients Say"
                    subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
                />

                <div className="relative">
                    {/* Navigation buttons */}
                    <div className="hidden md:flex absolute -top-20 right-0 gap-2 z-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-12 h-12 rounded-full bg-white dark:bg-dark-700 shadow-md flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-primary-500 hover:text-white transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-12 h-12 rounded-full bg-white dark:bg-dark-700 shadow-md flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-primary-500 hover:text-white transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>

                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={24}
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
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
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
    )
}
