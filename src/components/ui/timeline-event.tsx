"use client";

import { InformationChannel } from "@/core/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Cpu, Eye, Mic, Network, ShieldCheck } from "lucide-react";

interface TimelineEventProps {
    timestamp: number;
    title: string;
    channel?: InformationChannel;
    isLast?: boolean;
    uncertainty?: boolean;
}

export function TimelineEvent({ timestamp, title, channel, isLast, uncertainty }: TimelineEventProps) {
    const formatTime = (ts: number) => {
        const date = new Date(ts);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    const getChannelIcon = (ch?: InformationChannel) => {
        switch (ch) {
            case 'Auditory': return Mic;
            case 'Visual': return Eye;
            case 'Technical': return Cpu;
            case 'Cross-Channel': return Network;
            default: return ShieldCheck;
        }
    };

    const Icon = getChannelIcon(channel);

    return (
        <div className="flex gap-10 group">
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className={cn(
                        "w-4 h-4 rounded-full mt-1.5 shrink-0 z-20 border-2 border-background",
                        channel === 'Technical' ? "bg-teal-400" :
                            channel === 'Visual' ? "bg-sky-400" :
                                channel === 'Auditory' ? "bg-amber-400" :
                                    "bg-slate-400"
                    )}
                />
                {!isLast && (
                    <div className="w-px h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent -mt-1 relative z-10" />
                )}
            </div>

            <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pb-12 flex-grow"
            >
                <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="text-[10px] font-mono text-brand-secondary bg-white/5 border border-white/5 px-2 py-1 rounded-md tracking-wider">
                        {formatTime(timestamp)}
                    </span>
                    {channel && (
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                            <Icon className="w-3.5 h-3.5" />
                            {channel}
                        </div>
                    )}
                    {uncertainty && (
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-amber-500/80 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                            Uncertain Signal
                        </div>
                    )}
                </div>

                <div className="glass-panel p-5 rounded-2xl group-hover:bg-white/5 transition-colors duration-500">
                    <h4 className="text-sm font-bold text-white tracking-tight">{title}</h4>
                </div>
            </motion.div>
        </div>
    );
}
