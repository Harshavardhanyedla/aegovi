"use client";

import { motion } from "framer-motion";
import {
    Shield,
    FileText,
    Printer,
    Download,
    Share2,
    Clock,
    ChevronLeft,
    Terminal,
    Info,
    CheckCircle2,
    Lock
} from "lucide-react";
import Link from "next/link";
import { ScoreIndicator } from "@/components/ui/score-indicator";
import { TimelineEvent } from "@/components/ui/timeline-event";
import { cn } from "@/lib/utils";

const premiumEase = [0.23, 1, 0.32, 1] as const;

// Mock Data for the Forensic Report (Phase 3ICI v1)
const mockReport = {
    sessionId: "C-9022-FORENSIC",
    timestamp: Date.now(),
    confidenceIndex: 94.2,
    confidenceBounds: { lower: 92.8, upper: 95.6 },
    status: "Standard High-Confidence",
    calibrationProfile: "Conservative",
    reviewLabel: "Awaiting Review",
    auditSignature: "AEGOVI-SIG-8F2D1A-v3",
    candidate: "Anonymous ID: 102-B",
    role: "Senior Systems Engineer",
    contributionMap: {
        "paste-burst-001": 1.2,
        "focus-loss-001": 2.4,
        "sudden-solution-001": 2.2
    },
    ethicsStatement: "Aegovi strictly enforces technical constraints: No webcam ingestion, No facial analysis, No biometric ID. All outputs are probabilistic markers for human review.",
    probabilisticSummary: "System consensus suggests standard high-confidence based on a weighted analysis of 4 technical signals. ICI bounds indicate stable probabilistic inference.",
    timeline: [
        { timestamp: Date.now() - 3600000, title: "Forensic session initialized", channel: "Technical" },
        { timestamp: Date.now() - 3200000, title: "Signal Observation: Interface Context Shift", channel: "Visual", uncertainty: true },
        { timestamp: Date.now() - 2800000, title: "Signal Observation: Bulk Context Insertion", channel: "Technical" },
        { timestamp: Date.now() - 1800000, title: "Signal Observation: Technical Continuity Anomaly", channel: "Technical" },
        { timestamp: Date.now() - 300000, title: "Forensic session concluded", channel: "Technical" },
    ]
};

export default function ForensicReportPage() {
    return (
        <div className="section-container pt-32 pb-40 smooth-gpu">
            {/* 1. Navigation & Actions */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16"
            >
                <Link href="/dashboard" className="flex items-center gap-2 text-brand-secondary hover:text-white transition-colors group text-sm font-black uppercase tracking-widest">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Intelligence
                </Link>

                <div className="flex items-center gap-6">
                    <div className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Review Label:</span>
                        <select className="bg-transparent text-[10px] font-black text-white uppercase tracking-widest outline-none cursor-pointer">
                            <option className="bg-slate-900">Awaiting Review</option>
                            <option className="bg-slate-900">Aligned</option>
                            <option className="bg-slate-900">Contextually Explained</option>
                            <option className="bg-slate-900">Inconclusive</option>
                        </select>
                    </div>

                    <div className="flex gap-4">
                        <button className="p-3 rounded-xl glass-panel border-white/5 text-brand-secondary hover:text-white transition-all active:scale-95">
                            <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-3 rounded-xl glass-panel border-white/5 text-brand-secondary hover:text-white transition-all active:scale-95">
                            <Download className="w-4 h-4" />
                        </button>
                        <button className="btn-primary py-3 px-6 rounded-xl flex items-center gap-2 text-xs">
                            <Printer className="w-4 h-4" />
                            Print Forensic Copy
                        </button>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* 2. Main Forensic Data */}
                <div className="lg:col-span-8 space-y-12">
                    {/* Header Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: premiumEase }}
                        className="glass-panel p-12 rounded-[48px] border-white/5 space-y-10 relative overflow-hidden"
                    >
                        <div className="flex justify-between items-start relative z-10">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">Archival Record</span>
                                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[8px] font-mono text-slate-500">v3.0.1</span>
                                </div>
                                <h1 className="text-4xl font-black text-white tracking-tight">{mockReport.sessionId}</h1>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-white">{mockReport.candidate}</p>
                                <p className="text-[10px] font-black text-brand-secondary uppercase tracking-widest">{mockReport.role}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/5 relative z-10">
                            {[
                                { label: "Session Start", value: "09:42:01 AM", icon: Clock },
                                { label: "Calibration", value: mockReport.calibrationProfile, icon: Shield },
                                { label: "ICI Confidence", value: `± ${Math.round((mockReport.confidenceBounds.upper - mockReport.confidenceIndex) * 10) / 10}%`, icon: Info },
                                { label: "Forensic Loop", value: "Enabled", icon: Lock }
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex items-center gap-2 text-brand-secondary">
                                        <item.icon className="w-3 h-3" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                                    </div>
                                    <p className="text-sm font-bold text-white">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Contribution Breakdown */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 px-2">Signal Contribution</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { id: "focus-loss-001", name: "Context Shift", value: 24 },
                                { id: "paste-burst-001", name: "Bulk Insertion", value: 12 },
                                { id: "sudden-solution-001", name: "Sudden Solution", value: 22 }
                            ].map((s) => (
                                <div key={s.id} className="glass-panel p-6 rounded-2xl border-white/5 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{s.name}</span>
                                        <span className="text-[10px] font-mono text-brand-secondary">-{s.value}%</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${s.value * 2}%` }}
                                            viewport={{ once: true }}
                                            className="h-full bg-brand-accent/40"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Probabilistic Timeline */}
                    <div className="space-y-10 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="h-px flex-grow bg-white/5" />
                            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 whitespace-nowrap">Forensic Timeline</h3>
                            <div className="h-px flex-grow bg-white/5" />
                        </div>

                        <div className="pl-6 border-l border-white/5 space-y-2 relative ml-4">
                            {mockReport.timeline.map((event, i) => (
                                <TimelineEvent
                                    key={i}
                                    timestamp={event.timestamp}
                                    title={event.title}
                                    channel={event.channel as any}
                                    uncertainty={event.uncertainty}
                                    isLast={i === mockReport.timeline.length - 1}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RAW EXPORT */}
                    <div className="glass-panel p-10 rounded-[32px] border-white/5 bg-slate-950/50 space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-black text-white flex items-center gap-2 tracking-[0.1em] uppercase">
                                <Terminal className="w-4 h-4 text-brand-secondary" />
                                Archival Event Stream
                            </h3>
                            <span className="text-[10px] font-mono text-brand-accent px-2 py-0.5 rounded bg-brand-accent/10">IMMUTABLE_SNAPSHOT</span>
                        </div>
                        <div className="bg-black/40 rounded-2xl p-6 font-mono text-[10px] text-slate-400 overflow-x-auto leading-relaxed border border-white/5">
                            <code className="block">
                                [SIG_ENGINE_v3.0.1] INITIALIZING... <br />
                                [ICI_CALC] WEIGHTED_AGGREGATION_START <br />
                                [CALIBRATION] PROFILE: CONSERVATIVE <br />
                                [SNAPSHOT] {mockReport.auditSignature} <br />
                                [TERMINAL] Forensic session concluded with ICI: {mockReport.confidenceIndex} <br />
                            </code>
                        </div>
                    </div>
                </div>

                {/* 3. Sidebar Intelligence */}
                <div className="lg:col-span-4 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
                        className="bg-brand-primary p-12 rounded-[48px] text-white space-y-10 relative overflow-hidden shadow-2xl"
                    >
                        <div className="relative">
                            <ScoreIndicator score={mockReport.confidenceIndex} label="Integrity Index (ICI)" size="xl" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full animate-pulse" />
                        </div>

                        <div className="space-y-4 text-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="px-4 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 text-[10px] font-black uppercase tracking-widest">
                                    {mockReport.status}
                                </div>
                                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                                    Range: {mockReport.confidenceBounds.lower}% — {mockReport.confidenceBounds.upper}%
                                </span>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed italic">
                                "{mockReport.probabilisticSummary}"
                            </p>
                        </div>

                        <CheckCircle2 className="absolute -bottom-20 -left-20 w-80 h-80 text-white/5 -rotate-12" />
                    </motion.div>

                    <div className="glass-panel p-10 rounded-[40px] border-white/5 space-y-8">
                        <div className="flex items-center gap-3">
                            <Lock className="w-5 h-5 text-brand-secondary" />
                            <h4 className="text-sm font-black uppercase tracking-widest text-white">Forensic Reliability</h4>
                        </div>
                        <div className="space-y-4">
                            <p className="text-xs text-brand-secondary leading-relaxed">
                                This report is an immutable snapshot versioned by engine {mockReport.auditSignature.split('-')[3]}.
                            </p>
                            <div className="p-4 rounded-2xl bg-black/30 border border-white/5 font-mono text-[9px] text-brand-accent break-all leading-tight">
                                {mockReport.auditSignature}
                            </div>
                        </div>
                        <div className="pt-4 border-t border-white/5">
                            <p className="text-[10px] text-brand-secondary leading-relaxed">
                                <span className="font-bold text-slate-400 uppercase tracking-tighter mr-2">Ethics:</span>
                                {mockReport.ethicsStatement}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
