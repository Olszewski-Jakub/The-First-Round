"use client";
import { useState, useEffect } from 'react';
import { collection, addDoc, Timestamp, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const SHOW_COUNTDOWN = false;

export default function Hero() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Check if email already exists
            const emailsCollection = collection(db, 'mailingList');
            const q = query(emailsCollection, where('email', '==', email));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setError('This email is already subscribed!');
                setLoading(false);
                return;
            }

            // Add email to Firestore
            await addDoc(emailsCollection, {
                email,
                subscribedAt: Timestamp.now(),
                // Add additional fields as needed
                source: 'landing_page'
            });

            setSubmitted(true);
            setEmail('');

            // Reset the "submitted" state after 3 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        } catch (err) {
            console.error('Error adding email to mailing list:', err);
            setError('Failed to subscribe. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Animation for the countdown
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        if (!SHOW_COUNTDOWN) return;

        // Set launch date to 3 months from now
        const launchDate = new Date();
        launchDate.setMonth(launchDate.getMonth() + 3);

        const timer = setInterval(() => {
            const now = new Date();
            const difference = launchDate.getTime() - now.getTime();

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });

            if (difference < 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <section className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-yellow-400">Real-time</span> Bus Tracking Coming Soon
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Track buses in real-time, view schedules, and plan your journeys with ease. BusHive is revolutionizing how you navigate public transportation.
                        </p>

                        {SHOW_COUNTDOWN ? (
                            <div className="grid grid-cols-4 gap-4 mb-10">
                                <div className="bg-gray-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-yellow-400">{countdown.days}</div>
                                    <div className="text-sm text-gray-400">Days</div>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-yellow-400">{countdown.hours}</div>
                                    <div className="text-sm text-gray-400">Hours</div>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-yellow-400">{countdown.minutes}</div>
                                    <div className="text-sm text-gray-400">Minutes</div>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-yellow-400">{countdown.seconds}</div>
                                    <div className="text-sm text-gray-400">Seconds</div>
                                </div>
                            </div>
                        ) : (
                            <div className="mb-10">
                                <div className="bg-gray-800 rounded-lg p-6 text-center">
                                    <div className="text-2xl text-yellow-400 font-bold mb-2">Coming Soon</div>
                                    <p className="text-gray-300">We're working hard to bring BusHive to life. Stay tuned!</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email for updates"
                                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-grow"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                                required
                            />
                            <button
                                type="submit"
                                className={`px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </span>
                                ) : (
                                    'Notify Me'
                                )}
                            </button>
                        </form>

                        {submitted && (
                            <div className="mt-3 text-green-400">
                                Thanks! We'll notify you when we launch.
                            </div>
                        )}

                        {error && (
                            <div className="mt-3 text-red-400">
                                {error}
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <div className="w-full h-96 rounded-lg bg-black bg-opacity-50 overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 relative">
                                    <div className="animate-pulse">
                                        <div className="w-64 h-64 rounded-full bg-yellow-400 bg-opacity-20 absolute"></div>
                                        <div className="w-48 h-48 rounded-full bg-yellow-400 bg-opacity-20 absolute left-8 top-8"></div>
                                        <div className="w-32 h-32 rounded-full bg-yellow-400 bg-opacity-30 absolute left-16 top-16"></div>
                                    </div>
                                    <img
                                        src="/logo.png"
                                        alt="BusHive Logo"
                                        className="w-24 h-24 absolute left-20 top-20"
                                    />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                    <path fill="rgba(234, 179, 8, 0.3)" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,96C672,75,768,117,864,138.7C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}