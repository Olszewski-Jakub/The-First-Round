"use client";
import { m, useReducedMotion } from 'framer-motion';
import { useEmailSignup } from '@/lib/useEmailSignup';

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();
    const { email, setEmail, submitted, loading, error, handleSubmit } = useEmailSignup();

    const fadeUp = {
        initial: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
        animate: { opacity: 1, y: 0 },
    };

    const stagger = {
        animate: { transition: { staggerChildren: 0.12 } },
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div
                    className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, #06B6D4, #0EA5E9)',
                        animation: prefersReducedMotion ? 'none' : 'float 8s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute top-1/3 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, #0EA5E9, #3B82F6)',
                        animation: prefersReducedMotion ? 'none' : 'float-delayed 10s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, #06B6D4, #8B5CF6)',
                        animation: prefersReducedMotion ? 'none' : 'float-slow 12s ease-in-out infinite',
                    }}
                />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left column */}
                    <m.div variants={stagger} initial="initial" animate="animate" className="flex flex-col">
                        {/* Badge */}
                        <m.div variants={fadeUp} transition={{ duration: 0.5 }}>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-6">
                                <span
                                    className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                                    style={{ animation: 'live-pulse 2s ease-in-out infinite' }}
                                />
                                Now in Development
                            </span>
                        </m.div>

                        {/* Headline */}
                        <m.h1
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05]"
                        >
                            Your bus.{' '}
                            <span className="block bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                                On time,
                            </span>
                            every time.
                        </m.h1>

                        {/* Subheadline */}
                        <m.p
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="text-lg text-slate-400 mb-10 leading-relaxed max-w-md"
                        >
                            BusHive brings live GPS tracking, smart schedules, and door-to-door trip planning to your pocket — so you stop waiting and start moving.
                        </m.p>

                        {/* Email form */}
                        <m.div variants={fadeUp} transition={{ duration: 0.6 }}>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email for early access"
                                    className="flex-1 px-4 py-3 rounded-xl bg-[#0F1624] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={loading}
                                    required
                                />
                                <button
                                    type="submit"
                                    className={`px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 text-sm whitespace-nowrap ${
                                        loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                                    }`}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Saving...
                                        </span>
                                    ) : (
                                        'Get Early Access'
                                    )}
                                </button>
                            </form>

                            {submitted && (
                                <p className="mt-3 text-green-400 text-sm flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    You&apos;re on the list! We&apos;ll notify you when we launch.
                                </p>
                            )}
                            {error && <p className="mt-3 text-red-400 text-sm">{error}</p>}

                            <p className="mt-3 text-slate-600 text-xs">No spam. Unsubscribe anytime.</p>

                            {/* Platform badges */}
                            <div className="flex flex-wrap gap-2 mt-5">
                                {['iOS App', 'Android App'].map((platform) => (
                                    <span
                                        key={platform}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-slate-500 text-xs"
                                    >
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                        {platform} — Coming Soon
                                    </span>
                                ))}
                            </div>
                        </m.div>
                    </m.div>

                    {/* Right column — animated map card visual */}
                    <m.div
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-full max-w-sm">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-sky-600/20 blur-2xl scale-105" />

                            <div className="relative bg-[#0F1624] border border-white/10 rounded-3xl p-6 shadow-2xl">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Live Tracking</p>
                                        <p className="text-white font-bold text-lg mt-0.5">Route 42</p>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                        <span
                                            className="w-2 h-2 rounded-full bg-green-400"
                                            style={{ animation: 'live-pulse 1.5s ease-in-out infinite' }}
                                        />
                                        <span className="text-green-400 text-xs font-semibold font-mono">LIVE</span>
                                    </div>
                                </div>

                                {/* Fake map area */}
                                <div className="relative h-44 rounded-2xl bg-[#080C14] overflow-hidden mb-6">
                                    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                                                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#06B6D4" strokeWidth="0.5"/>
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                    </svg>

                                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M 20 140 Q 80 80 160 100 Q 220 115 280 60" fill="none" stroke="url(#routeGrad)" strokeWidth="2.5" strokeDasharray="6 3" strokeLinecap="round"/>
                                        <defs>
                                            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4"/>
                                                <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1"/>
                                            </linearGradient>
                                        </defs>
                                        <circle cx="20" cy="140" r="4" fill="#06B6D4" opacity="0.5"/>
                                        <circle cx="160" cy="100" r="4" fill="#06B6D4" opacity="0.7"/>
                                        <circle cx="280" cy="60" r="5" fill="#06B6D4"/>
                                        <circle cx="280" cy="60" r="10" fill="#06B6D4" opacity="0.2"/>
                                    </svg>

                                    <div
                                        className="absolute w-8 h-8 flex items-center justify-center"
                                        style={{
                                            top: '44%',
                                            left: '47%',
                                            transform: 'translate(-50%, -50%)',
                                            animation: prefersReducedMotion ? 'none' : 'float 3s ease-in-out infinite',
                                        }}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center shadow-lg shadow-cyan-500/40">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-[#080C14] rounded-xl p-3 border border-white/5">
                                        <p className="text-xs text-slate-500 mb-1">Next stop</p>
                                        <p className="text-white font-semibold text-sm">Central Station</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-cyan-500/10 to-sky-600/10 rounded-xl p-3 border border-cyan-500/20">
                                        <p className="text-xs text-slate-500 mb-1">ETA</p>
                                        <p className="text-cyan-400 font-bold text-lg font-mono">3 min</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </m.div>
                </div>
            </div>
        </section>
    );
}
