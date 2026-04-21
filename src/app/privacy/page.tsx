import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
    title: 'Privacy Policy — BusHive',
    description: 'BusHive Privacy Policy. Learn how we collect, use, and protect your personal information.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-10">
            <h2 className="text-white font-bold text-lg mb-3">{title}</h2>
            <div className="text-slate-400 text-sm leading-relaxed space-y-3">{children}</div>
        </div>
    );
}

export default function PrivacyPage() {
    return (
        <>
            <PageHero
                badge="Legal"
                title="Privacy"
                highlight="Policy"
                description="Last updated April 2026. This policy explains what information BusHive collects and how it is used."
            />
            <div className="pb-24 px-6">
                <div className="container mx-auto max-w-3xl">
                    <div className="bg-white/5 border border-white/8 rounded-2xl p-8 md:p-12">

                        <Section title="1. Information We Collect">
                            <p>
                                <strong className="text-white">Email address.</strong> When you sign up for our waitlist, we collect your email address. This is the only personal data we collect directly.
                            </p>
                            <p>
                                <strong className="text-white">Usage data.</strong> We use Google Analytics (via Firebase Analytics) to understand how visitors interact with our website. This may include anonymised data such as pages visited, time on site, browser type, and approximate geographic location (city-level).
                            </p>
                        </Section>

                        <Section title="2. How We Use Your Information">
                            <p>We use your email address to:</p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>Notify you when BusHive launches in your city</li>
                                <li>Send occasional development updates (infrequent)</li>
                                <li>Communicate important changes to the service</li>
                            </ul>
                            <p>We use analytics data to improve the website and understand which features matter most to our audience.</p>
                        </Section>

                        <Section title="3. Firebase and Google Analytics">
                            <p>
                                BusHive uses Firebase (a Google service) for data storage and analytics. By using this site, data may be processed by Google in accordance with Google&apos;s Privacy Policy. Firebase Firestore stores your email address securely. Firebase Analytics collects anonymised usage statistics.
                            </p>
                            <p>
                                Google&apos;s privacy policy is available at{' '}
                                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                    policies.google.com/privacy
                                </a>.
                            </p>
                        </Section>

                        <Section title="4. Third Parties">
                            <p>
                                We do not sell, rent, or share your personal data with any third parties for marketing purposes. The only third party that processes your data is Google/Firebase as described above.
                            </p>
                        </Section>

                        <Section title="5. Data Retention">
                            <p>
                                We retain your email address until you unsubscribe or request deletion. You can unsubscribe at any time via the link in any email we send, or by contacting us directly.
                            </p>
                        </Section>

                        <Section title="6. Your Rights (GDPR)">
                            <p>If you are based in the European Economic Area, you have the following rights:</p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li><strong className="text-white">Access:</strong> Request a copy of the data we hold about you</li>
                                <li><strong className="text-white">Erasure:</strong> Request deletion of your personal data</li>
                                <li><strong className="text-white">Portability:</strong> Receive your data in a portable format</li>
                                <li><strong className="text-white">Objection:</strong> Object to processing of your personal data</li>
                                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate data</li>
                            </ul>
                            <p>To exercise any of these rights, please contact us via GitHub Issues (linked below).</p>
                        </Section>

                        <Section title="7. Cookies">
                            <p>
                                BusHive uses only functional and analytics cookies. Analytics cookies are set by Google Firebase. No advertising or tracking cookies are used. You can disable cookies in your browser settings, though this may affect site functionality.
                            </p>
                        </Section>

                        <Section title="8. Changes to This Policy">
                            <p>
                                We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last updated&rdquo; date at the top of this page. If changes are significant, we will notify waitlist members by email.
                            </p>
                        </Section>

                        <Section title="9. Contact">
                            <p>
                                If you have questions about this Privacy Policy or wish to exercise your data rights, please open an issue on our{' '}
                                <a href="https://github.com/Bus-Hive" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                    GitHub repository
                                </a>{' '}
                                or reach out via{' '}
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
