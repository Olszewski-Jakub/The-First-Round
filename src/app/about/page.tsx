import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
    title: 'About — BusHive',
    description: 'Learn about BusHive, the real-time bus tracking app built to make public transportation smarter and more accessible for everyday commuters.',
};

export default function AboutPage() {
    return (
        <>
            <PageHero
                badge="Our Story"
                title="Building better commutes,"
                highlight="one city at a time."
                description="BusHive was built out of frustration with inaccurate, clunky transit apps. Here's why we're building something better."
            />
            <AboutContent />
        </>
    );
}
