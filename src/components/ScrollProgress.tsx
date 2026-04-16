"use client";
import { useScroll, useSpring, m } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <m.div
            className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100]"
            style={{
                scaleX,
                background: 'linear-gradient(to right, #06B6D4, #0EA5E9, #38BDF8)',
                boxShadow: '0 0 8px rgba(6, 182, 212, 0.8)',
            }}
        />
    );
}
