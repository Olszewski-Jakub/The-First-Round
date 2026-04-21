import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Features from '@/components/Features';
import AppMockup from '@/components/AppMockup';
import HowItWorks from '@/components/HowItWorks';
import Cities from '@/components/Cities';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
    return (
        <>
            <Hero />
            <StatsBar />
            <section id="features" className="scroll-mt-20">
                <Features />
            </section>
            <AppMockup />
            <section id="how-it-works" className="scroll-mt-20">
                <HowItWorks />
            </section>
            <Cities />
            <Testimonials />
            <section id="cta" className="scroll-mt-20">
                <CTA />
            </section>
        </>
    );
}
