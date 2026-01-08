import { AlertCircle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisclaimerBannerProps {
    message?: string;
    className?: string;
}

export function DisclaimerBanner({
    message = "This analysis is for advisory purposes only. Integrity signals are intended to provide context and should not be used as the sole basis for hiring decisions.",
    className
}: DisclaimerBannerProps) {
    return (
        <div className={cn("flex gap-4 p-4 bg-slate-50 border-y border-slate-200 text-slate-600 rounded-xl border", className)}>
            <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-900 flex items-center gap-1.5 uppercase tracking-wide">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Explainability Notice
                </p>
                <p className="text-xs leading-relaxed italic opacity-85">
                    {message}
                </p>
            </div>
        </div>
    );
}
