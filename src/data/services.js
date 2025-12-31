import {
    Palette,
    Code,
    Sparkles,
    Layers,
    TrendingUp,
    Search,
    PenTool,
    Smartphone,
    Users,
    Zap,
    Target,
    BarChart3,
    Globe,
    Megaphone,
    ShoppingCart,
    FileImage,
    Brush,
    FileText,
    Video
} from 'lucide-react'

export const services = [
    {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        shortDescription: 'Creating intuitive, beautiful interfaces that users love.',
        description: 'We craft exceptional user experiences through research-driven design. Our approach combines aesthetic excellence with usability principles to create digital products that delight users and achieve business objectives.',
        icon: Palette,
        color: 'from-pink-500 to-rose-500',
        features: [
            'User Research & Personas',
            'Information Architecture',
            'Wireframing & Prototyping',
            'Visual Design Systems',
            'Usability Testing',
            'Design Handoff'
        ],
        deliverables: [
            'User research report with insights and recommendations',
            'Interactive Figma prototypes',
            'Complete UI design with components library',
            'Design system documentation',
            'Usability test results and iterations'
        ],
        benefits: [
            'Increased user satisfaction and engagement',
            'Reduced development costs through clear specifications',
            'Competitive advantage through superior user experience',
            'Higher conversion rates and business metrics'
        ],
        process: [
            { step: 'Research', description: 'Understanding users, competitors, and business goals' },
            { step: 'Strategy', description: 'Defining the experience architecture' },
            { step: 'Design', description: 'Creating beautiful, functional interfaces' },
            { step: 'Validate', description: 'Testing and iterating based on feedback' }
        ]
    },
    {
        id: 'web-development',
        title: 'Web Development',
        shortDescription: 'Building fast, scalable web applications with modern tech.',
        description: 'We build high-performance web applications using cutting-edge technologies. From React-powered SPAs to full-stack solutions, we deliver code that\'s clean, maintainable, and built for scale.',
        icon: Code,
        color: 'from-blue-500 to-cyan-500',
        features: [
            'React & Next.js Applications',
            'E-commerce Solutions',
            'Progressive Web Apps',
            'API Development',
            'Performance Optimization',
            'Cloud Deployment'
        ],
        deliverables: [
            'Production-ready web application',
            'Comprehensive documentation',
            'Performance optimization report',
            'Testing suite and CI/CD pipeline',
            'Deployment and hosting setup'
        ],
        benefits: [
            'Lightning-fast load times and performance',
            'SEO-optimized for better visibility',
            'Scalable architecture for growth',
            '24/7 reliability and uptime'
        ],
        process: [
            { step: 'Plan', description: 'Technical architecture and stack selection' },
            { step: 'Build', description: 'Agile development with regular demos' },
            { step: 'Test', description: 'Rigorous QA and performance testing' },
            { step: 'Launch', description: 'Deployment and post-launch support' }
        ]
    },
    {
        id: 'logo-design',
        title: 'Logo Design',
        shortDescription: 'Memorable logos that capture your brand essence.',
        description: 'Your logo is the face of your brand. We create distinctive, memorable logos that communicate your brand\'s personality and values at a glance. Our logo design process ensures your mark stands out in any context.',
        icon: FileImage,
        color: 'from-indigo-500 to-purple-500',
        features: [
            'Brand Discovery Session',
            'Concept Development',
            'Multiple Design Directions',
            'Color Psychology',
            'Typography Selection',
            'Logo Variations & Formats'
        ],
        deliverables: [
            'Primary logo in all formats (SVG, PNG, PDF)',
            'Logo variations (horizontal, vertical, icon)',
            'Color and monochrome versions',
            'Logo usage guidelines',
            'Source files (AI, Figma)'
        ],
        benefits: [
            'Instant brand recognition',
            'Professional credibility',
            'Versatile across all media',
            'Timeless design that scales'
        ],
        process: [
            { step: 'Discover', description: 'Understanding your brand vision and values' },
            { step: 'Explore', description: 'Creating multiple concept directions' },
            { step: 'Refine', description: 'Iterating on the chosen concept' },
            { step: 'Finalize', description: 'Delivering complete logo package' }
        ]
    },
    {
        id: 'branding',
        title: 'Branding & Identity',
        shortDescription: 'Crafting memorable brands that stand out and connect.',
        description: 'We create brand identities that capture the essence of your business and resonate with your audience. From logo design to complete brand systems, we build visual languages that tell your story.',
        icon: Sparkles,
        color: 'from-purple-500 to-violet-500',
        features: [
            'Brand Strategy & Positioning',
            'Logo Design & Variations',
            'Color & Typography Systems',
            'Brand Guidelines',
            'Marketing Collateral',
            'Brand Voice & Messaging'
        ],
        deliverables: [
            'Brand strategy document',
            'Logo in all required formats',
            'Complete brand guidelines book',
            'Marketing template designs',
            'Social media brand kit'
        ],
        benefits: [
            'Distinctive market positioning',
            'Consistent brand recognition',
            'Emotional connection with customers',
            'Professional credibility and trust'
        ],
        process: [
            { step: 'Discover', description: 'Understanding your vision and values' },
            { step: 'Define', description: 'Crafting strategy and positioning' },
            { step: 'Design', description: 'Creating the visual identity' },
            { step: 'Deliver', description: 'Guidelines and asset handoff' }
        ]
    },
    {
        id: 'seo-optimization',
        title: 'SEO Optimization',
        shortDescription: 'Boost your visibility and rank higher on search engines.',
        description: 'We help your website get discovered by the right audience. Our SEO services combine technical optimization, content strategy, and link building to improve your search rankings and drive organic traffic.',
        icon: Search,
        color: 'from-green-500 to-emerald-500',
        features: [
            'Technical SEO Audit',
            'Keyword Research & Strategy',
            'On-Page Optimization',
            'Content Optimization',
            'Link Building',
            'Local SEO'
        ],
        deliverables: [
            'Comprehensive SEO audit report',
            'Keyword strategy document',
            'Technical optimization implementation',
            'Monthly ranking reports',
            'Competitor analysis'
        ],
        benefits: [
            'Higher search engine rankings',
            'Increased organic traffic',
            'Better user experience',
            'Long-term sustainable growth'
        ],
        process: [
            { step: 'Audit', description: 'Analyzing current SEO performance' },
            { step: 'Strategize', description: 'Developing keyword and content strategy' },
            { step: 'Optimize', description: 'Implementing technical and on-page fixes' },
            { step: 'Monitor', description: 'Tracking rankings and refining approach' }
        ]
    },
    {
        id: 'product-design',
        title: 'Product Design',
        shortDescription: 'End-to-end design for digital products that succeed.',
        description: 'We take products from concept to launch with strategic product design. Whether you\'re building an MVP or scaling an existing product, we create experiences that users love and businesses thrive on.',
        icon: Layers,
        color: 'from-orange-500 to-amber-500',
        features: [
            'Product Strategy',
            'MVP Design & Validation',
            'SaaS Dashboard Design',
            'Mobile App Design',
            'Design Systems',
            'Product Analytics'
        ],
        deliverables: [
            'Product roadmap and strategy',
            'High-fidelity product designs',
            'Interactive clickable prototype',
            'Scalable design system',
            'User testing insights'
        ],
        benefits: [
            'Faster time to market',
            'Validated product-market fit',
            'Reduced risk through iteration',
            'Scalable design foundation'
        ],
        process: [
            { step: 'Ideate', description: 'Exploring possibilities and opportunities' },
            { step: 'Prototype', description: 'Rapid prototyping and validation' },
            { step: 'Refine', description: 'Iterating based on user feedback' },
            { step: 'Scale', description: 'Building for growth and expansion' }
        ]
    },
    {
        id: 'mobile-app-design',
        title: 'Mobile App Design',
        shortDescription: 'Native app experiences for iOS and Android.',
        description: 'We design beautiful, intuitive mobile applications that users love. From concept to app store, we create native experiences optimized for iOS and Android platforms with attention to platform-specific guidelines.',
        icon: Smartphone,
        color: 'from-cyan-500 to-blue-500',
        features: [
            'iOS & Android Design',
            'User Flow Mapping',
            'Interactive Prototypes',
            'Platform Guidelines',
            'App Store Assets',
            'Micro-interactions'
        ],
        deliverables: [
            'Complete app UI designs',
            'Interactive prototype',
            'App store screenshots & graphics',
            'Icon design',
            'Design specifications for developers'
        ],
        benefits: [
            'Engaging user experience',
            'Higher app store ratings',
            'Increased user retention',
            'Reduced development iterations'
        ],
        process: [
            { step: 'Research', description: 'Understanding users and platform' },
            { step: 'Design', description: 'Creating intuitive interfaces' },
            { step: 'Prototype', description: 'Testing flows and interactions' },
            { step: 'Handoff', description: 'Developer-ready specifications' }
        ]
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce Solutions',
        shortDescription: 'Online stores that convert visitors into customers.',
        description: 'We build e-commerce experiences that drive sales. From Shopify to custom solutions, we create online stores with seamless checkout flows, compelling product presentations, and optimized conversion funnels.',
        icon: ShoppingCart,
        color: 'from-rose-500 to-pink-500',
        features: [
            'Shopify & WooCommerce',
            'Custom E-commerce Development',
            'Payment Integration',
            'Inventory Management',
            'Checkout Optimization',
            'Mobile Commerce'
        ],
        deliverables: [
            'Fully functional online store',
            'Payment gateway setup',
            'Product catalog setup',
            'Shipping integration',
            'Admin training'
        ],
        benefits: [
            'Increased online sales',
            'Lower cart abandonment',
            'Seamless customer experience',
            'Scalable platform'
        ],
        process: [
            { step: 'Plan', description: 'Understanding products and customers' },
            { step: 'Build', description: 'Developing the store platform' },
            { step: 'Optimize', description: 'Conversion rate optimization' },
            { step: 'Launch', description: 'Go-live and ongoing support' }
        ]
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        shortDescription: 'Strategic campaigns that grow your online presence.',
        description: 'We help you reach and engage your target audience through strategic digital marketing. From social media to paid advertising, we create campaigns that build awareness, drive traffic, and generate leads.',
        icon: Megaphone,
        color: 'from-yellow-500 to-orange-500',
        features: [
            'Social Media Marketing',
            'PPC & Paid Advertising',
            'Content Marketing',
            'Email Marketing',
            'Analytics & Reporting',
            'Marketing Automation'
        ],
        deliverables: [
            'Marketing strategy document',
            'Campaign setup and management',
            'Content calendar',
            'Performance reports',
            'Ad creative designs'
        ],
        benefits: [
            'Increased brand awareness',
            'Higher quality leads',
            'Better ROI on ad spend',
            'Data-driven insights'
        ],
        process: [
            { step: 'Analyze', description: 'Understanding audience and goals' },
            { step: 'Plan', description: 'Developing marketing strategy' },
            { step: 'Execute', description: 'Launching and managing campaigns' },
            { step: 'Optimize', description: 'Continuous improvement' }
        ]
    },
    {
        id: 'digital-strategy',
        title: 'Digital Strategy',
        shortDescription: 'Data-driven strategies that accelerate growth.',
        description: 'We help businesses navigate digital transformation with strategic consulting. From UX audits to conversion optimization, we provide actionable insights that drive measurable results.',
        icon: TrendingUp,
        color: 'from-emerald-500 to-teal-500',
        features: [
            'UX Audits & Assessments',
            'Conversion Optimization',
            'Digital Transformation',
            'Analytics & Insights',
            'Competitive Analysis',
            'Growth Strategy'
        ],
        deliverables: [
            'Comprehensive UX audit report',
            'Conversion optimization roadmap',
            'Competitive analysis document',
            'Analytics dashboard setup',
            'Strategic recommendations'
        ],
        benefits: [
            'Data-informed decision making',
            'Improved conversion metrics',
            'Clear digital roadmap',
            'Measurable ROI on initiatives'
        ],
        process: [
            { step: 'Analyze', description: 'Auditing current state and data' },
            { step: 'Strategize', description: 'Developing the transformation plan' },
            { step: 'Implement', description: 'Executing high-impact initiatives' },
            { step: 'Measure', description: 'Tracking results and optimizing' }
        ]
    },
    {
        id: 'graphic-design',
        title: 'Graphic Design',
        shortDescription: 'Visual designs that communicate and captivate.',
        description: 'We create stunning visual designs for print and digital media. From marketing materials to social media graphics, our designs capture attention and communicate your message effectively.',
        icon: Brush,
        color: 'from-fuchsia-500 to-pink-500',
        features: [
            'Marketing Collateral',
            'Social Media Graphics',
            'Presentation Design',
            'Print Design',
            'Infographics',
            'Banner Design'
        ],
        deliverables: [
            'High-resolution design files',
            'Print-ready formats',
            'Social media sized graphics',
            'Source files (AI, PSD)',
            'Brand-aligned visuals'
        ],
        benefits: [
            'Professional visual presence',
            'Consistent brand imagery',
            'Engaging marketing materials',
            'Higher audience engagement'
        ],
        process: [
            { step: 'Brief', description: 'Understanding design requirements' },
            { step: 'Concept', description: 'Developing creative concepts' },
            { step: 'Design', description: 'Creating polished designs' },
            { step: 'Deliver', description: 'Final files in all formats' }
        ]
    },
    {
        id: 'content-writing',
        title: 'Content Writing',
        shortDescription: 'Compelling content that engages and converts.',
        description: 'We craft compelling content that tells your story and drives action. From website copy to blog posts, our words connect with your audience and support your business goals.',
        icon: FileText,
        color: 'from-sky-500 to-blue-500',
        features: [
            'Website Copywriting',
            'Blog Posts & Articles',
            'SEO Content',
            'Email Campaigns',
            'Social Media Content',
            'Product Descriptions'
        ],
        deliverables: [
            'SEO-optimized content',
            'Edited and proofread copy',
            'Content calendar',
            'Brand voice guidelines',
            'Multiple revision rounds'
        ],
        benefits: [
            'Improved search rankings',
            'Higher engagement rates',
            'Consistent brand voice',
            'Better conversion rates'
        ],
        process: [
            { step: 'Research', description: 'Understanding audience and goals' },
            { step: 'Outline', description: 'Structuring the content' },
            { step: 'Write', description: 'Crafting compelling copy' },
            { step: 'Refine', description: 'Editing and optimization' }
        ]
    },
    {
        id: 'video-creation',
        title: 'Video Creation',
        shortDescription: 'Engaging videos that tell your brand story.',
        description: 'We produce high-quality videos that captivate audiences and communicate your message. From promotional videos to social media content, we bring your vision to life.',
        icon: Video,
        color: 'from-red-500 to-rose-500',
        features: [
            'Promotional Videos',
            'Social Media Videos',
            'Motion Graphics',
            'Video Editing',
            'Animation',
            'Video Ads'
        ],
        deliverables: [
            'High-quality video files',
            'Multiple format exports',
            'Social media optimized versions',
            'Thumbnail designs',
            'Raw footage (if applicable)'
        ],
        benefits: [
            'Higher engagement rates',
            'Better brand recall',
            'Increased conversions',
            'Shareable content'
        ],
        process: [
            { step: 'Concept', description: 'Developing the video concept' },
            { step: 'Script', description: 'Writing and storyboarding' },
            { step: 'Produce', description: 'Filming and editing' },
            { step: 'Deliver', description: 'Final video in all formats' }
        ]
    }
]

export const servicesOverview = [
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Research-driven design that creates intuitive and beautiful user experiences.',
        link: '/services/ui-ux-design'
    },
    {
        icon: Code,
        title: 'Web Development',
        description: 'High-performance web applications built with modern technologies.',
        link: '/services/web-development'
    },
    {
        icon: FileImage,
        title: 'Logo Design',
        description: 'Memorable logos that capture your brand essence and values.',
        link: '/services/logo-design'
    },
    {
        icon: Search,
        title: 'SEO Optimization',
        description: 'Boost your visibility and rank higher on search engines.',
        link: '/services/seo-optimization'
    },
    {
        icon: Megaphone,
        title: 'Digital Marketing',
        description: 'Strategic campaigns that grow your online presence.',
        link: '/services/digital-marketing'
    },
    {
        icon: Brush,
        title: 'Graphic Design',
        description: 'Visual designs for print and digital that captivate audiences.',
        link: '/services/graphic-design'
    },
    {
        icon: FileText,
        title: 'Content Writing',
        description: 'Compelling content that engages your audience and converts.',
        link: '/services/content-writing'
    },
    {
        icon: Video,
        title: 'Video Creation',
        description: 'Engaging videos that tell your brand story effectively.',
        link: '/services/video-creation'
    },
    {
        icon: Smartphone,
        title: 'Mobile App Design',
        description: 'Native app experiences for iOS and Android platforms.',
        link: '/services/mobile-app-design'
    }
]

export default services

