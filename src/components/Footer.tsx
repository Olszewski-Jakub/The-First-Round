import Image from 'next/image';
import Link from 'next/link';

const footerNav = [
    {
        title: 'Product',
        links: [
            { label: 'Features',     href: '/#features' },
            { label: 'How It Works', href: '/#how-it-works' },
            { label: 'Roadmap',      href: '/roadmap' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About',   href: '/about' },
            { label: 'FAQ',     href: '/faq' },
            { label: 'GitHub',  href: 'https://github.com/Bus-Hive', external: true },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy Policy',   href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#070B14] border-t border-white/8 py-16 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Image src="/logo.png" alt="BusHive Logo" width={32} height={32} />
                            <span className="text-lg font-bold text-cyan-400">BusHive</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-5">
                            Making public transportation better for everyone.
                        </p>
                        <div className="flex items-center gap-3">
                            <Link
                                href="https://github.com/Bus-Hive"
                                className="text-slate-600 hover:text-cyan-400 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </Link>
                            <Link
                                href="https://jakubolszewski.dev"
                                className="text-slate-600 hover:text-cyan-400 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Portfolio"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Nav columns */}
                    {footerNav.map((col) => (
                        <div key={col.title}>
                            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-4 font-mono">{col.title}</h3>
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        {'external' in link && link.external ? (
                                            <Link
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-500 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1"
                                            >
                                                {link.label}
                                                <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </Link>
                                        ) : (
                                            <Link href={link.href} className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="border-white/8 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-slate-600 text-xs">
                    <span>&copy; {new Date().getFullYear()} BusHive. All rights reserved.</span>
                    <span>Built for commuters, by commuters.</span>
                </div>
            </div>
        </footer>
    );
}
