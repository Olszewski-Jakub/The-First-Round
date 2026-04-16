import { LazyMotion, domAnimation } from 'framer-motion';
import Header from '../components/Header';
import ScrollProgress from '../components/ScrollProgress';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AppMockup from '../components/AppMockup';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <LazyMotion features={domAnimation} strict>
            <div className="min-h-screen bg-[#080C14] text-white overflow-x-hidden">
                <ScrollProgress />
                <Header />
                <main>
                    <Hero />
                    <section id="features" className="scroll-mt-20">
                        <Features />
                    </section>
                    <AppMockup />
                    <section id="how-it-works" className="scroll-mt-20">
                        <HowItWorks />
                    </section>
                    <Testimonials />
                </main>
                <section id="cta" className="scroll-mt-20">
                    <Footer />
                </section>
            </div>
        </LazyMotion>
    );
}
