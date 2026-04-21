"use client";
import { m } from 'framer-motion';

interface PageHeroProps {
    badge: string;
    title: string;
    highlight: string;
    description: string;
}

export default function PageHero({ badge, title, highlight, description }: PageHeroProps) {
    return (
        <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
            <div className="container mx-auto max-w-3xl relative z-10">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block mb-6"
                >
                    <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest">
                        {badge}
                    </span>
                </m.div>

                <m.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                >
                    {title}{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                        {highlight}
                    </span>
                </m.h1>

                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
                >
                    {description}
                </m.p>
            </div>
        </section>
    );
}
