import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Zap, Users, Award, CheckCircle, Clock, Briefcase, Smile, UserCheck } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/CTABanner'

const values = [
    {
        icon: Target,
        title: 'Results-Driven',
        description: 'Every decision we make is focused on delivering measurable outcomes for your business.'
    },
    {
        icon: Heart,
        title: 'User-Centric',
        description: 'We put users at the center of everything we design and build.'
    },
    {
        icon: Zap,
        title: 'Innovation',
        description: 'We stay at the forefront of technology and design trends.'
    },
    {
        icon: Users,
        title: 'Partnership',
        description: 'We work as an extension of your team, not just a vendor.'
    }
]

const stats = [
    { value: '5+', label: 'Years of Experience', icon: Clock },
    { value: '150+', label: 'Projects Completed', icon: Briefcase },
    { value: '50+', label: 'Happy Clients', icon: Smile },
    { value: '15+', label: 'Team Members', icon: UserCheck }
]

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Us | Sowing Digital Agency</title>
                <meta name="description" content="Learn about Sowing Digital Agency - our story, mission, values, and the team behind exceptional digital experiences." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-black via-gray-950 to-black">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase rounded-full bg-primary-500/20 text-primary-400"
                        >
                            About Us
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white mb-6"
                        >
                            We're a Team of <span className="gradient-text">Passionate</span> Digital Creators
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400"
                        >
                            Founded with a mission to help businesses thrive in the digital age through exceptional design and technology.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide uppercase rounded-full bg-primary-500/20 text-primary-400">
                                Our Story
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                Building Digital Excellence Since 2016
                            </h2>
                            <div className="space-y-4 text-gray-400">
                                <p>
                                    Sowing Digital Agency was founded with a simple belief: great design and technology can transform businesses. What started as a small team of passionate designers and developers has grown into a full-service digital agency serving clients worldwide.
                                </p>
                                <p>
                                    Over the years, we've had the privilege of working with startups, scale-ups, and enterprises across various industries. Each project has taught us something new and reinforced our commitment to delivering exceptional digital experiences.
                                </p>
                                <p>
                                    Today, we operate on a founder-first model with a scalable team of specialists. This means you get senior-level attention and expertise on every project, backed by a network of talented professionals who bring diverse skills to the table.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                    alt="Team collaboration"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-6 -left-6 bg-gray-900 rounded-xl p-6 shadow-xl border border-gray-800"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Award-Winning</p>
                                        <p className="text-sm text-gray-400">Design Agency</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-gray-950">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                To empower businesses with exceptional digital experiences that drive growth, inspire users, and create lasting impact. We believe in the power of design and technology to solve real problems and create meaningful value.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Our Vision
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                To be the go-to digital partner for ambitious businesses seeking transformative digital solutions. We envision a world where every business, regardless of size, has access to world-class design and development expertise.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading
                        label="Our Values"
                        title="What We Stand For"
                        subtitle="These core values guide everything we do and how we work with our clients."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center p-6"
                                >
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-500/20 mb-4">
                                        <Icon className="w-7 h-7 text-primary-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {value.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-gray-950">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide uppercase rounded-full bg-primary-500/20 text-primary-400"
                        >
                            Our Impact
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-display font-bold text-white"
                        >
                            Numbers That Speak
                        </motion.h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 text-center group hover:border-primary-500/50 transition-colors"
                                >
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 mb-4">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                                        {stat.value}
                                    </div>
                                    <p className="text-gray-400 font-medium">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide uppercase rounded-full bg-primary-500/20 text-primary-400">
                                Why Choose Us
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                The Sowing Difference
                            </h2>
                            <p className="text-gray-400 mb-8">
                                We're not just another agency. Here's what sets us apart and why clients choose to work with us.
                            </p>

                            <div className="space-y-4">
                                {[
                                    'Founder-first model with senior-level attention',
                                    'Proven track record with 150+ successful projects',
                                    'Transparent communication and collaboration',
                                    'Modern tech stack and best practices',
                                    'Post-launch support and optimization'
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                                    alt="Team working together"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    )
}
