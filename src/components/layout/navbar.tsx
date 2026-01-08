"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
    Shield,
    LayoutDashboard,
    BookOpen,
    FileCheck,
    Scale,
    Settings
} from "lucide-react";

const navigation = [
    { name: "Overview", href: "/product", icon: BookOpen },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Report Lab", href: "/interview", icon: FileCheck },
    { name: "Ethics", href: "/ethics", icon: Scale },
    { name: "Settings", href: "/settings", icon: Settings },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
            <div className="glass-panel border-white/10 rounded-[28px] px-8 py-3 flex justify-between items-center shadow-2xl backdrop-blur-3xl bg-black/40">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent transition-all group-hover:scale-110">
                        <Shield className="w-5 h-5 shadow-[0_0_15px_rgba(var(--brand-accent),0.5)]" />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-white">Aegovi</span>
                </Link>

                <div className="hidden md:flex items-center gap-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all relative overflow-hidden group",
                                pathname === item.href
                                    ? "text-white bg-white/5 border border-white/10"
                                    : "text-slate-500 hover:text-white"
                            )}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <item.icon className={cn("w-3.5 h-3.5", pathname === item.href ? "text-brand-accent" : "opacity-50")} />
                                {item.name}
                            </span>
                            {pathname === item.href && (
                                <motion.div layoutId="nav-active" className="absolute inset-0 bg-white/5" />
                            )}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                        Login
                    </button>
                    <button className="btn-primary py-3 px-6 rounded-2xl text-[10px] whitespace-nowrap">
                        Request Walkthrough
                    </button>
                </div>
            </div>
        </nav>
    );
}
