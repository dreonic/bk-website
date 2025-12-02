"use client";

import { useEffect, useState, useRef } from "react";

interface StatisticsItemProps {
    number: number;
    label: string;
    duration?: number;
    showPlus?: boolean;
}

const StatisticsItem: React.FC<StatisticsItemProps> = ({
    number,
    label,
    duration = 2000,
    showPlus = false,
}) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const startTime = Date.now();
                    const animate = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Easing function for smooth animation
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(easeOut * number));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(number);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [number, duration, hasAnimated]);

    return (
        <div
            ref={ref}
            className="flex flex-col items-center w-full md:w-64 gap-1 md:gap-2"
        >
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-gold font-[family-name:var(--font-gotham-medium)]">
                {count}
                {showPlus && "+"}
            </span>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white text-primary-brown-foreground text-center w-full md:w-3/4">
                {label}
            </p>
        </div>
    );
};

export default StatisticsItem;
