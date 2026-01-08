"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MetricCardProps {
    label: string;
    value: string;
    icon: LucideIcon;
    change?: {
        value: string;
        trend: "up" | "down" | "neutral";
    };
    className?: string;
}

export function MetricCard({ label, value, icon: Icon, change, className }: MetricCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn("glass-panel glass-panel-hover p-8 rounded-3xl smooth-gpu group", className)}
        >
            <div className="flex justify-between items-start mb-10">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-brand-accent group-hover:bg-brand-accent/10 group-hover:text-white transition-all duration-500">
                    <Icon className="w-6 h-6" />
                </div>
                {change && (
                    <span className={cn(
                        "text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border",
                        change.trend === "up" ? "text-teal-400 border-teal-400/20 bg-teal-400/5" :
                            change.trend === "down" ? "text-amber-400 border-amber-400/20 bg-amber-400/5" :
                                "text-slate-400 border-slate-400/20 bg-slate-400/5"
                    )}>
                        {change.value}
                    </span>
                )}
            </div>
            <div>
                <p className="text-[11px] font-black text-brand-secondary uppercase tracking-[0.2em] mb-3">{label}</p>
                <p className="text-4xl font-black text-white tracking-tight group-hover:text-brand-accent transition-colors duration-500">{value}</p>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/10 transition-all duration-700" />
        </motion.div>
    );
}
