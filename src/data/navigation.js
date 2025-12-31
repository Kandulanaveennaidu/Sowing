import { BarChart3, TrendingUp, Sprout, Award } from 'lucide-react'

export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' }
]

export const footerLinks = {
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Process', href: '/process' },
        { name: 'Case Studies', href: '/portfolio' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Contact', href: '/contact' }
    ],
    services: [
        { name: 'UI/UX Design', href: '/services/ui-ux-design' },
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Logo Design', href: '/services/logo-design' },
        { name: 'SEO Optimization', href: '/services/seo-optimization' },
        { name: 'Digital Marketing', href: '/services/digital-marketing' }
    ],
    resources: [
        { name: 'Blog', href: '#' },
        { name: 'Resources', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' }
    ]
}

export const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com', icon: 'Twitter' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/sowingspace/', icon: 'Linkedin' },
    { name: 'Instagram', href: 'https://www.instagram.com/sowing_space?igsh=bWZoZWpzdGU2em9n', icon: 'Instagram' },
    { name: 'WhatsApp', href: 'https://wa.me/919550052294', icon: 'MessageCircle' }
]

export const contactInfo = {
    email: 'sowingspace01@gmail.com',
    phone: '+91 95500 52294',
    whatsapp: '+919550052294',
    address: 'Ayyappa Society, Madhapur, Hyderabad',
    taglines: [
        { text: 'Digital Marketing | Management', icon: BarChart3 },
        { text: 'Make your Business - A Brand', icon: TrendingUp },
        { text: 'Digital seeds that grow brands', icon: Sprout },
        { text: 'From vision to victory', icon: Award }
    ]
}

export const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '150+', label: 'Projects Delivered' },
    { value: '20+', label: 'Happy Clients' },
    { value: '15+', label: 'Team Members' }
]

export const clients = [
    'PayFlow',
    'Luxe Collective',
    'MediConnect',
    'Workflow Pro',
    'LearnPath',
    'GlobalTech',
    'NexGen',
    'Brightwave'
]

export default navigation
