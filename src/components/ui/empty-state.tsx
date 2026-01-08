import { LucideIcon, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
    icon?: LucideIcon;
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
    className?: string;
}

export function EmptyState({
    icon: Icon = Search,
    title,
    description,
    actionLabel,
    onAction,
    className
}: EmptyStateProps) {
    return (
        <div className={cn("flex flex-col items-center justify-center py-12 px-4 text-center bg-surface-soft/50 border border-dashed border-slate-200 rounded-2xl", className)}>
            <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                <Icon className="w-8 h-8 text-brand-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-brand-primary mb-2">{title}</h3>
            <p className="text-sm text-brand-secondary max-w-xs mx-auto leading-relaxed mb-6">
                {description}
            </p>
            {actionLabel && (
                <button
                    onClick={onAction}
                    className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    );
}
