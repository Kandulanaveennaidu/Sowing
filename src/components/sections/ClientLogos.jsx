import { motion } from 'framer-motion'

// Import client logos
import brushNCuts from '../../assets/clients/brush-n-cuts.png'
import drMandula from '../../assets/clients/dr-mandula.png'
import hgsSchool from '../../assets/clients/hgs-school.png'
import rBrand from '../../assets/clients/r-brand.png'
import auroraConstruct from '../../assets/clients/aurora-construct.png'
import newShop from '../../assets/clients/new-shop.jpg'
import yashikaInfra from '../../assets/clients/yashika-infra.png'
import sowingClient from '../../assets/clients/sowing-client.png'
import kohshaAcademy from '../../assets/clients/kohsha-academy.png'
import kakatiyaConvention from '../../assets/clients/kakatiya-convention.png'

export default function ClientLogos() {
    const logos = [
        { id: 1, name: 'Brush N Cuts', logo: brushNCuts },
        { id: 2, name: 'Dr. Mandula', logo: drMandula },
        { id: 3, name: 'HGS School', logo: hgsSchool },
        { id: 4, name: 'R Brand', logo: rBrand },
        { id: 5, name: 'Aurora Construct', logo: auroraConstruct },
        { id: 6, name: 'New Shop', logo: newShop, hasWhiteBg: true },
        { id: 7, name: 'Yashika Infra', logo: yashikaInfra },
        { id: 8, name: 'Sowing', logo: sowingClient },
        { id: 9, name: 'Kohsha Academy', logo: kohshaAcademy },
        { id: 10, name: 'Kakatiya Convention', logo: kakatiyaConvention },
    ]

    return (
        <section className="py-12 bg-gray-950 border-b border-gray-900 overflow-hidden">
            <div className="container-custom mb-8">
                <p className="text-center text-gray-500 text-sm font-display font-medium uppercase tracking-widest">
                    Trusted by Innovative Companies
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10" />

                <motion.div
                    className="flex whitespace-nowrap gap-16 py-4 items-center"
                    animate={{
                        x: [0, -1035], // Adjust based on width
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // Slower for better visibility
                            ease: "linear",
                        },
                    }}
                >
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={`${logo.id}-${index}`} className="flex items-center justify-center min-w-[140px] h-28 hover:opacity-100 transition-opacity duration-300 opacity-80">
                            <img
                                src={logo.logo}
                                alt={`${logo.name} logo`}
                                className={`max-h-full max-w-[180px] object-contain ${logo.hasWhiteBg
                                    ? 'invert grayscale contrast-200 mix-blend-screen'
                                    : 'brightness-0 invert'
                                    }`}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
