import { useState } from 'react';
import { collection, addDoc, Timestamp, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function useEmailSignup() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const emailsCollection = collection(db, 'mailingList');
            const q = query(emailsCollection, where('email', '==', email));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setError('This email is already subscribed!');
                setLoading(false);
                return;
            }

            await addDoc(emailsCollection, {
                email,
                subscribedAt: Timestamp.now(),
                source: 'landing_page',
            });

            setSubmitted(true);
            setEmail('');
            setTimeout(() => setSubmitted(false), 3000);
        } catch (err) {
            console.error('Error adding email to mailing list:', err);
            setError('Failed to subscribe. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return { email, setEmail, submitted, loading, error, handleSubmit };
}
