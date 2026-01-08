import { IntegrityReport } from './types';

export class ForensicUtility {
    static generateAuditSignature(report: Partial<IntegrityReport>): string {
        // In a production environment, this would use a real crypto library.
        // For Phase 3, we implement a deterministic, transparent hash simulation.
        const payload = JSON.stringify({
            id: report.sessionId,
            idx: report.confidenceIndex,
            ts: report.timestamp,
            signals: report.signals?.map(s => s.id)
        });

        let hash = 0;
        for (let i = 0; i < payload.length; i++) {
            const char = payload.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }

        return `AEGOVI-SIG-${Math.abs(hash).toString(16).toUpperCase()}-v3`;
    }
}
