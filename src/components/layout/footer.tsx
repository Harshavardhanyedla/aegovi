import Link from "next/link";
import { Shield, Mail, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-slate-950/50 border-t border-white/5 pt-32 pb-20 overflow-hidden">
            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
                    <div className="md:col-span-5 space-y-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                                <Shield className="w-5 h-5 shadow-[0_0_15px_rgba(var(--brand-accent),0.5)]" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">Aegovi</span>
                        </Link>
                        <p className="text-brand-secondary text-sm max-w-sm leading-relaxed italic">
                            Aegovi provides post-interview integrity intelligence using explainable AI —
                            without invasive surveillance or candidate intimidation.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                                <Mail className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Intelligence</h3>
                        <ul className="space-y-4 text-brand-secondary text-xs font-black uppercase tracking-widest">
                            <li><Link href="/product" className="hover:text-white transition-colors">Overview</Link></li>
                            <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                            <li><Link href="/interview" className="hover:text-white transition-colors">Forensic Lab</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Foundations</h3>
                        <ul className="space-y-4 text-brand-secondary text-xs font-black uppercase tracking-widest">
                            <li><Link href="/ethics" className="hover:text-white transition-colors">Ethics</Link></li>
                            <li><Link href="/settings" className="hover:text-white transition-colors">Governance</Link></li>
                            <li><Link href="/report" className="hover:text-white transition-colors">Sample Report</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3 space-y-8">
                        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Collective</h3>
                        <p className="text-xs text-brand-secondary leading-relaxed">Join the intelligence network for hiring integrity.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Corporate email"
                                className="bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-black uppercase tracking-widest w-full focus:outline-none focus:ring-1 focus:ring-brand-accent/20 text-white"
                            />
                            <button className="bg-brand-accent text-brand-primary p-3 rounded-xl hover:scale-105 transition-all shadow-lg shadow-brand-accent/20">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-10 border-t border-white/5 text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">
                    <p>© {new Date().getFullYear()} Aegovi Forensic Layer</p>
                    <div className="flex gap-10">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Guarantee</Link>
                        <Link href="#" className="hover:text-white transition-colors">Term Protocols</Link>
                        <Link href="#" className="hover:text-white transition-colors">Trust Center</Link>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
        </footer>
    );
}
