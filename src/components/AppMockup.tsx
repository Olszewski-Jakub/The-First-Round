"use client";
import { m, useReducedMotion } from 'framer-motion';

export default function AppMockup() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section header */}
                <m.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
                        The App
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Everything you need,{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                            in your pocket
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xl mx-auto">
                        A clean, fast interface built around how commuters actually think.
                    </p>
                </m.div>

                {/* Phone + floating elements */}
                <div className="relative flex justify-center items-center min-h-[560px]">

                    {/* Floating card: Bus approaching */}
                    <m.div
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-4 md:left-12 lg:left-24 top-16 z-20"
                        style={{ animation: prefersReducedMotion ? 'none' : 'float 6s ease-in-out infinite' }}
                    >
                        <div className="bg-[#0F1624]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl w-52">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white text-xs font-semibold">Bus 42</p>
                                    <p className="text-slate-500 text-xs">City Centre</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-xs">Arriving in</span>
                                <span className="text-cyan-400 font-bold font-mono text-sm">3 min</span>
                            </div>
                        </div>
                    </m.div>

                    {/* Floating card: On time */}
                    <m.div
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute right-4 md:right-12 lg:right-24 top-16 z-20"
                        style={{ animation: prefersReducedMotion ? 'none' : 'float-delayed 7s ease-in-out infinite' }}
                    >
                        <div className="bg-[#0F1624]/90 backdrop-blur-md border border-green-500/20 rounded-2xl p-4 shadow-2xl">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-400" style={{ animation: 'live-pulse 2s ease-in-out infinite' }} />
                                <span className="text-green-400 text-xs font-semibold font-mono">ON TIME</span>
                            </div>
                            <p className="text-white font-bold mt-1 text-sm">Route 15</p>
                            <p className="text-slate-500 text-xs">Next: 8 min</p>
                        </div>
                    </m.div>

                    {/* Floating notification */}
                    <m.div
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute right-2 md:right-10 lg:right-20 bottom-24 z-20"
                        style={{ animation: prefersReducedMotion ? 'none' : 'float-slow 8s ease-in-out infinite' }}
                    >
                        <div className="bg-[#0F1624]/90 backdrop-blur-md border border-white/8 rounded-2xl p-3 shadow-2xl w-56">
                            <div className="flex items-start gap-2">
                                <div className="w-7 h-7 rounded-lg bg-sky-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white text-xs font-semibold">Bus approaching</p>
                                    <p className="text-slate-400 text-xs mt-0.5">Route 42 is 2 stops away from your location</p>
                                </div>
                            </div>
                        </div>
                    </m.div>

                    {/* Phone frame */}
                    <m.div
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 mx-auto"
                    >
                        {/* Glow behind phone */}
                        <div className="absolute inset-0 rounded-[44px] blur-3xl scale-90 bg-gradient-to-b from-cyan-500/25 to-sky-600/15" />

                        {/* Phone shell */}
                        <div className="relative w-[260px] rounded-[44px] bg-[#0A0E1A] border-2 border-white/10 shadow-2xl overflow-hidden"
                             style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(6,182,212,0.15)' }}>

                            {/* Status bar */}
                            <div className="h-10 bg-[#0A0E1A] flex items-center justify-between px-6 pt-2">
                                <span className="text-white text-[10px] font-semibold font-mono">9:41</span>
                                <div className="flex items-center gap-1">
                                    {/* Signal bars */}
                                    <div className="flex items-end gap-0.5">
                                        {[3, 5, 7, 9].map((h, i) => (
                                            <div key={i} className="w-1 rounded-sm bg-white/70" style={{ height: `${h}px` }} />
                                        ))}
                                    </div>
                                    {/* Battery */}
                                    <div className="ml-1 flex items-center gap-0.5">
                                        <div className="w-5 h-2.5 rounded-sm border border-white/50 relative overflow-hidden">
                                            <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-white/70 rounded-sm" />
                                        </div>
                                        <div className="w-0.5 h-1.5 rounded-r-sm bg-white/50" />
                                    </div>
                                </div>
                            </div>

                            {/* App header */}
                            <div className="bg-[#0F1624] px-4 py-3 flex items-center justify-between border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10z"/>
                                        </svg>
                                    </div>
                                    <span className="text-white font-bold text-sm">BusHive</span>
                                </div>
                                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: 'live-pulse 1.5s ease-in-out infinite' }} />
                                    <span className="text-green-400 text-[9px] font-mono font-semibold">LIVE</span>
                                </div>
                            </div>

                            {/* Map area */}
                            <div className="relative h-48 bg-[#080C14] overflow-hidden">
                                {/* Grid pattern */}
                                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id="appGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                                            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#06B6D4" strokeWidth="0.5"/>
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#appGrid)" />
                                </svg>

                                {/* Route lines */}
                                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M 10 160 Q 50 120 100 100 Q 150 80 200 40" fill="none" stroke="url(#appRoute)" strokeWidth="2" strokeDasharray="5 3" strokeLinecap="round"/>
                                    <path d="M 30 180 Q 80 140 130 120 Q 200 90 240 60" fill="none" stroke="rgba(14,165,233,0.3)" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round"/>
                                    <defs>
                                        <linearGradient id="appRoute" x1="0%" y1="100%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3"/>
                                            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1"/>
                                        </linearGradient>
                                    </defs>
                                    {/* Stops */}
                                    <circle cx="10" cy="160" r="3" fill="#06B6D4" opacity="0.5"/>
                                    <circle cx="100" cy="100" r="3.5" fill="#06B6D4" opacity="0.7"/>
                                    <circle cx="200" cy="40" r="5" fill="#06B6D4"/>
                                    <circle cx="200" cy="40" r="10" fill="#06B6D4" opacity="0.2"/>
                                    <circle cx="200" cy="40" r="16" fill="#06B6D4" opacity="0.08"/>
                                </svg>

                                {/* Bus marker */}
                                <div
                                    className="absolute w-7 h-7 flex items-center justify-center"
                                    style={{
                                        top: '48%',
                                        left: '42%',
                                        transform: 'translate(-50%, -50%)',
                                        animation: prefersReducedMotion ? 'none' : 'float 3s ease-in-out infinite',
                                    }}
                                >
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom sheet */}
                            <div className="bg-[#0F1624] px-4 pt-4 pb-2">
                                <div className="w-8 h-1 rounded-full bg-white/15 mx-auto mb-3" />
                                <p className="text-slate-400 text-[10px] font-mono uppercase tracking-widest mb-2">Nearby buses</p>

                                {[
                                    { route: '42', dest: 'City Centre', eta: '3 min', on: true },
                                    { route: '15', dest: 'North Park', eta: '8 min', on: true },
                                    { route: '7',  dest: 'Airport',    eta: '14 min', on: false },
                                ].map((bus) => (
                                    <div key={bus.route} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                                <span className="text-cyan-400 text-[9px] font-bold font-mono">{bus.route}</span>
                                            </div>
                                            <span className="text-slate-300 text-xs">{bus.dest}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            {bus.on && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: 'live-pulse 2s ease-in-out infinite' }} />
                                            )}
                                            <span className={`text-xs font-mono font-semibold ${bus.on ? 'text-cyan-400' : 'text-slate-500'}`}>{bus.eta}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Home indicator */}
                            <div className="bg-[#0F1624] pb-3 flex justify-center">
                                <div className="w-20 h-1 rounded-full bg-white/20" />
                            </div>
                        </div>
                    </m.div>
                </div>
            </div>
        </section>
    );
}
