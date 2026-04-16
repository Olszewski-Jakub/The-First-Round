import { LazyMotion, domAnimation } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <LazyMotion features={domAnimation} strict>
            <div className="min-h-screen bg-[#080C14] text-white overflow-x-hidden">
                <Header />
                <main>
                    <Hero />
                    <section id="features" className="scroll-mt-20">
                        <Features />
                    </section>
                    <section id="how-it-works" className="scroll-mt-20">
                        <HowItWorks />
                    </section>
                </main>
                <section id="cta" className="scroll-mt-20">
                    <Footer />
                </section>
            </div>
        </LazyMotion>
    );
}
