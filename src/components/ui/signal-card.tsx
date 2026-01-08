"use client";

import { LucideIcon, ShieldCheck, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { InformationChannel } from "@/core/types";

interface SignalCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    observed: boolean;
    impact: "Low" | "Medium" | "High";
    channel: InformationChannel;
    explanation: string;
    limitations: string;
}

export function SignalCard({
    icon: Icon,
    title,
    description,
    observed,
    impact,
    channel,
    explanation,
    limitations
}: SignalCardProps) {
    const impactColor = {
        Low: "text-slate-400 border-slate-400/20 bg-slate-400/5",
        Medium: "text-amber-400 border-amber-400/20 bg-amber-400/5",
        High: "text-sky-400 border-sky-400/20 bg-sky-400/5",
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn(
                "glass-panel p-8 rounded-[32px] smooth-gpu border-l-4 transition-all duration-500",
                observed ? "border-l-brand-accent brightness-110" : "border-l-white/5 opacity-60 grayscale-[0.5]"
            )}
        >
            <div className="flex items-start gap-6">
                <div className={cn(
                    "p-4 rounded-2xl bg-white/5 border border-white/5 text-white shadow-inner",
                    observed && "text-brand-accent bg-brand-accent/10"
                )}>
                    <Icon className="w-6 h-6" />
                </div>

                <div className="flex-grow space-y-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-1 block">
                                Channel: {channel}
                            </span>
                            <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
                        </div>
                        {observed && (
                            <div className={cn("px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border", impactColor[impact])}>
                                {impact} Impact
                            </div>
                        )}
                    </div>

                    <p className="text-sm text-brand-secondary leading-relaxed max-w-xl">
                        {observed ? explanation : description}
                    </p>

                    <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                        <div className="flex items-start gap-3">
                            <Info className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                            <p className="text-[11px] text-slate-500 italic leading-relaxed">
                                <span className="font-bold text-slate-400 uppercase tracking-tighter not-italic mr-1">Context:</span>
                                {limitations}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
