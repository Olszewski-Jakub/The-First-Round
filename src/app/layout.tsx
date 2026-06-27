import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import ScrollProgress from '@/components/ScrollProgress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://bushive.app'),
    title: {
        default: 'BusHive — Real-time Bus Tracking',
        template: '%s | BusHive',
    },
    description: 'Never miss your bus again. BusHive brings live GPS tracking, smart schedules, and door-to-door trip planning to your pocket.',
    keywords: ['bus tracking', 'real-time tracking', 'public transportation', 'bus schedules', 'journey planning', 'transit app'],
    openGraph: {
        title: 'BusHive — Real-time Bus Tracking',
        description: 'Never miss your bus again. BusHive brings live GPS tracking, smart schedules, and door-to-door trip planning to your pocket.',
        type: 'website',
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Providers>
                    <div className="min-h-screen bg-[#080C14] text-white overflow-x-hidden">
                        <ScrollProgress />
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
