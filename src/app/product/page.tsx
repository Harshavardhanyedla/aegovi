"use client";

import { motion } from "framer-motion";
import {
    EyeOff,
    Video,
    Mic,
    Search,
    Cpu,
    ShieldCheck,
    XCircle,
    CheckCircle2,
    Info,
    Network,
    Lock,
    Scale,
    Zap,
    MousePointer2,
    BarChart3,
    Clock
} from "lucide-react";
import { SignalCard } from "@/components/ui/signal-card";

const premiumEase = [0.23, 1, 0.32, 1] as const;

export default function ProductOverview() {
    return (
        <div className="flex flex-col gap-40 pb-40 smooth-gpu overflow-hidden">
            {/* 1. High-Fidelity Signal Architecture */}
            <section className="pt-32 pb-20 relative">
                <div className="section-container">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 space-y-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: premiumEase }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/10 text-brand-secondary text-[10px] font-black uppercase tracking-[0.2em]"
                            >
                                <Network className="w-3.5 h-3.5 text-brand-accent" />
                                Post-Interview Signal Map
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
                                className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]"
                            >
                                Signals, <br />
                                <span className="text-gradient">not accusations.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
                                className="text-xl text-brand-secondary leading-relaxed"
                            >
                                Aegovi models information flow across three primary technical channels
                                to construct a unified Integrity Confidence Index—without ever compromising candidate privacy.
                            </motion.p>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
                            {[
                                { title: "Technical Consistency", desc: "Mechanical typing patterns vs. code evolution.", icon: Cpu, accent: "brand-accent" },
                                { title: "Focus Stability", desc: "Browser and interface engagement metadata.", icon: MousePointer2, accent: "teal-400" },
                                { title: "Audio Context", desc: "Soundscape metadata and response timing.", icon: Mic, accent: "sky-400" },
                                { title: "Engine Consensus", desc: "Probabilistic cross-channel correlation.", icon: BarChart3, accent: "indigo-400" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.3 + (i * 0.1), ease: premiumEase }}
                                    className="glass-panel p-8 rounded-[32px] space-y-4 hover:border-white/20 transition-all group"
                                >
                                    <item.icon className={`w-8 h-8 text-${item.accent}`} />
                                    <h4 className="font-bold text-white tracking-tight">{item.title}</h4>
                                    <p className="text-xs text-brand-secondary leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Deep Dive: The Forensic Layers */}
            <section className="section-container">
                <div className="space-y-12 mb-20 text-center lg:text-left">
                    <h2 className="text-4xl font-black text-white tracking-tight italic">Forensic Intelligence Layers.</h2>
                    <p className="text-brand-secondary text-lg max-w-2xl mx-auto lg:mx-0">
                        Aegovi provides human-in-the-loop justifications for every signal detected,
                        mapping raw technical events to explainable context.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <SignalCard
                        title="Browser Focus Stability"
                        description="Analyzes window focus shifts to distinguish between standard documentation lookup and high-risk information retrieval."
                        observed={true}
                        impact="Low"
                        channel="Visual"
                        explanation="Consistent interface focus suggests independent engagement with the technical challenge."
                        limitations="Approved IDE extensions or reference docs are pre-mapped as consistent developer behavior."
                        icon={Search}
                    />
                    <SignalCard
                        title="Mechanical Technical Velocity"
                        description="Correlates physical keyboard input frequency with the architectural growth of source code."
                        observed={false}
                        impact="High"
                        channel="Technical"
                        explanation="Input rhythms align with established senior-level problem-solving patterns."
                        limitations="Mechanical velocity signals do not measure solution quality, only production consistency."
                        icon={Zap}
                    />
                    <SignalCard
                        title="Background Audio Environment"
                        description="Monitors soundscape metadata for external auditory influence or technical coaching signals."
                        observed={true}
                        impact="Medium"
                        channel="Auditory"
                        explanation="Audio baseline consistent with a single-speaker environment; minor context variance detected."
                        limitations="White noise, mechanical keyboards, or public spaces can influence channel sensitivity."
                        icon={Mic}
                    />
                    <SignalCard
                        title="Timing & Latency Variance"
                        description="Evaluates the correlation between technical complexity and response latency across the session."
                        observed={false}
                        impact="Medium"
                        channel="Probabilistic"
                        explanation="Response delays correlate naturally with observed technical depth increases."
                        limitations="Natural thinking periods vary significantly between individual problem-solving styles."
                        icon={Clock}
                    />
                </div>
            </section>

            {/* 3. The Red Line (Strict Technical Constraints) */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-950 rounded-[64px] p-12 md:p-24 border border-red-500/10 relative overflow-hidden group shadow-2xl shadow-red-500/5"
                >
                    <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-red-500/5 rounded-full blur-[120px] group-hover:bg-red-500/10 transition-all duration-1000" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-20 items-stretch">
                        <div className="md:w-1/2 space-y-10">
                            <div className="p-4 rounded-3xl bg-red-500/10 border border-red-500/20 w-fit">
                                <Lock className="w-10 h-10 text-red-400" />
                            </div>
                            <h2 className="text-5xl font-black text-white tracking-tight italic">The Red Line.</h2>
                            <p className="text-xl text-brand-secondary leading-relaxed">
                                Aegovi is built on a foundation of restraint. We believe that
                                high-integrity hiring does not require the erosion of personal privacy.
                                These boundaries are non-negotiable.
                            </p>
                            <div className="grid gap-6 py-6 h-full">
                                {[
                                    { text: "No Gaze tracking or Pupil analysis", icon: EyeOff },
                                    { text: "No Facial Biometrics or Emotion AI", icon: Video },
                                    { text: "No Biometric Fingerprinting", icon: ShieldCheck },
                                    { text: "No Real-time Interventions or Blockers", icon: XCircle }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-white font-bold text-lg">
                                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="md:w-1/2 flex items-center">
                            <div className="glass-panel p-12 rounded-[56px] border-red-500/20 bg-red-500/5 w-full space-y-8 relative overflow-hidden">
                                <div className="space-y-6 text-center relative z-10">
                                    <Scale className="w-16 h-16 text-red-500 mx-auto" />
                                    <h3 className="text-3xl font-black text-white italic">Governance Mandate</h3>
                                    <p className="text-lg text-brand-secondary leading-relaxed">
                                        Our outputs are strictly probabilistic. Aegovi never auto-rejects,
                                        never makes final hiring decisions, and never replaces human judgment.
                                        We provide the context—you make the call.
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
