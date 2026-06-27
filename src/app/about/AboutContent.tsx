"use client";
import { m, useReducedMotion } from 'framer-motion';

const techStack = [
    { name: 'Next.js 15', desc: 'App Router & RSC', color: 'text-white' },
    { name: 'Firebase', desc: 'Realtime data & auth', color: 'text-amber-400' },
    { name: 'React 19', desc: 'Modern UI rendering', color: 'text-sky-400' },
    { name: 'Maps API', desc: 'Live GPS & routing', color: 'text-cyan-400' },
];

export default function AboutContent() {
    const prefersReducedMotion = useReducedMotion();

    const fadeUp = {
        initial: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' as const },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    };

    return (
        <div className="pb-24 px-6">
            <div className="container mx-auto max-w-5xl space-y-20">

                {/* Mission Block */}
                <m.div {...fadeUp} className="grid md:grid-cols-2 gap-8 items-stretch">
                    <div className="bg-white/5 border border-white/8 rounded-2xl p-8 flex items-center">
                        <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                            &ldquo;Public transport should be as smart as the people who use it.&rdquo;
                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <p className="text-slate-400 leading-relaxed">
                            BusHive started with a simple frustration: too many missed buses, too many inaccurate schedule apps, and too much time standing at stops wondering if the bus already came.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            We believe commuters deserve real-time, accurate tools — not the same outdated interfaces from 2010. BusHive is our answer to that.
                        </p>
                    </div>
                </m.div>

                {/* Problem / Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                    <m.div
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-red-500/5 border border-red-500/15 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center">
                                <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold">The Problem</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Inaccurate or outdated arrival times',
                                'No live GPS — just theoretical schedules',
                                'Clunky interfaces built for desktops',
                                'No door-to-door trip planning',
                                'Zero transparency when buses run late',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                                    <span className="text-red-400 mt-0.5 flex-shrink-0">×</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-cyan-500/5 border border-cyan-500/15 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-6 h-6 rounded-full bg-cyan-500/15 flex items-center justify-center">
                                <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold">Our Solution</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Live GPS tracking updated every few seconds',
                                'Accurate ETAs based on real-time position',
                                'Mobile-first design built for one-thumb use',
                                'Smart trip planner: anywhere to anywhere',
                                'Proactive alerts when your bus is delayed',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </m.div>
                </div>

                {/* Tech stack */}
                <m.div {...fadeUp}>
                    <h2 className="text-2xl font-bold text-white mb-2 text-center">Built with modern technology</h2>
                    <p className="text-slate-400 text-center mb-8 text-sm">Chosen for performance, reliability, and developer experience.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {techStack.map((tech) => (
                            <div key={tech.name} className="bg-white/5 border border-white/8 rounded-xl p-5 text-center hover:border-white/15 transition-colors">
                                <p className={`font-bold mb-1 ${tech.color}`}>{tech.name}</p>
                                <p className="text-slate-500 text-xs">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </m.div>

                {/* Founder card */}
                <m.div {...fadeUp} className="flex justify-center">
                    <div className="bg-white/5 border border-white/8 rounded-2xl p-8 max-w-md w-full">
                        <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-6">The Team</p>
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-black text-lg">JO</span>
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg">Jakub Olszewski</p>
                                <p className="text-slate-400 text-sm">Founder & Developer</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Full-stack developer building BusHive from the ground up. Passionate about clean UX, developer experience, and making everyday commutes a little less frustrating.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/Bus-Hive"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/8 text-slate-400 hover:text-white hover:border-white/20 transition-all text-sm"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                GitHub
                            </a>
                            <a
                                href="https://jakubolszewski.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/8 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all text-sm"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Portfolio
                            </a>
                        </div>
                    </div>
                </m.div>
            </div>
        </div>
    );
}
