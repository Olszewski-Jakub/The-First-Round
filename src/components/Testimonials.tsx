"use client";
import { m, useReducedMotion } from 'framer-motion';

const testimonials = [
    {
        quote: "Finally an app that actually shows where the bus is. I've been waiting for something like this for years. My morning commute is so much less stressful now.",
        name: "Sarah M.",
        role: "Software Developer",
        avatar: "SM",
        color: "from-cyan-500 to-sky-600",
    },
    {
        quote: "No more guessing when the bus will arrive. BusHive completely changed my morning routine. I leave the house at exactly the right time every day.",
        name: "James K.",
        role: "University Student",
        avatar: "JK",
        color: "from-sky-500 to-blue-600",
    },
    {
        quote: "The trip planning feature is exactly what I needed. Simple, accurate, and fast. I recommended it to everyone in my office on day one.",
        name: "Olivia R.",
        role: "Daily Commuter",
        avatar: "OR",
        color: "from-blue-500 to-indigo-600",
    },
];

function StarRating() {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const prefersReducedMotion = useReducedMotion();

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: prefersReducedMotion ? 0 : 0.14 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
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
                        Early Feedback
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Loved by{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                            early testers
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xl mx-auto">
                        Here&apos;s what people on our waitlist are saying.
                    </p>
                </m.div>

                {/* Cards */}
                <m.div
                    className="grid md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {testimonials.map((t, index) => (
                        <m.div
                            key={index}
                            variants={cardVariants}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/8 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30"
                            style={{ '--glow-color': 'rgba(6, 182, 212, 0.15)' } as React.CSSProperties}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(6, 182, 212, 0.18), 0 20px 40px rgba(0,0,0,0.3)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.boxShadow = '';
                            }}
                        >
                            {/* Quote mark */}
                            <div className="text-5xl font-serif text-cyan-500/20 leading-none mb-4 select-none">&ldquo;</div>

                            <StarRating />

                            <p className="text-slate-300 leading-relaxed mt-4 mb-6 text-sm">
                                {t.quote}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                                    <span className="text-white text-xs font-bold">{t.avatar}</span>
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">{t.name}</p>
                                    <p className="text-slate-500 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </m.div>
                    ))}
                </m.div>
            </div>
        </section>
    );
}
