"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScoreIndicatorProps {
    score: number;
    label?: string;
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}

const premiumEase = [0.23, 1, 0.32, 1] as const;

export function ScoreIndicator({ score, label = "Confidence Index", size = "md", className }: ScoreIndicatorProps) {
    const getThemeColor = (s: number) => {
        if (s >= 85) return "#2dd4bf"; // Teal
        if (s >= 60) return "#fbbf24"; // Amber
        return "#94a3b8"; // Slate (Neutral)
    };

    const sizes = {
        sm: "w-16 h-16 text-sm",
        md: "w-32 h-32 text-2xl",
        lg: "w-48 h-48 text-4xl",
        xl: "w-64 h-64 text-6xl",
    };

    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;
    const activeColor = getThemeColor(score);

    return (
        <div className={cn("flex flex-col items-center gap-6 smooth-gpu", className)}>
            <div className={cn("relative flex items-center justify-center group", sizes[size])}>
                {/* Background Glow */}
                <div
                    className="absolute inset-0 rounded-full blur-2xl opacity-20 transition-all duration-1000 group-hover:opacity-40"
                    style={{ backgroundColor: activeColor }}
                />

                <svg className="w-full h-full -rotate-90 transform relative z-10" viewBox="0 0 100 100">
                    {/* Track */}
                    <circle
                        className="stroke-white/5"
                        strokeWidth="4"
                        fill="transparent"
                        r={radius}
                        cx="50"
                        cy="50"
                    />

                    {/* Shadow/Depth Track */}
                    <circle
                        className="stroke-black/20"
                        strokeWidth="8"
                        fill="transparent"
                        r={radius}
                        cx="50"
                        cy="50"
                    />

                    {/* Progress with Gradient Effect */}
                    <motion.circle
                        stroke={activeColor}
                        strokeWidth="6"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 2, delay: 0.2, ease: premiumEase }}
                        strokeLinecap="round"
                        fill="transparent"
                        r={radius}
                        cx="50"
                        cy="50"
                        className="drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                        style={{ willChange: "stroke-dashoffset" }}
                    />
                </svg>

                <div className="absolute flex flex-col items-center justify-center z-20">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="font-black tracking-tighter text-white"
                    >
                        {score}%
                    </motion.span>
                </div>
            </div>

            {label && (
                <div className="flex flex-col items-center gap-1">
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-secondary">{label}</span>
                    <div className="h-px w-8 bg-white/10" />
                </div>
            )}
        </div>
    );
}
