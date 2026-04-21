"use client";
import { m, useReducedMotion } from 'framer-motion';

const cities = [
    { name: 'Dublin',    flag: '🇮🇪', status: 'Beta' as const },
    { name: 'London',    flag: '🇬🇧', status: 'Beta' as const },
    { name: 'Warsaw',    flag: '🇵🇱', status: 'Coming Soon' as const },
    { name: 'Amsterdam', flag: '🇳🇱', status: 'Coming Soon' as const },
    { name: 'Berlin',    flag: '🇩🇪', status: 'Coming Soon' as const },
    { name: 'Prague',    flag: '🇨🇿', status: 'Coming Soon' as const },
];

export default function Cities() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <m.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
                        Coverage
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Coming to{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                            your city
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xl mx-auto">
                        Starting in select cities and expanding fast.
                    </p>
                </m.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                    {cities.map((city, index) => (
                        <m.div
                            key={city.name}
                            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className={`group relative bg-white/5 border rounded-2xl p-6 flex flex-col items-center gap-3 transition-all duration-300 cursor-default ${
                                city.status === 'Beta'
                                    ? 'border-cyan-500/25 hover:border-cyan-500/50 hover:-translate-y-1'
                                    : 'border-white/8 hover:border-white/15'
                            }`}
                            onMouseEnter={(e) => {
                                if (city.status === 'Beta') {
                                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.15)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.boxShadow = '';
                            }}
                        >
                            <span className="text-4xl select-none">{city.flag}</span>
                            <p className="text-white font-semibold">{city.name}</p>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold font-mono ${
                                city.status === 'Beta'
                                    ? 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-400'
                                    : 'bg-white/5 border border-white/10 text-slate-500'
                            }`}>
                                {city.status}
                            </span>
                        </m.div>
                    ))}
                </div>

                <m.p
                    className="text-center text-slate-500 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Don&apos;t see your city?{' '}
                    <a href="mailto:hello@bushive.app" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Vote for it →
                    </a>
                </m.p>
            </div>
        </section>
    );
}
