"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
    { label: 'Features',     href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'GitHub',       href: 'https://github.com/Bus-Hive', external: true },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

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
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                {link.external ? (
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-1.5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.label}
                                        <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </Link>
                                ) : (
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                                    >
                                        {link.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#cta"
                        className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white font-semibold rounded-full text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                    >
                        Get Early Access
                    </a>
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
                    <nav className="container mx-auto px-6 py-4 flex flex-col gap-4 max-w-6xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium py-2"
                                onClick={() => setMenuOpen(false)}
                                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#cta"
                            className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold rounded-full text-sm text-center transition-all"
                            onClick={() => setMenuOpen(false)}
                        >
                            Get Early Access
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
