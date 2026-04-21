"use client";
import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQGroup {
    title: string;
    items: FAQItem[];
}

const faqGroups: FAQGroup[] = [
    {
        title: 'Product',
        items: [
            {
                question: 'What is BusHive?',
                answer: 'BusHive is a real-time bus tracking app that shows you exactly where your bus is right now, when it will arrive at your stop, and helps you plan door-to-door trips using public transport. Think of it as the bus tracker you always wished existed.',
            },
            {
                question: 'Which cities are supported?',
                answer: 'We are launching in Dublin and London as our initial Beta cities. Warsaw, Amsterdam, Berlin, and Prague are planned for later in 2026. More cities will follow based on community demand — you can vote for your city via our waitlist.',
            },
            {
                question: 'Is BusHive free to use?',
                answer: 'Yes. BusHive will be completely free at launch with no subscription required. We believe real-time transit info is a public good. Future premium features may be added later, but core tracking and trip planning will always be free.',
            },
            {
                question: 'What devices does BusHive support?',
                answer: 'BusHive starts as a progressive web app (PWA) accessible in any mobile browser. Native iOS and Android apps are planned for Q4 2026. You will be able to use it on any smartphone, tablet, or desktop browser.',
            },
        ],
    },
    {
        title: 'Waitlist',
        items: [
            {
                question: 'When will BusHive launch?',
                answer: 'We are actively in development. The first public Beta targeting Dublin and London is planned for mid-2026. Waitlist members will be the first to receive access and will get a heads-up before anyone else.',
            },
            {
                question: 'How do I get early access?',
                answer: 'Sign up with your email on the homepage. When we launch in your city we will email you directly with instructions to get access. There is no cost and no commitment required.',
            },
            {
                question: 'Can I remove my email from the list?',
                answer: 'Absolutely. Every email we send includes an unsubscribe link, or you can email us directly and we will remove you immediately. You can also raise a GitHub issue to request deletion under GDPR rights.',
            },
        ],
    },
    {
        title: 'Technical',
        items: [
            {
                question: 'How accurate is the bus tracking?',
                answer: 'BusHive uses live GPS data from transit operators where available, updated every few seconds. Accuracy depends on the quality of data feeds provided by each city\'s transit authority. We supplement with GTFS schedule data as a fallback when live GPS is unavailable.',
            },
            {
                question: 'Does BusHive work offline?',
                answer: 'Not yet in the Beta. Offline mode with cached schedules and recent route data is planned for Phase 3 (Q4 2026), especially for the native apps.',
            },
            {
                question: 'What data does BusHive collect?',
                answer: 'We collect your email address if you sign up for the waitlist. We also use Google Analytics (via Firebase) to understand how people use the site. We do not sell your data or share it with third parties. See our Privacy Policy for full details.',
            },
        ],
    },
];

function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className="border-b border-white/8 last:border-0">
            <button
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                onClick={onToggle}
            >
                <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'}`}>
                    {item.question}
                </span>
                <svg
                    className={`w-4 h-4 flex-shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p className="pb-5 text-slate-400 text-sm leading-relaxed">{item.answer}</p>
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<string | null>('0-0');

    const toggle = (key: string) => setOpenIndex(openIndex === key ? null : key);

    return (
        <div className="space-y-12">
            {faqGroups.map((group, gi) => (
                <div key={group.title}>
                    <h3 className="text-xs font-semibold font-mono uppercase tracking-widest text-slate-500 mb-4 px-1">
                        {group.title}
                    </h3>
                    <div className="bg-white/5 border border-white/8 rounded-2xl px-6">
                        {group.items.map((item, ii) => {
                            const key = `${gi}-${ii}`;
                            return (
                                <AccordionItem
                                    key={key}
                                    item={item}
                                    isOpen={openIndex === key}
                                    onToggle={() => toggle(key)}
                                />
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
