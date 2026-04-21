"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { label: 'Features',     href: '/#features',     page: false },
    { label: 'How It Works', href: '/#how-it-works',  page: false },
    { label: 'About',        href: '/about',           page: true  },
    { label: 'Roadmap',      href: '/roadmap',         page: true  },
    { label: 'FAQ',          href: '/faq',             page: true  },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const isActive = (href: string) => href.startsWith('/') && !href.includes('#') && pathname === href;

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#080C14]/90 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/20'
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-6xl">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image src="/logo.png" alt="BusHive Logo" width={36} height={36} className="group-hover:scale-105 transition-transform" />
                    <span className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">BusHive</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <ul className="flex items-center gap-5">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${
                                        isActive(link.href) ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="https://github.com/Bus-Hive"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                    <Link
                        href="/#cta"
                        className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white font-semibold rounded-full text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                    >
                        Get Early Access
                    </Link>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#0F1624]/95 backdrop-blur-xl border-t border-white/8">
                    <nav className="container mx-auto px-6 py-4 flex flex-col gap-1 max-w-6xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`text-sm font-medium py-2.5 transition-colors ${
                                    isActive(link.href) ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                                }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="https://github.com/Bus-Hive"
                            className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium py-2.5"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                        >
                            GitHub ↗
                        </Link>
                        <Link
                            href="/#cta"
                            className="mt-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold rounded-full text-sm text-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            Get Early Access
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
