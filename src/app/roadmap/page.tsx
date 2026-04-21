import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import RoadmapContent from './RoadmapContent';

export const metadata: Metadata = {
    title: 'Roadmap — BusHive',
    description: 'See what we are building and when. Follow BusHive\'s journey from core real-time tracking to a full-featured cross-platform transit app.',
};

export default function RoadmapPage() {
    return (
        <>
            <PageHero
                badge="Roadmap"
                title="What we're building"
                highlight="and when."
                description="From core real-time tracking to a fully-featured cross-platform app — here's the plan."
            />
            <RoadmapContent />
        </>
    );
}
