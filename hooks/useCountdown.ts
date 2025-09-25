"use client"

import { useEffect, useState } from "react";

/**
 * Represents the time left in the countdown.
 */
interface CountdownTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    isCompleted: boolean;
}

/**
 * A React hook that returns the countdown to a target date.
 * 
 * @param targetDate - The target date to count down to (Date object or date string).
 * @param onEnd - Optional callback invoked when the countdown ends.
 * @returns An object containing the remaining time and a flag for completion.
 * 
 * @example
 * const countdown = useCountdown('2025-12-31T23:59:59', () => {
 *   console.log('Countdown complete!');
 * });
 * 
 * console.log(countdown.minutes); // 12
 * console.log(countdown.isCompleted); // false
 */
export const useCountdown = (
    targetDate: Date | string,
    onEnd?: () => void
): CountdownTime => {
    const [timeLeft, setTimeLeft] = useState<CountdownTime>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        isCompleted: false,
    });

    useEffect(() => {
        const target = new Date(targetDate).getTime();

        const updateCountdown = () => {
            const now = Date.now();
            const distance = target - now;

            if (distance <= 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    milliseconds: 0,
                    isCompleted: true,
                });
                onEnd?.();
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            const milliseconds = distance % 1000;

            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
                milliseconds,
                isCompleted: false,
            });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [targetDate, onEnd]);

    return timeLeft;
};
