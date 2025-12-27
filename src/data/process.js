import { Search, PenTool, Code, Rocket, MessageSquare, CheckCircle } from 'lucide-react'

export const processSteps = [
    {
        id: 1,
        phase: 'Discover',
        title: 'Discovery & Research',
        description: 'We dive deep into understanding your business, users, and goals. Through stakeholder interviews, competitive analysis, and user research, we uncover insights that inform our strategy.',
        icon: Search,
        color: 'from-blue-500 to-cyan-500',
        duration: 'Week 1-2',
        activities: [
            'Stakeholder interviews',
            'User research & personas',
            'Competitive analysis',
            'Technical requirements',
            'Project scoping'
        ],
        deliverables: [
            'Research findings report',
            'User personas',
            'Project roadmap',
            'Detailed proposal'
        ]
    },
    {
        id: 2,
        phase: 'Design',
        title: 'Design & Prototype',
        description: 'We create the blueprint for your digital product. From initial wireframes to high-fidelity designs, we iterate collaboratively to ensure the solution meets your needs and delights your users.',
        icon: PenTool,
        color: 'from-purple-500 to-pink-500',
        duration: 'Week 2-4',
        activities: [
            'Information architecture',
            'Wireframing',
            'Visual design',
            'Prototyping',
            'Design review cycles'
        ],
        deliverables: [
            'Wireframes',
            'High-fidelity designs',
            'Interactive prototype',
            'Design system'
        ]
    },
    {
        id: 3,
        phase: 'Develop',
        title: 'Development & Build',
        description: 'Our engineers bring designs to life with clean, scalable code. We follow agile methodologies with regular demos and feedback loops to ensure the final product exceeds expectations.',
        icon: Code,
        color: 'from-emerald-500 to-teal-500',
        duration: 'Week 4-10',
        activities: [
            'Frontend development',
            'Backend integration',
            'API development',
            'Quality assurance',
            'Performance optimization'
        ],
        deliverables: [
            'Working application',
            'Technical documentation',
            'Testing reports',
            'Staging environment'
        ]
    },
    {
        id: 4,
        phase: 'Deliver',
        title: 'Launch & Support',
        description: 'We ensure a smooth launch with comprehensive testing and deployment. Post-launch, we provide ongoing support and optimization to ensure continued success.',
        icon: Rocket,
        color: 'from-orange-500 to-red-500',
        duration: 'Week 10-12+',
        activities: [
            'Final testing & QA',
            'Production deployment',
            'Performance monitoring',
            'Team training',
            'Post-launch optimization'
        ],
        deliverables: [
            'Live product',
            'Launch checklist',
            'Training materials',
            'Support documentation'
        ]
    }
]

export const processOverview = [
    {
        step: 1,
        title: 'Discover',
        description: 'Research & Strategy',
        icon: Search
    },
    {
        step: 2,
        title: 'Design',
        description: 'Prototype & Iterate',
        icon: PenTool
    },
    {
        step: 3,
        title: 'Develop',
        description: 'Build & Test',
        icon: Code
    },
    {
        step: 4,
        title: 'Deliver',
        description: 'Launch & Support',
        icon: Rocket
    }
]

export default processSteps
