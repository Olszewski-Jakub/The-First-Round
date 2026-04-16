"use client";
import { m, useReducedMotion } from 'framer-motion';

const features = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Real-time Tracking',
        description: 'Know exactly where your bus is with live GPS location tracking, eliminating unnecessary waiting time.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Smart Schedules',
        description: 'Access up-to-date bus schedules for all routes, helping you plan your day efficiently.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        ),
        title: 'Trip Planning',
        description: "Plan your journey by entering start and end locations, and we'll show you the optimal route.",
    },
];

export default function Features() {
    const prefersReducedMotion = useReducedMotion();

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
        },
    };

    return (
        <section className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Section header */}
                <m.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
                        Features
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Choose{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                            BusHive
                        </span>
                        ?
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        We&apos;re building a fast, easy-to-use bus tracking app to improve your daily commute.
                    </p>
                </m.div>

                {/* Feature cards */}
                <m.div
                    className="grid md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {features.map((feature, index) => (
                        <m.div
                            key={index}
                            variants={cardVariants}
                            className="group bg-white/5 backdrop-blur-sm border border-white/8 rounded-2xl p-8 hover:bg-white/8 hover:border-cyan-500/30 transition-all duration-300 cursor-default"
                        >
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500/15 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
                        </m.div>
                    ))}
                </m.div>
            </div>
        </section>
    );
}
