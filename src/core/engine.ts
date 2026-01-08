import {
    InterviewEvent,
    IntegrityReport,
    Signal,
    SignalResult,
    RiskContext,
    InformationChannel,
    CalibrationProfile,
    ReviewLabel
} from './types';
import { PasteBurstSignal } from './signals/paste-burst';
import { SuddenSolutionSignal } from './signals/sudden-solution';
import { FocusLossSignal } from './signals/focus-loss';
import { EvolutionAnomalySignal } from './signals/evolution-anomaly';
import { ForensicUtility } from './forensics';
import { GovernanceEngine } from './governance';

export class IntegrityEngine {
    private signals: Signal[];

    constructor() {
        this.signals = [
            new PasteBurstSignal(),
            new SuddenSolutionSignal(),
            new FocusLossSignal(),
            new EvolutionAnomalySignal()
        ];
    }

    generateReport(sessionId: string, events: InterviewEvent[]): IntegrityReport {
        const config = GovernanceEngine.getConfig();
        const signalResults = this.signals.map(signal => ({
            id: signal.id,
            name: signal.name,
            result: signal.analyze(events)
        }));

        // ICI v1: Weighted Aggregation
        let totalWeightedImpact = 0;
        let totalWeight = 0;
        let cumulativeUncertainty = 0;
        const contributionMap: Record<string, number> = {};

        signalResults.forEach(sr => {
            let effectiveWeight = sr.result.weight;

            // Apply Calibration Profiles
            if (config.calibration === 'Conservative') {
                effectiveWeight *= 1.2; // Higher sensitivity
            } else if (config.calibration === 'Research') {
                effectiveWeight *= 0.5; // Lower impact for research only
            }

            if (sr.result.observed) {
                const contribution = sr.result.confidence * effectiveWeight;
                totalWeightedImpact += contribution;
                contributionMap[sr.id] = contribution;
            } else {
                contributionMap[sr.id] = 0;
            }

            totalWeight += effectiveWeight;
            cumulativeUncertainty += sr.result.uncertaintyScore * effectiveWeight;
        });

        // Calculate ICI (100 - weighted impact)
        const rawICI = Math.max(0, 100 - totalWeightedImpact);
        const avgUncertainty = totalWeight > 0 ? cumulativeUncertainty / totalWeight : 0;

        // Confidence Bounds
        const variance = (avgUncertainty / 100) * 10; // Max 10% variance for UI display
        const confidenceBounds = {
            lower: Math.max(0, rawICI - variance),
            upper: Math.min(100, rawICI + variance)
        };

        // Status Determination
        let status: RiskContext | 'Insufficient Signal';
        if (events.length < 10) {
            status = 'Insufficient Signal';
        } else {
            status = rawICI > 85 ? 'Standard High-Confidence' :
                rawICI > 60 ? 'Advisory Review' : 'Technical Disparity';
        }

        const report: Partial<IntegrityReport> = {
            sessionId,
            timestamp: Date.now(),
            confidenceIndex: Math.round(rawICI * 10) / 10,
            confidenceBounds: {
                lower: Math.round(confidenceBounds.lower * 10) / 10,
                upper: Math.round(confidenceBounds.upper * 10) / 10
            },
            status,
            calibrationProfile: config.calibration,
            reviewLabel: 'Awaiting Review' as ReviewLabel,
            contributionMap,
            signals: signalResults,
            timeline: this.generateProbabilisticTimeline(events, signalResults),
            probabilisticSummary: this.generateProbabilisticSummary(rawICI, status, signalResults),
            ethicsStatement: 'Aegovi strictly enforces technical constraints: No webcam ingestion, No facial analysis, No biometric ID. All outputs are probabilistic markers for human review.',
        };

        report.auditSignature = ForensicUtility.generateAuditSignature(report);

        return report as IntegrityReport;
    }

    private generateProbabilisticTimeline(events: InterviewEvent[], signals: { id: string, name: string, result: SignalResult }[]) {
        const timeline: { timestamp: number, summary: string, channel: InformationChannel, uncertainty?: boolean }[] = [];

        signals.forEach(s => {
            if (s.result.observed) {
                timeline.push({
                    timestamp: Date.now(), // Marker for observed signal
                    summary: `Signal Observation: ${s.name}`,
                    channel: s.result.channel,
                    uncertainty: s.result.uncertaintyScore > 30
                });
            }
        });

        if (events.length > 0) {
            timeline.push({
                timestamp: events[0].timestamp,
                summary: 'Forensic session initialized',
                channel: 'Technical'
            });
            timeline.push({
                timestamp: events[events.length - 1].timestamp,
                summary: 'Forensic session concluded',
                channel: 'Technical'
            });
        }

        return timeline.sort((a, b) => a.timestamp - b.timestamp);
    }

    private generateProbabilisticSummary(index: number, status: string, results: { id: string, name: string, result: SignalResult }[]): string {
        if (status === 'Insufficient Signal') {
            return 'The engine cannot establish a high-confidence baseline due to limited technical information flow in this session.';
        }

        const primarySignals = results.filter(r => r.result.observed && r.result.impact === 'High');

        if (primarySignals.length === 0 && index > 90) {
            return 'Technical consistency correlates with high-fidelity expert baselines. No significant behavioral variants detected.';
        }

        return `System consensus suggests ${status.toLowerCase()} based on a weighted analysis of ${results.filter(r => r.result.observed).length} technical signals. ICI bounds indicate stable probabilistic inference.`;
    }
}
