"use client";

import {
    Shield,
    Settings,
    Bell,
    User,
    Database,
    Lock,
    ToggleLeft as Toggle,
    Sliders,
    AlertCircle,
    Download,
    Trash2,
    ChevronRight,
    Cpu,
    Fingerprint,
    Network,
    Terminal
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
    { id: "signal-config", label: "Signal Forge", icon: Sliders },
    { id: "consent", label: "Handshake Protocol", icon: Shield },
    { id: "data", label: "Archival Governance", icon: Database },
    { id: "security", label: "Security & Access", icon: Lock },
];

const premiumEase = [0.23, 1, 0.32, 1] as const;

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("signal-config");

    return (
        <div className="section-container pt-32 pb-40 smooth-gpu">
            {/* 1. Header */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="mb-20"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-white/10 text-brand-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    <Settings className="w-3 h-3 text-brand-accent" />
                    System Preferences
                </div>
                <h1 className="text-5xl font-black text-white tracking-tight mb-3">Governance Command</h1>
                <p className="text-xl text-brand-secondary font-medium">Configure forensic thresholds and technical integrity boundaries.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* 2. Sidebar Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
                    className="lg:col-span-3 space-y-4"
                >
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveTab(section.id)}
                            className={cn(
                                "w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all relative group overflow-hidden",
                                activeTab === section.id
                                    ? "text-white bg-white/5 border border-white/10 shadow-lg shadow-black/20"
                                    : "text-slate-500 hover:text-white border border-transparent"
                            )}
                        >
                            <section.icon className={cn(
                                "w-4 h-4 transition-colors",
                                activeTab === section.id ? "text-brand-accent" : "text-slate-500 group-hover:text-brand-secondary"
                            )} />
                            {section.label}
                            {activeTab === section.id && (
                                <motion.div layoutId="tab-active" className="absolute left-0 w-1 h-1/2 bg-brand-accent rounded-full my-auto inset-y-0" />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* 3. Content Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: premiumEase }}
                    className="lg:col-span-9"
                >
                    <div className="glass-panel rounded-[48px] border-white/5 p-12 relative overflow-hidden group">
                        <AnimatePresence mode="wait">
                            {activeTab === "signal-config" && (
                                <motion.div
                                    key="signal"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-12"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-black text-white flex items-center gap-3">
                                                <Sliders className="w-5 h-5 text-brand-secondary" />
                                                Signal Forge
                                            </h3>
                                            <p className="text-slate-400">Modulate the engine's sensitivity to technical behavioral variants.</p>
                                        </div>
                                        <div className="px-4 py-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-bold uppercase tracking-widest">
                                            Live CALIBRATION
                                        </div>
                                    </div>

                                    <div className="space-y-6 pt-4">
                                        <h4 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em]">Enterprise Calibration Profile</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {[
                                                { id: "conservative", name: "Conservative", desc: "Highest forensic certainty. Minimizes false positives." },
                                                { id: "balanced", name: "Balanced", desc: "Default enterprise baseline for general technical review." },
                                                { id: "research", name: "Research", desc: "Maximum signal sensitivity. Experimental validation only." }
                                            ].map((profile) => (
                                                <button
                                                    key={profile.id}
                                                    className={cn(
                                                        "p-6 rounded-3xl border text-left transition-all group",
                                                        profile.id === "conservative"
                                                            ? "bg-white/5 border-white/10 ring-1 ring-brand-accent/20"
                                                            : "bg-black/20 border-white/5 hover:border-white/10"
                                                    )}
                                                >
                                                    <p className="text-xs font-black text-white uppercase tracking-widest mb-2 flex items-center justify-between">
                                                        {profile.name}
                                                        {profile.id === "conservative" && <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(255,255,255,0.4)]" />}
                                                    </p>
                                                    <p className="text-[10px] text-slate-500 leading-relaxed italic group-hover:text-slate-400 transition-colors">{profile.desc}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                                        <div className="space-y-6 p-8 rounded-3xl bg-white/5 border border-white/5">
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <label className="text-xs font-black uppercase tracking-widest text-slate-300">Technical Mastery Sensitivity</label>
                                                    <span className="text-[10px] font-mono text-brand-accent">85%</span>
                                                </div>
                                                <input type="range" defaultValue={85} className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-brand-accent" />
                                            </div>
                                            <p className="text-[10px] text-slate-500 leading-relaxed italic">
                                                Controls how strictly syntax shifts and mechanical input velocity are analyzed against the senior engineer baseline.
                                            </p>
                                        </div>

                                        <div className="space-y-6 p-8 rounded-3xl bg-white/5 border border-white/5">
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <label className="text-xs font-black uppercase tracking-widest text-slate-300">Off-Focus Threshold</label>
                                                    <span className="text-[10px] font-mono text-brand-accent">12s</span>
                                                </div>
                                                <input type="range" defaultValue={12} className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-brand-accent" />
                                            </div>
                                            <p className="text-[10px] text-slate-500 leading-relaxed italic">
                                                The allowable duration for secondary interface focus before a context shift variance is initialized.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-10 border-t border-white/5 space-y-8">
                                        <h4 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-3">
                                            <Network className="w-4 h-4 text-brand-secondary" />
                                            Layer Status
                                        </h4>
                                        <div className="space-y-4">
                                            {[
                                                { label: "Archival Input Checksums", enabled: true, icon: Fingerprint },
                                                { label: "Ambient Auditory Filtering", enabled: true, icon: Database },
                                                { label: "Layered Virtualization Detection", enabled: false, icon: Cpu },
                                                { label: "Forensic Payload Logging", enabled: true, icon: Terminal },
                                            ].map((signal, idx) => (
                                                <div key={idx} className="flex justify-between items-center p-6 bg-white/[0.03] rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                                                    <div className="flex items-center gap-4">
                                                        <signal.icon className="w-4 h-4 text-slate-500" />
                                                        <span className="text-[11px] font-black uppercase tracking-widest text-white">{signal.label}</span>
                                                    </div>
                                                    <div className={cn(
                                                        "w-10 h-5 rounded-full relative transition-all cursor-pointer",
                                                        signal.enabled ? "bg-brand-accent/30" : "bg-slate-800"
                                                    )}>
                                                        <div className={cn(
                                                            "absolute top-1 w-3 h-3 rounded-full transition-all duration-300",
                                                            signal.enabled ? "left-6 bg-brand-accent shadow-[0_0_8px_rgba(255,255,255,0.4)]" : "left-1 bg-slate-600"
                                                        )} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "data" && (
                                <motion.div
                                    key="data"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-12"
                                >
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-white flex items-center gap-3">
                                            <Database className="w-5 h-5 text-brand-secondary" />
                                            Archival Governance
                                        </h3>
                                        <p className="text-slate-400">Manage technical lifecycle and organization-level ethics kill switches.</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center p-6 bg-red-500/5 rounded-3xl border border-red-500/10">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                                    <AlertCircle className="w-5 h-5 text-red-500" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-black text-white uppercase tracking-widest">Global Intelligence Kill Switch</p>
                                                    <p className="text-[10px] text-red-500/60 font-medium italic">Immediately disables all signal analysis for every session across the organization.</p>
                                                </div>
                                            </div>
                                            <div className="w-10 h-5 bg-slate-800 rounded-full relative cursor-pointer">
                                                <div className="absolute top-1 left-1 w-3 h-3 bg-slate-600 rounded-full" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 space-y-6">
                                            <div className="space-y-2">
                                                <h4 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em]">Signal Purge Protocol</h4>
                                                <p className="text-xs text-slate-400 leading-relaxed italic">Delete raw mechanical input timestamps automatically.</p>
                                            </div>
                                            <select className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 text-[11px] font-black uppercase tracking-widest text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/20">
                                                <option>14 Standard Days</option>
                                                <option>30 Audit Days</option>
                                                <option>90 Archival Days</option>
                                            </select>
                                        </div>

                                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 space-y-6">
                                            <div className="space-y-2">
                                                <h4 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em]">Archival Retention</h4>
                                                <p className="text-xs text-slate-400 leading-relaxed italic">Store final confidence summaries and session artifact scores.</p>
                                            </div>
                                            <select className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 text-[11px] font-black uppercase tracking-widest text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/20">
                                                <option>1 Fiscal Year</option>
                                                <option>2 Regulatory Years</option>
                                                <option>Indefinite Archive</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="pt-10 border-t border-white/5 space-y-6">
                                        <button className="w-full flex justify-between items-center p-6 bg-white/5 border border-white/5 rounded-[32px] hover:bg-white/[0.08] transition-all group">
                                            <div className="flex flex-col items-start gap-1">
                                                <span className="text-[11px] font-black uppercase tracking-widest text-white">Full Archival Export</span>
                                                <span className="text-[10px] text-slate-500 font-medium group-hover:text-slate-400">Retrieve all session summaries in JSON payload format.</span>
                                            </div>
                                            <Download className="w-5 h-5 text-brand-secondary group-hover:text-white transition-colors" />
                                        </button>

                                        <button className="w-full flex justify-between items-center p-6 bg-red-500/5 border border-red-500/20 rounded-[32px] hover:bg-red-500/10 transition-all group">
                                            <div className="flex flex-col items-start gap-1 text-left">
                                                <span className="text-[11px] font-black uppercase tracking-widest text-red-500">Emergency Organization Purge</span>
                                                <span className="text-[10px] text-red-500/50 font-medium group-hover:text-red-500/80 italic">Irreversible: Deletes every session, hash, and metadata log immediately. Follows "Ethics Level-3" protocol.</span>
                                            </div>
                                            <Trash2 className="w-5 h-5 text-red-500 group-hover:animate-pulse" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "consent" && (
                                <motion.div
                                    key="consent"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-12"
                                >
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-white flex items-center gap-3">
                                            <Shield className="w-5 h-5 text-brand-secondary" />
                                            Handshake Protocol
                                        </h3>
                                        <p className="text-slate-400">Configure candidate transparency and legal consent workflows.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 space-y-6">
                                            <h4 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em]">Active Disclosure</h4>
                                            <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                                                <span className="text-xs text-white font-bold">Standard Ethics Overlay</span>
                                                <div className="w-10 h-5 bg-brand-accent/30 rounded-full relative cursor-pointer">
                                                    <div className="absolute top-1 left-6 w-3 h-3 bg-brand-accent rounded-full" />
                                                </div>
                                            </div>
                                            <p className="text-[10px] text-slate-500 leading-relaxed">Displays a non-intrusive transparency badge to the candidate, explaining the post-session intelligence model.</p>
                                        </div>

                                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 space-y-6">
                                            <h4 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em]">Consent Persistence</h4>
                                            <select className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 text-[11px] font-black uppercase tracking-widest text-white focus:outline-none">
                                                <option>Session Specific</option>
                                                <option>90-Day Enterprise Consent</option>
                                                <option>Indefinite Governance</option>
                                            </select>
                                            <p className="text-[10px] text-slate-500 leading-relaxed">Determines how long a candidate's consent remains valid for cross-session signal analysis.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "security" && (
                                <motion.div
                                    key="security"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-12"
                                >
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-white flex items-center gap-3">
                                            <Lock className="w-5 h-5 text-brand-secondary" />
                                            Security & Access
                                        </h3>
                                        <p className="text-slate-400">Manage encryption keys and organization-level forensic access.</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center p-6 bg-white/[0.03] rounded-3xl border border-white/5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-2xl bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                                                    <Fingerprint className="w-5 h-5 text-brand-accent" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-black text-white uppercase tracking-widest">Multi-Factor Forensic Access</p>
                                                    <p className="text-[10px] text-slate-500">Requires additional verification to view reports with high variance.</p>
                                                </div>
                                            </div>
                                            <div className="w-10 h-5 bg-teal-500/30 rounded-full relative cursor-pointer">
                                                <div className="absolute top-1 left-6 w-3 h-3 bg-teal-400 rounded-full" />
                                            </div>
                                        </div>

                                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 space-y-4">
                                            <div className="flex justify-between items-center">
                                                <h4 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em]">Forensic API Key</h4>
                                                <span className="text-[10px] font-mono text-slate-500">AEGOVI_LIVE_v4_...6789</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <input disabled type="password" value="************************" className="flex-grow bg-black/40 border border-white/5 rounded-xl px-4 py-2 font-mono text-xs text-slate-500" />
                                                <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all">Regenerate</button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Background Decoration */}
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none -z-10 group-hover:bg-brand-accent/10 transition-colors duration-1000" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
