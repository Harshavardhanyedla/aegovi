"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Users,
    Clock,
    BarChart3,
    Search,
    Filter,
    ChevronRight,
    ShieldCheck,
    AlertCircle,
    Terminal,
    LayoutDashboard,
    Network,
    Lock,
    Shield
} from "lucide-react";
import { MetricCard } from "@/components/ui/metric-card";
import { ScoreIndicator } from "@/components/ui/score-indicator";
import Link from "next/link";
import { cn } from "@/lib/utils";

const recentInterviews = [
    { id: "C-9021", candidate: "Candidate 102", role: "Sr. Software Engineer", date: "Jan 04, 2026", confidence: 92, status: "Low" },
    { id: "C-9022", candidate: "Candidate 128", role: "Frontend Lead", date: "Jan 04, 2026", confidence: 74, status: "Medium" },
    { id: "C-9023", candidate: "Candidate 115", role: "Product Manager", date: "Jan 03, 2026", confidence: 98, status: "Low" },
    { id: "C-9024", candidate: "Candidate 109", role: "DevOps Architect", date: "Jan 03, 2026", confidence: 42, status: "High" },
    { id: "C-9025", candidate: "Candidate 141", role: "Fullstack Eng", date: "Jan 02, 2026", confidence: 88, status: "Low" },
];

const premiumEase = [0.23, 1, 0.32, 1] as const;

export default function Dashboard() {
    const [shadowMode, setShadowMode] = useState(true);

    return (
        <div className="section-container pt-32 pb-40 smooth-gpu">
            {/* 1. Header & Quick Actions */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20"
            >
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-white/10 text-brand-secondary text-[10px] font-black uppercase tracking-[0.2em]">
                            <LayoutDashboard className="w-3 h-3 text-brand-accent" />
                            Intelligence Command
                        </div>
                        {shadowMode && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-black uppercase tracking-widest animate-pulse">
                                <ShieldCheck className="w-3 h-3" />
                                Shadow Mode Active
                            </div>
                        )}
                    </div>
                    <h1 className="text-5xl font-black text-white tracking-tight mb-3">
                        {shadowMode ? "Aggregate Pilot View" : "Intelligence Hub"}
                    </h1>
                    <p className="text-xl text-brand-secondary font-medium italic">
                        {shadowMode
                            ? "Enterprise validation mode. Individual enforcement signals are suppressed."
                            : "Archival metadata and session integrity highlights."}
                    </p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => setShadowMode(!shadowMode)}
                        className={cn(
                            "glass-panel px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border-white/5",
                            shadowMode ? "text-amber-500 border-amber-500/20" : "text-slate-500 hover:text-white"
                        )}
                    >
                        {shadowMode ? "Disable Shadow Mode" : "Enable Shadow Mode"}
                    </button>
                    <Link href="/interview" className="btn-primary py-3 px-8 rounded-2xl flex items-center gap-2 shadow-xl shadow-brand-accent/10">
                        <Terminal className="w-4 h-4" />
                        Live Lab
                    </Link>
                </div>
            </motion.div>

            {/* 2. Key Metrics Layer */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {[
                    { label: "Active Sessions", value: "1,284", icon: Users, change: shadowMode ? undefined : { value: "+12.5%", trend: "up" as const } },
                    { label: shadowMode ? "Collective ICI" : "Avg. Confidence", value: "89.4%", icon: BarChart3 },
                    { label: "Stability Index", value: "95.8%", icon: ShieldCheck },
                    { label: "Archival Growth", value: "12TB", icon: Clock }
                ].map((m, i) => (
                    <motion.div
                        key={m.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 * i, ease: premiumEase }}
                    >
                        <MetricCard {...m} />
                    </motion.div>
                ))}
            </div>

            {/* 3. Primary Data Streams */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Table Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: premiumEase }}
                    className="lg:col-span-8"
                >
                    <div className="glass-panel rounded-[40px] border-white/5 overflow-hidden relative group">
                        <div className="px-10 py-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                            <h3 className="text-lg font-bold text-white flex items-center gap-3">
                                <Network className="w-5 h-5 text-brand-accent" />
                                Archival Stream
                            </h3>
                            <div className="relative w-full md:w-80">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Filter by Session UUID..."
                                    className="w-full pl-12 pr-6 py-3 rounded-2xl bg-white/5 border border-white/5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all"
                                />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 border-b border-white/5">
                                        <th className="px-10 py-6">Session ID</th>
                                        <th className="px-10 py-6">Confidence Index</th>
                                        <th className="px-10 py-6">Status Variance</th>
                                        <th className="px-10 py-6 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/[0.03]">
                                    {recentInterviews.map((session, idx) => (
                                        <tr
                                            key={session.id}
                                            className="hover:bg-white/[0.02] transition-colors duration-300 group/row"
                                        >
                                            <td className="px-10 py-6">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-white group-hover/row:text-brand-accent transition-colors">{session.id}</span>
                                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-0.5">{session.role}</span>
                                                </div>
                                            </td>
                                            <td className="px-10 py-6">
                                                <div className="flex items-center gap-6">
                                                    {shadowMode ? (
                                                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest italic">
                                                            <Lock className="w-3 h-3" />
                                                            Shadow Protected
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <ScoreIndicator score={session.confidence} label="" size="sm" />
                                                            <span className="text-sm font-mono text-slate-400 group-hover/row:text-white transition-colors">{session.confidence}%</span>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-10 py-6">
                                                <span className={cn(
                                                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all",
                                                    shadowMode
                                                        ? "text-slate-500 border-white/5 bg-white/5"
                                                        : session.status === "Low"
                                                            ? "text-teal-400 border-teal-400/20 bg-teal-400/5"
                                                            : session.status === "Medium"
                                                                ? "text-amber-400 border-amber-400/20 bg-amber-400/5"
                                                                : "text-red-400 border-red-400/20 bg-red-400/5"
                                                )}>
                                                    {shadowMode ? "Collective Signal" : `${session.status} Variance`}
                                                </span>
                                            </td>
                                            <td className="px-10 py-6 text-right">
                                                <Link
                                                    href="/report"
                                                    className="inline-flex items-center justify-center p-3 rounded-xl glass-panel border-white/5 text-brand-secondary hover:text-white hover:border-white/10 transition-all group/btn"
                                                >
                                                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="px-10 py-6 border-t border-white/5 bg-white/5 flex justify-between items-center">
                            <button className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-colors">
                                Retrieve full archival logs
                            </button>
                            <Link href="/dashboard/validation" className="text-[10px] font-black text-brand-accent hover:text-white uppercase tracking-[0.2em] transition-colors flex items-center gap-2">
                                <Shield className="w-3 h-3" />
                                Technical Validation Assets
                            </Link>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>
                </motion.div>

                {/* Sidebar Intelligence */}
                <div className="lg:col-span-4 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: premiumEase }}
                        className="bg-brand-primary p-12 rounded-[48px] text-white relative overflow-hidden shadow-2xl group"
                    >
                        <div className="relative z-10 space-y-8">
                            <h4 className="text-xl font-bold italic">Global Consensus</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                System-wide signal consistency is in the 94th percentile,
                                indicating a highly stable technical baseline across active sessions.
                            </p>
                            <div className="flex justify-center">
                                <ScoreIndicator score={94} label="System Accuracy" size="lg" className="text-white" />
                            </div>
                        </div>
                        <ShieldCheck className="absolute -bottom-20 -right-20 w-80 h-80 text-white/5 -rotate-12 group-hover:scale-110 transition-transform duration-1000" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: premiumEase }}
                        className="glass-panel p-10 rounded-[40px] border-white/5 space-y-10"
                    >
                        <h4 className="font-bold text-white flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 text-brand-secondary" />
                            Variance Legend
                        </h4>
                        <div className="space-y-8">
                            {[
                                { label: "Low Variance", color: "bg-teal-400", desc: "High technical consistency. Minimal session deviations observed." },
                                { label: "Medium Variance", color: "bg-amber-400", desc: "Observable shifts in context. Human review recommended." },
                                { label: "High Variance", color: "bg-red-400", desc: "Significant technical variants detected. Forensic report suggested." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-5 group">
                                    <div className={cn("w-2 h-2 rounded-full mt-2 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.1)]", item.color)} />
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold text-white">{item.label}</p>
                                        <p className="text-xs text-brand-secondary leading-relaxed italic">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
