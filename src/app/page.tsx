import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Head>
          <title>BusHive - Real-time Bus Tracking | Coming Soon</title>
          <meta name="description" content="BusHive - A real-time bus tracking app that offers live bus location, schedules, and trip planning. Coming Soon!" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Header />
        <Hero />
        <Features />
        <Footer />
      </div>
  );
}