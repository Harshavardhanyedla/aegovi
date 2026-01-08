"use client";

import { useState } from 'react';
import { useSessionCapture } from '@/hooks/use-session-capture';
import {
    Shield,
    Play,
    StopCircle,
    RefreshCw,
    Cpu,
    EyeOff,
    Mic,
    Network,
    Terminal,
    ChevronRight,
    ArrowRight,
    Info
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ScoreIndicator } from '@/components/ui/score-indicator';
import { SignalCard } from '@/components/ui/signal-card';

const premiumEase = [0.23, 1, 0.32, 1] as const;

export default function InterviewSessionLab() {
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [report, setReport] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const { isCapturing } = useSessionCapture(sessionId);

    const startSession = async () => {
        setLoading(true);
        const res = await fetch('/api/sessions', { method: 'POST' });
        const data = await res.json();
        setSessionId(data.id);
        setReport(null);
        setLoading(false);
    };

    const stopAndAnalyze = async () => {
        if (!sessionId) return;
        setLoading(true);
        const res = await fetch(`/api/sessions/${sessionId}/report`);
        const data = await res.json();
        setReport(data);
        setSessionId(null);
        setLoading(false);
    };

    return (
        <div className="section-container pt-32 pb-40 smooth-gpu">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="max-w-4xl mx-auto text-center space-y-8 mb-20"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/10 text-brand-secondary text-[11px] font-black uppercase tracking-[0.2em]">
                    <Terminal className="w-3.5 h-3.5 text-brand-accent" />
                    Session Laboratory
                </div>
                <h1 className="text-5xl font-black text-white tracking-tight leading-tight">
                    Intelligence <span className="text-gradient">Sandbox.</span>
                </h1>
                <p className="text-xl text-brand-secondary leading-relaxed">
                    Initialize a session to observe how our engine models technical information flow
                    and integrity signals in real-time.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto mb-20">
                {/* 1. Control Console */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
                    className="lg:col-span-7 space-y-8"
                >
                    <div className="glass-panel p-10 rounded-[40px] border-white/5 relative overflow-hidden group">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Play className="w-5 h-5 text-brand-accent fill-brand-accent/20" />
                                Action Matrix
                            </h3>
                            {isCapturing && (
                                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-black uppercase tracking-widest">
                                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                                    Capturing: {sessionId}
                                </div>
                            )}
                        </div>

                        {!sessionId ? (
                            <button
                                onClick={startSession}
                                disabled={loading}
                                className="w-full btn-primary py-6 rounded-3xl flex items-center justify-center gap-4 group"
                            >
                                {loading ? <RefreshCw className="w-6 h-6 animate-spin" /> : <Play className="w-6 h-6 fill-white" />}
                                Initialize Session Artifact
                            </button>
                        ) : (
                            <div className="space-y-8">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Switch Tabs", signal: "Visual Focus", desc: "Modeling context shifts." },
                                        { label: "Bulk Paste", signal: "Batch Input", desc: "Analyzing information bursts." },
                                        { label: "Deep Pause", signal: "Technical Velocity", desc: "Correlating thinking time." },
                                        { label: "Random Input", signal: "Mech. Consistency", desc: "Detecting input anomalies." }
                                    ].map((action, i) => (
                                        <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                            <p className="text-sm font-bold text-white mb-1">{action.label}</p>
                                            <p className="text-[10px] text-brand-secondary uppercase tracking-widest font-black leading-tight">
                                                Mode: {action.signal}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={stopAndAnalyze}
                                    disabled={loading}
                                    className="w-full btn-secondary text-white py-6 rounded-3xl flex items-center justify-center gap-4 border-red-500/20 hover:bg-red-500/10 hover:border-red-500/30 transition-all font-black text-lg"
                                >
                                    {loading ? <RefreshCw className="w-6 h-6 animate-spin" /> : <StopCircle className="w-6 h-6 text-red-500" />}
                                    Analyze Generated Signals
                                </button>
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>

                    <div className="glass-panel p-8 rounded-[32px] border-white/5">
                        <div className="flex items-start gap-4">
                            <Info className="w-5 h-5 text-brand-secondary shrink-0 mt-1" />
                            <p className="text-sm text-brand-secondary leading-relaxed">
                                This environment is used for verification of the <span className="text-white font-bold">Aegovi Integrity Core.</span>
                                Captured events are processed through our probabilistic engine to generate
                                an advisory confidence index.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Live Engine Status */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: premiumEase }}
                    className="lg:col-span-5"
                >
                    <div className="bg-slate-950 p-10 rounded-[40px] border border-white/5 h-full relative overflow-hidden flex flex-col items-center justify-center text-center space-y-10 group">
                        <div className="space-y-4 relative z-10 w-full">
                            <h3 className="text-lg font-black uppercase tracking-[0.3em] text-slate-500">Engine Metrics</h3>
                            <div className="h-px w-full bg-white/5" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center gap-8">
                            <ScoreIndicator
                                score={isCapturing ? 0 : (report?.confidenceIndex || 0)}
                                label={isCapturing ? "Calibration Pending" : "Confidence Index"}
                                size="lg"
                            />

                            <div className="space-y-2">
                                <span className="text-sm font-bold text-teal-400">Layer: {isCapturing ? "Observation" : "Reporting"}</span>
                                <p className="text-[11px] text-brand-secondary font-black uppercase tracking-widest italic leading-relaxed">
                                    {isCapturing ? "Capturing atomic session events..." : "Signal consensus achieved."}
                                </p>
                            </div>
                        </div>

                        <div className="w-full space-y-4 pt-10 border-t border-white/5 relative z-10">
                            {[
                                { label: "Capture Layer", value: isCapturing ? "ACTIVE" : "IDENTIFIED", active: isCapturing },
                                { label: "Signal Modules", value: "4 LOADED", active: true },
                                { label: "Context Engine", value: "ONLINE", active: true }
                            ].map((s, i) => (
                                <div key={i} className="flex justify-between items-center">
                                    <span className="text-xs font-mono text-slate-500">{s.label}:</span>
                                    <span className={cn("text-[10px] font-black uppercase tracking-widest", s.active ? "text-teal-400" : "text-slate-600")}>
                                        {s.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
                        <Shield className="absolute -bottom-20 -right-20 w-80 h-80 text-white/5 rotate-12" />
                    </div>
                </motion.div>
            </div>

            {/* 3. Probabilistic Results View */}
            <AnimatePresence>
                {report && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: premiumEase }}
                        className="max-w-6xl mx-auto space-y-12"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-white/5 pb-10">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-black text-white tracking-tight">Integrity Synthesis</h2>
                                <p className="text-brand-secondary text-lg">Probabilistic summary generated for session <span className="text-brand-accent font-mono">{report.sessionId}</span></p>
                            </div>
                            <div className={cn(
                                "px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-[0.2em] border",
                                report.status === 'Standard High-Confidence' ? "bg-teal-500/10 text-teal-400 border-teal-500/20" : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                            )}>
                                {report.status}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {report.signals.map((signal: any, i: number) => (
                                <SignalCard
                                    key={i}
                                    title={signal.name}
                                    description={signal.result.explanation}
                                    observed={signal.result.observed}
                                    impact={signal.result.impact}
                                    channel={signal.result.channel}
                                    explanation={signal.result.explanation}
                                    limitations={signal.result.limitations}
                                    icon={Cpu}
                                />
                            ))}
                        </div>

                        <div className="glass-panel p-10 rounded-[40px] border-white/5 space-y-10 group bg-slate-950/50">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-brand-accent/10 border border-brand-accent/20">
                                    <Shield className="w-6 h-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">Ethics Statement</h4>
                                    <p className="text-sm text-brand-secondary italic">Automatic generation per session protocol</p>
                                </div>
                            </div>
                            <p className="text-lg text-brand-secondary leading-relaxed border-l-2 border-brand-accent pl-8 italic">
                                "{report.ethicsStatement}"
                            </p>
                            <div className="flex justify-end pt-6">
                                <Link
                                    href="/report"
                                    className="btn-primary py-4 px-8 rounded-2xl flex items-center gap-3 active:scale-95 transition-all"
                                >
                                    Full Forensic Report
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
