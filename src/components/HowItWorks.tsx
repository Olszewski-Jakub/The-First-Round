"use client";
import { m, useReducedMotion } from 'framer-motion';

const steps = [
    {
        number: '01',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        title: 'Search Your Stop',
        description: 'Enter a stop name, route number, or destination. BusHive finds every option near you in seconds.',
    },
    {
        number: '02',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        ),
        title: 'Track in Real-Time',
        description: 'Watch live bus locations on an interactive map and see exact arrival ETAs updated every few seconds.',
    },
    {
        number: '03',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Board With Confidence',
        description: 'Know exactly when to leave the house. Never rush, never wait longer than you need to.',
    },
];

export default function HowItWorks() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section header */}
                <m.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
                        How It Works
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Simple as{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                            three steps
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xl mx-auto">
                        Getting to your destination on time has never been easier.
                    </p>
                </m.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-2/3 h-px">
                        <div className="w-full h-full border-t-2 border-dashed border-cyan-500/20" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <m.div
                                key={index}
                                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{
                                    duration: 0.6,
                                    delay: prefersReducedMotion ? 0 : index * 0.15,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="flex flex-col items-center text-center relative"
                            >
                                {/* Decorative large number */}
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-7xl font-black text-cyan-500/8 select-none pointer-events-none font-mono">
                                    {step.number}
                                </span>

                                {/* Icon circle */}
                                <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-sky-600/15 border border-cyan-500/25 flex items-center justify-center mb-6 text-cyan-400 shadow-lg shadow-cyan-500/10">
                                    {step.icon}
                                    {/* Step number badge */}
                                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 text-white text-xs font-bold flex items-center justify-center shadow-lg">
                                        {index + 1}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm max-w-xs">{step.description}</p>
                            </m.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
