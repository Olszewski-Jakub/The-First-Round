"use client";
import { m, useReducedMotion } from 'framer-motion';
import { useEmailSignup } from '@/lib/useEmailSignup';

export default function CTA() {
    const prefersReducedMotion = useReducedMotion();
    const { email, setEmail, submitted, loading, error, handleSubmit } = useEmailSignup();

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-15 blur-3xl"
                    style={{
                        background: 'radial-gradient(ellipse, #06B6D4, #0EA5E9, transparent)',
                        animation: prefersReducedMotion ? 'none' : 'float-slow 12s ease-in-out infinite',
                    }}
                />
            </div>

            <div className="container mx-auto max-w-2xl text-center relative z-10">
                <m.div
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-6">
                        Join the Waitlist
                    </span>

                    <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                        Stop waiting.{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                            Start moving.
                        </span>
                    </h2>

                    <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                        Join 500+ commuters already on the waitlist. Be first to know when BusHive launches in your city.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 rounded-xl bg-[#0F1624] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 text-sm whitespace-nowrap ${
                                loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                            }`}
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
                        <p className="mt-4 text-green-400 text-sm flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            You&apos;re on the list! We&apos;ll notify you when we launch.
                        </p>
                    )}
                    {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}
                    <p className="mt-3 text-slate-600 text-xs">No spam. Unsubscribe anytime.</p>
                </m.div>
            </div>
        </section>
    );
}
