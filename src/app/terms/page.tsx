import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
    title: 'Terms of Service — BusHive',
    description: 'BusHive Terms of Service. Read our terms before using the BusHive website and waitlist.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-10">
            <h2 className="text-white font-bold text-lg mb-3">{title}</h2>
            <div className="text-slate-400 text-sm leading-relaxed space-y-3">{children}</div>
        </div>
    );
}

export default function TermsPage() {
    return (
        <>
            <PageHero
                badge="Legal"
                title="Terms of"
                highlight="Service"
                description="Last updated April 2026. Please read these terms carefully before using the BusHive website."
            />
            <div className="pb-24 px-6">
                <div className="container mx-auto max-w-3xl">
                    <div className="bg-white/5 border border-white/8 rounded-2xl p-8 md:p-12">

                        <Section title="1. Acceptance of Terms">
                            <p>
                                By accessing or using the BusHive website (bushive.app) or signing up for the waitlist, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                            </p>
                        </Section>

                        <Section title="2. Description of Service">
                            <p>
                                BusHive is a real-time bus tracking application currently in development. At this time, the website serves as a product landing page and waitlist registration form. No live bus tracking service is available yet.
                            </p>
                            <p>
                                We reserve the right to modify, suspend, or discontinue any aspect of the service at any time without notice.
                            </p>
                        </Section>

                        <Section title="3. Waitlist Registration">
                            <p>
                                By submitting your email address via our waitlist form, you agree to receive communications from BusHive, including launch announcements and product updates. You can unsubscribe at any time using the link provided in any email.
                            </p>
                            <p>
                                Providing your email does not guarantee access to the BusHive product, as access may be rolled out in phases by city or region.
                            </p>
                        </Section>

                        <Section title="4. User Conduct">
                            <p>You agree not to:</p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>Use the website for any unlawful purpose</li>
                                <li>Submit false, inaccurate, or misleading information</li>
                                <li>Attempt to gain unauthorised access to our systems</li>
                                <li>Interfere with the proper functioning of the website</li>
                                <li>Use automated tools to scrape or collect data without permission</li>
                            </ul>
                        </Section>

                        <Section title="5. Intellectual Property">
                            <p>
                                All content on this website, including but not limited to text, graphics, logos, and source code, is the property of BusHive or its creator (Jakub Olszewski) and is protected by applicable intellectual property laws.
                            </p>
                            <p>
                                You may not reproduce, distribute, or create derivative works from any content on this website without our express written permission.
                            </p>
                        </Section>

                        <Section title="6. Disclaimers">
                            <p>
                                The BusHive website and any information provided on it are offered on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses.
                            </p>
                            <p>
                                Bus arrival times and route information shown in mockups and marketing materials are fictional and for illustration purposes only. No live transit data is currently provided.
                            </p>
                        </Section>

                        <Section title="7. Limitation of Liability">
                            <p>
                                To the fullest extent permitted by law, BusHive and its creator shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the website or service.
                            </p>
                        </Section>

                        <Section title="8. Privacy">
                            <p>
                                Your use of the website is also governed by our{' '}
                                <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                    Privacy Policy
                                </a>
                                , which is incorporated into these Terms by reference.
                            </p>
                        </Section>

                        <Section title="9. Changes to Terms">
                            <p>
                                We reserve the right to update these Terms of Service at any time. When we make changes, we will update the &ldquo;Last updated&rdquo; date above. Continued use of the website after changes constitutes acceptance of the updated terms.
                            </p>
                        </Section>

                        <Section title="10. Governing Law">
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of Ireland, without regard to its conflict of law provisions.
                            </p>
                        </Section>

                        <Section title="11. Contact">
                            <p>
                                If you have any questions about these Terms, please contact us via our{' '}
                                <a href="https://github.com/Bus-Hive" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                    GitHub repository
                                </a>{' '}
                                or through{' '}
                                <a href="https://jakubolszewski.dev" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                    jakubolszewski.dev
                                </a>.
                            </p>
                        </Section>
                    </div>
                </div>
            </div>
        </>
    );
}
