"use client";
import { m, useReducedMotion } from 'framer-motion';

const stats = [
    { value: '500+', label: 'Early waitlist signups' },
    { value: 'Real-time GPS', label: 'Live tracking technology' },
    { value: 'Free at launch', label: 'No subscription required' },
    { value: 'iOS & Android', label: 'Cross-platform app' },
];

export default function StatsBar() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="relative border-y border-white/5 bg-white/[0.02]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="container mx-auto max-w-6xl px-6 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <m.div
                            key={stat.value}
                            className="text-center"
                            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <p className="text-white font-bold text-xl md:text-2xl tracking-tight mb-1">{stat.value}</p>
                            <p className="text-slate-500 text-xs font-medium">{stat.label}</p>
                        </m.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
