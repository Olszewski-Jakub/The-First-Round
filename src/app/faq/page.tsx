import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'FAQ — BusHive',
    description: 'Frequently asked questions about BusHive, the real-time bus tracking app. Find answers about launch timeline, city coverage, pricing, and more.',
};

export default function FAQPage() {
    return (
        <>
            <PageHero
                badge="FAQ"
                title="Everything you"
                highlight="need to know."
                description="Questions about BusHive? We've covered the most common ones below."
            />
            <div className="pb-24 px-6">
                <div className="container mx-auto max-w-3xl">
                    <FAQAccordion />
                </div>
            </div>
        </>
    );
}
