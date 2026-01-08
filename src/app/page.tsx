"use client";

import {
  Shield,
  Cpu,
  EyeOff,
  ArrowRight,
  Play,
  Zap,
  Lock,
  Users,
  CheckCircle2,
  FileText,
  BarChart3,
  Calendar,
  Layers,
  Sparkles,
  HelpCircle,
  Clock,
  ExternalLink,
  ChevronDown,
  Mail,
  Scale
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ScoreIndicator } from "@/components/ui/score-indicator";
import { MetricCard } from "@/components/ui/metric-card";
import { cn } from "@/lib/utils";

const premiumEase = [0.23, 1, 0.32, 1] as const;

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-40 pb-40 smooth-gpu overflow-hidden">
      {/* 1. Ultra-Premium Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-teal-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="section-container relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/10 text-brand-secondary text-[11px] font-black uppercase tracking-[0.2em]"
            >
              <Shield className="w-3.5 h-3.5 text-brand-accent" />
              Trusted by hiring teams worldwide
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white"
            >
              Interview remotely — <br />
              <span className="text-gradient">without sacrificing integrity.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
              className="text-xl md:text-2xl text-brand-secondary leading-relaxed max-w-3xl"
            >
              Aegovi provides post-interview integrity intelligence using explainable AI —
              without invasive surveillance or candidate intimidation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
              className="flex flex-wrap justify-center gap-6"
            >
              <button className="btn-primary flex items-center gap-3">
                See how it works
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link href="/report" className="btn-secondary flex items-center gap-3">
                View sample report
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="pt-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500"
            >
              Insights shaped by 100+ interviewers
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: premiumEase }}
            className="mt-32 glass-panel p-2 rounded-[40px] border-white/5 shadow-2xl relative"
          >
            <div className="bg-brand-primary rounded-[38px] p-8 md:p-12 overflow-hidden relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 space-y-12 text-center lg:text-left">
                  <ScoreIndicator score={94} label="Integrity Confidence Index" size="lg" />
                  <div className="space-y-4">
                    <p className="text-sm font-bold text-teal-400 uppercase tracking-widest">Post-Session Summary</p>
                    <h3 className="text-3xl font-black text-white italic">High Confidence</h3>
                    <p className="text-brand-secondary text-sm leading-relaxed">
                      "Session metadata correlates 98% with established technical mechanical input baselines. Observed context shifts relate to documented architectural reference lookups."
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Interface Stability", val: "High", icon: Shield, ch: "Verified" },
                    { label: "Technical Velocity", val: "Consistent", icon: Zap, ch: "Mastery" },
                    { label: "Information Flow", val: "Optimal", icon: EyeOff, ch: "Probabilistic" },
                    { label: "Context Variance", val: "Minimal", icon: Users, ch: "Logged" }
                  ].map((m, i) => (
                    <MetricCard
                      key={i}
                      label={m.label}
                      value={m.val}
                      icon={m.icon}
                      change={{ value: m.ch, trend: "up" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Thought Leadership Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-slate-950 rounded-[48px] border border-white/5 p-12 md:p-20 overflow-hidden"
        >
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.3em]">Insights Archive</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                2026 Study: 5 ways to reduce AI-assisted interview risk without harming candidate experience.
              </h2>
            </div>

            <p className="text-xl text-brand-secondary leading-relaxed">
              Integrity is an intelligence problem, not a policing problem. Learn how enterprise teams are
              establishing authority and ethics through post-session observation rather than real-time intervention.
            </p>

            <button className="flex items-center gap-3 text-white font-black text-sm uppercase tracking-widest group">
              Read the Full Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* 3. Science Section */}
      <section className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-white tracking-tight italic">The Science Behind Aegovi.</h2>
              <p className="text-xl text-brand-secondary leading-relaxed">
                Aegovi applies a constrained information-flow intelligence model to post-interview analysis.
                Instead of relying on biometric surveillance or real-time enforcement, we evaluate how information
                may have influenced responses through behavioral consistency, timing patterns, and contextual signals.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 space-y-6">
              <p className="text-sm text-slate-400 leading-relaxed italic">
                The system correlates browser focus stability, technical response depth, audio environment context, and response latency into a unified integrity confidence model.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "No eye tracking", icon: EyeOff },
                  { label: "No facial recognition", icon: Shield },
                  { label: "No biometric ID", icon: Lock },
                  { label: "No real-time accusations", icon: Zap }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel p-10 rounded-[48px] border-white/10 z-10 relative overflow-hidden">
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Forensic Pattern</span>
                  <span className="text-[10px] font-mono text-brand-accent">LIVE_STREAM</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Mechanical Input Delta", val: "94%" },
                    { label: "Contextual Variance", val: "Minor" },
                    { label: "Information Transfer Index", val: "Critical" },
                    { label: "Response Latency Baseline", val: "Matched" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center group">
                      <span className="text-xs font-bold text-brand-secondary group-hover:text-white transition-colors">{row.label}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} className="h-full bg-brand-accent" />
                        </div>
                        <span className="text-[10px] font-mono text-white">{row.val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="section-container space-y-20">
        <h2 className="text-5xl font-black text-white tracking-tight text-center">How Aegovi Delivers Interview Integrity.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-panel p-12 rounded-[48px] border-white/5 hover:bg-white/[0.02] transition-colors relative group overflow-hidden">
            <div className="relative z-10 space-y-10">
              <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Users className="w-8 h-8" />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-white italic">For Interviewers</h3>
                <ul className="space-y-4">
                  {[
                    "Connect your calendar (Google, Outlook, Apple)",
                    "Conduct interviews as usual — no interruption",
                    "Receive a post-interview integrity report with clear explanations"
                  ].map((txt, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-secondary">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-lg leading-snug">{txt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          </div>

          <div className="glass-panel p-12 rounded-[48px] border-white/5 hover:bg-white/[0.02] transition-colors relative group overflow-hidden">
            <div className="relative z-10 space-y-10">
              <div className="w-16 h-16 rounded-2xl bg-teal-400/10 flex items-center justify-center text-teal-400">
                <UserCheck className="w-8 h-8" />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-white italic">For Candidates</h3>
                <ul className="space-y-4">
                  {[
                    "No additional setup required",
                    "No invasive real-time monitoring",
                    "No behavior modification pressure",
                    "Respectful, post-hoc evaluation only"
                  ].map((txt, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-secondary">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-lg leading-snug">{txt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
          </div>
        </div>
      </section>

      {/* 5. Platform Features */}
      <section className="bg-slate-950 py-40 border-y border-white/5">
        <div className="section-container space-y-20">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-5xl font-black text-white tracking-tight leading-tight">Everything You Need in One Platform.</h2>
            <p className="text-xl text-brand-secondary leading-relaxed">
              Powerful post-session tools designed for transparency, not surveillance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity Signal Intelligence",
                desc: "Post-interview signals indicating how consistently responses were produced — without accusations.",
                icon: BarChart3
              },
              {
                title: "AI Fluency Observation",
                desc: "When AI usage is allowed, Aegovi evaluates how candidates leverage tools rather than penalizing usage.",
                icon: Sparkles
              },
              {
                title: "Automated Notes & Insights",
                desc: "Structured interview summaries, key moments, and technical highlights generated automatically.",
                icon: FileText
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[40px] border border-white/5 hover:bg-white/[0.02] transition-all space-y-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-white tracking-tight">{f.title}</h4>
                  <p className="text-brand-secondary leading-relaxed text-sm">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing Section */}
      <section className="section-container space-y-20">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-5xl font-black text-white tracking-tight">Choose Your Plan.</h2>
          <p className="text-xl text-brand-secondary">Fair usage. Enterprise security. No per-seat penalties.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {[
            {
              name: "Starter",
              price: "$499/mo",
              desc: "Post-interview integrity signals for fast-growing technical teams.",
              features: ["Post-interview integrity signals", "Forensic timeline", "Email support", "Email summaries", "Exportable reports"],
              cta: "Start with Starter",
              premium: false
            },
            {
              name: "Growth",
              price: "$1,299/mo",
              desc: "Deep intelligence and automation for high-volume hiring.",
              features: ["Everything in Starter", "AI Fluency Observation", "Automated technical notes", "ATS Integration", "Priority Support"],
              cta: "Scale with Growth",
              premium: true
            },
            {
              name: "Enterprise",
              price: "Custom",
              desc: "Global reach with maximum governance and control.",
              features: ["Custom analytics layers", "SSO & Audit logs", "Dedicated compliance manager", "Multi-region hosting", "Volume session discounts"],
              cta: "Contact Sales",
              premium: false
            }
          ].map((plan, i) => (
            <div
              key={i}
              className={cn(
                "glass-panel p-10 rounded-[48px] border-white/5 relative flex flex-col items-center text-center space-y-10 group",
                plan.premium ? "bg-white/[0.03] border-brand-accent/20 scale-105 z-10 shadow-2xl shadow-brand-accent/5" : ""
              )}
            >
              {plan.premium && (
                <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 rounded-full bg-brand-accent text-brand-primary text-[10px] font-black uppercase tracking-widest">
                  Performance Choice
                </div>
              )}
              <div className="space-y-2">
                <h4 className="text-lg font-black text-white uppercase tracking-widest">{plan.name}</h4>
                <div className="text-4xl font-black text-white tracking-tight">{plan.price}</div>
              </div>
              <p className="text-sm text-brand-secondary leading-relaxed h-10">{plan.desc}</p>
              <ul className="space-y-4 text-left w-full border-y border-white/5 py-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-white/70 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={cn(
                "w-full py-5 rounded-3xl font-black text-xs uppercase tracking-widest transition-all",
                plan.premium ? "bg-brand-accent text-brand-primary shadow-xl shadow-brand-accent/20 focus:ring-4 focus:ring-brand-accent/20" : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
              )}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="section-container max-w-4xl">
        <div className="text-center space-y-4 mb-20">
          <HelpCircle className="w-12 h-12 text-brand-accent mx-auto opacity-20" />
          <h2 className="text-4xl font-black text-white tracking-tight leading-tight">Common Knowledge Questions.</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "How does Aegovi differ from live proctoring?",
              a: "Unlike proctoring, Aegovi does not intervene during the session. We analyze technical context signals after the session ends, allowing for a natural conversation without the stress of being watched in real-time."
            },
            {
              q: "Why is post-interview intelligence safer?",
              a: "Real-time systems prioritize immediate accusations, often leading to false positives and high candidate anxiety. Post-hoc intelligence allows us to correlate patterns across the entire session for a probabilistic, high-confidence signal."
            },
            {
              q: "How are false positives handled?",
              a: "Every signal includes a 'Human Context' justification. We provide interviewers with common reasons for specific signals (e.g., dual monitors, technical documentation lookup) to ensure fair judgment."
            },
            {
              q: "What candidate privacy protections are in place?",
              a: "We explicitly reject biometric identification. We do not store video of the candidate's environment, and all technical metadata is cryptographically signed and encrypted."
            }
          ].map((faq, i) => (
            <div
              key={i}
              className="glass-panel rounded-3xl border-white/5 overflow-hidden transition-all hover:border-white/10"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">{faq.q}</span>
                <ChevronDown className={cn("w-5 h-5 text-slate-500 transition-transform", activeFaq === i ? "rotate-180" : "")} />
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8"
                  >
                    <p className="text-brand-secondary leading-relaxed border-t border-white/5 pt-6">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Evidence Section / Finale */}
      <section className="section-container text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-20 rounded-[64px] border-white/10 relative overflow-hidden group space-y-12 shadow-2xl shadow-brand-accent/5 hover:border-white/20 transition-all border"
        >
          <div className="relative z-10 space-y-10">
            <h2 className="text-6xl font-black text-white italic tracking-tighter leading-none">See Aegovi in Action.</h2>
            <p className="text-xl text-brand-secondary max-w-2xl mx-auto italic font-medium leading-relaxed">
              "Aegovi has replaced the 'spotlight interrogation' with a forensic archival model that our engineers actually prefer—and our candidates trust."
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <button className="btn-primary py-5 px-10 flex items-center gap-4 text-xs font-black uppercase tracking-widest group shadow-2xl shadow-brand-accent/20">
                Request Pilot Invitation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
              </button>
              <Link href="/report" className="flex items-center gap-2 p-5 rounded-3xl bg-white/5 border border-white/10 text-[10px] font-black tracking-widest uppercase hover:bg-white/10 transition-colors">
                <Layers className="w-4 h-4" />
                Evidence Timeline Preview
              </Link>
            </div>

            {/* Micro-preview of a report */}
            <div className="mt-12 bg-black/40 rounded-3xl border border-white/5 p-8 max-w-lg mx-auto backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-teal-500/50" />
                </div>
                <span className="text-[10px] font-mono text-slate-500">SIGNAL_LOG_0128</span>
              </div>
              <div className="space-y-4 text-left">
                <div className="h-2 w-full bg-white/5 rounded-full" />
                <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                <div className="flex items-center gap-4 text-teal-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Consensus: Standard Behavior</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/5 via-transparent to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        </motion.div>
      </section>

    </div>
  );
}



// Helper component for user check icon
function UserCheck({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}
