"use client";

import {
    Shield,
    Scale,
    EyeOff,
    Cpu,
    UserCheck,
    Lock,
    ArrowRight,
    Search,
    Network,
    Terminal
} from "lucide-react";
import { motion } from "framer-motion";

const principles = [
    {
        icon: EyeOff,
        title: "No Surveillance",
        description: "We specifically exclude facial analysis, emotion AI, and gaze tracking. Integrity is modeled via information flow, not biological markers.",
        channel: "Visual"
    },
    {
        icon: Scale,
        title: "Advisory Nature",
        description: "Aegovi never makes final hiring decisions. Every signal is a probabilistic indicator intended for human review and context.",
        channel: "Legal/Ethical"
    },
    {
        icon: UserCheck,
        title: "Candidate Dignity",
        description: "Privacy is a feature. We archive forensic technical metadata without ever storing video of the candidate's home environment.",
        channel: "Privacy"
    },
    {
        icon: Cpu,
        title: "Explainable Data",
        description: "Every variance signal includes a human-readable justification and common false-positive scenarios to ensure fair judgment.",
        channel: "Technical"
    }
];

const premiumEase = [0.23, 1, 0.32, 1] as const;

export default function EthicsPage() {
    return (
        <div className="flex flex-col gap-40 pb-40 smooth-gpu overflow-hidden">
            {/* 1. Manifesto Header */}
            <section className="pt-32 pb-20 relative">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: premiumEase }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/10 text-brand-secondary text-[11px] font-black uppercase tracking-[0.2em]"
                        >
                            <Shield className="w-3.5 h-3.5 text-brand-accent" />
                            The Aegovi Manifesto
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
                            className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]"
                        >
                            Ethics of <br />
                            <span className="text-gradient">Signal-Based Hiring.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
                            className="text-xl text-brand-secondary leading-relaxed max-w-2xl mx-auto"
                        >
                            We believe technical integrity can be achieved without compromising candidate dignity.
                            Aegovi is built for teams that value <span className="text-white font-bold">forensic trust</span> over surveillance.
                        </motion.p>
                    </div>
                </div>
                {/* Decorative background blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] -z-10" />
            </section>

            {/* 2. Principles Grid */}
            <section className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {principles.map((principle, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: premiumEase }}
                            className="glass-panel p-10 rounded-[40px] border-white/5 hover:bg-white/[0.02] transition-colors group"
                        >
                            <div className="flex flex-col h-full space-y-8">
                                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl w-fit text-brand-accent group-hover:scale-110 transition-transform duration-500">
                                    <principle.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">
                                        Mandate: {principle.channel}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-4">{principle.title}</h3>
                                    <p className="text-brand-secondary leading-relaxed">{principle.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. Non-Negotiable Biases */}
            <section className="bg-slate-950 py-40 border-y border-white/5 relative overflow-hidden">
                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: premiumEase }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-5xl font-black text-white tracking-tight mb-20 italic">Non-negotiable biases.</h2>
                        <div className="space-y-16">
                            {[
                                { title: "Presumption of Innocence", desc: "Every behavioral shift is considered a false positive until archival metadata reveals a consistent pattern of information transfer." },
                                { title: "Silent Intelligence", desc: "Aegovi is invisible during the session. We believe the interview should be a conversation, not an interrogation under spotlight." },
                                { title: "Ownership of Data", desc: "Enterprise teams own their archival logs. Candidates have the right to request their forensic summary at any time." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), ease: premiumEase }}
                                    className="flex gap-10 items-start group"
                                >
                                    <div className="text-brand-accent font-black text-5xl opacity-20 group-hover:opacity-100 transition-opacity duration-500 font-mono">
                                        0{i + 1}
                                    </div>
                                    <div className="space-y-4 pt-4">
                                        <h4 className="text-2xl font-bold text-white tracking-tight">{item.title}</h4>
                                        <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px] -z-0" />
            </section>

            {/* 4. Action / Whitepaper */}
            <section className="section-container text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: premiumEase }}
                    className="glass-panel p-20 rounded-[64px] border-white/5 space-y-10 relative overflow-hidden group"
                >
                    <div className="relative z-10 flex flex-col items-center space-y-8">
                        <Terminal className="w-16 h-16 text-brand-secondary opacity-40" />
                        <h2 className="text-4xl font-black text-white tracking-tight">Security & Compliance Archival</h2>
                        <p className="text-brand-secondary text-lg max-w-xl mx-auto">
                            Examine our deep technical documentation on encryption layers,
                            data purging protocols, and global compliance.
                        </p>
                        <button className="btn-primary py-5 px-10 rounded-3xl flex items-center gap-4 transition-all active:scale-95 text-lg font-black shadow-2xl shadow-brand-accent/10">
                            <Lock className="w-5 h-5" />
                            Security Whitepaper
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                    {/* Pulsing decoration */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </motion.div>
            </section>
        </div>
    );
}
