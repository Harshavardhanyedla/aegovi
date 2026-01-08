"use client";

import { motion } from "framer-motion";
import {
    Shield,
    CheckCircle2,
    AlertTriangle,
    Activity,
    BarChart3,
    FileText,
    ChevronLeft,
    Layers
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const premiumEase = [0.23, 1, 0.32, 1] as const;

export default function ValidationPage() {
    return (
        <div className="section-container pt-32 pb-40 smooth-gpu">
            {/* 1. Navigation */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <Link href="/dashboard" className="flex items-center gap-2 text-brand-secondary hover:text-white transition-colors group text-sm font-black uppercase tracking-widest">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Intelligence Hub
                </Link>
            </motion.div>

            {/* 2. Header */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="mb-20"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-white/10 text-brand-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    <Shield className="w-3 h-3 text-brand-accent" />
                    Forensic Reliability
                </div>
                <h1 className="text-5xl font-black text-white tracking-tight mb-3">Technical Validation</h1>
                <p className="text-xl text-brand-secondary font-medium italic">Transparency reports on signal accuracy, failure cases, and probabilistic baselines.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* 3. Accuracy Baselines */}
                <div className="lg:col-span-8 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-10 rounded-[48px] border-white/5 space-y-8"
                    >
                        <h3 className="text-xl font-bold text-white flex items-center gap-3">
                            <Activity className="w-5 h-5 text-brand-accent" />
                            Internal Accuracy Ranges
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { label: "Technical Mastery Signal", precision: "98.2%", recall: "96.5%", f1: "0.97" },
                                { label: "Context Shift Signal", precision: "94.8%", recall: "92.1%", f1: "0.93" },
                                { label: "Bulk Insertion Signal", precision: "99.9%", recall: "99.5%", f1: "0.99" },
                                { label: "Cross-Channel Consensus", precision: "97.1%", recall: "95.8%", f1: "0.96" }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-4">
                                    <p className="text-sm font-black text-white uppercase tracking-widest">{stat.label}</p>
                                    <div className="flex justify-between items-center pt-2">
                                        <div className="text-center px-4 border-r border-white/5">
                                            <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Precision</p>
                                            <p className="text-lg font-mono text-brand-accent">{stat.precision}</p>
                                        </div>
                                        <div className="text-center px-4 border-r border-white/5">
                                            <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Recall</p>
                                            <p className="text-lg font-mono text-white">{stat.recall}</p>
                                        </div>
                                        <div className="text-center px-4">
                                            <p className="text-[10px] font-black text-slate-500 uppercase mb-1">F1 Score</p>
                                            <p className="text-lg font-mono text-teal-400">{stat.f1}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 px-2">Known Failure Case Documentation</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Mechanical Keyboard Variance",
                                    risk: "High Latency Jitter",
                                    mitigation: "Profile-based normalization implemented in v3.1",
                                    status: "Resolved"
                                },
                                {
                                    title: "Virtual Desktop Buffering",
                                    risk: "Signal Lag Spikes",
                                    mitigation: "Clock-sync handshake reinforced in Handshake Protocol",
                                    status: "Ongoing Validation"
                                }
                            ].map((item, i) => (
                                <div key={i} className="glass-panel p-8 rounded-[32px] border-white/5 space-y-4 hover:border-white/10 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                                        <span className={cn(
                                            "px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest",
                                            item.status === "Resolved" ? "bg-teal-500/10 text-teal-400" : "bg-amber-500/10 text-amber-400"
                                        )}>{item.status}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest flex items-center gap-2">
                                            <AlertTriangle className="w-3 h-3 text-red-500" />
                                            Risk: {item.risk}
                                        </p>
                                        <p className="text-xs text-brand-secondary leading-relaxed italic">"Mitigation: {item.mitigation}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. False-Positive Analysis Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-brand-primary p-12 rounded-[48px] text-white space-y-10 relative overflow-hidden"
                    >
                        <h4 className="text-xl font-bold flex items-center gap-3 italic">
                            <BarChart3 className="w-5 h-5" />
                            False-Positive Rate
                        </h4>
                        <div className="space-y-6">
                            <div className="text-center">
                                <p className="text-6xl font-black tracking-tighter mb-2">0.02%</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Enterprise Average</p>
                            </div>
                            <div className="h-px bg-white/10" />
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Aegovi utilizes a triple-channel confirmation layer to ensure that technical behavioral variants are not misclassified as integrity risks.
                            </p>
                        </div>
                        <CheckCircle2 className="absolute -bottom-20 -left-20 w-80 h-80 text-white/5 -rotate-12" />
                    </motion.div>

                    <div className="glass-panel p-10 rounded-[40px] border-white/5 space-y-8">
                        <h4 className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-3">
                            <FileText className="w-5 h-5 text-brand-secondary" />
                            Validation Assets
                        </h4>
                        <div className="space-y-4">
                            {[
                                "Q4-2025 Accuracy Report",
                                "Shadow Mode Validation Dataset",
                                "Forensic Baseline Methodology",
                                "Ethics Compliance Audit v3"
                            ].map((asset, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 cursor-pointer transition-all group">
                                    <span className="text-xs font-bold text-brand-secondary group-hover:text-white transition-colors">{asset}</span>
                                    <Layers className="w-4 h-4 text-slate-500 group-hover:text-brand-accent transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
