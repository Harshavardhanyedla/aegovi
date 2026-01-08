import { Signal, SignalResult, InterviewEvent, SnapshotEvent, InformationChannel } from '../types';

export class EvolutionAnomalySignal implements Signal {
    id = 'evolution-anomaly-001';
    name = 'Technical Continuity Anomaly';
    description = 'Analyzes the variance and continuity of code snapshots compared to physical input activity.';
    channel: InformationChannel = 'Technical';

    analyze(events: InterviewEvent[]): SignalResult {
        const snapshots = events.filter(e => e.type === 'snapshot') as SnapshotEvent[];
        if (snapshots.length < 5) return this.noObservation();

        const keystrokes = events.filter(e => e.type === 'keystroke').length;
        const finalLength = snapshots[snapshots.length - 1].content.length;

        // If code volume significantly exceeds registered physical input activity
        if (finalLength > keystrokes * 4 && finalLength > 500) {
            return {
                observed: true,
                confidence: 30,
                weight: 0.25,
                uncertaintyScore: 25,
                impact: 'Medium',
                explanation: 'A significant volume of technical solution exists that is not accounted for by corresponding mechanical input activity.',
                channel: this.channel,
                limitations: 'Network lag, IDE auto-completion, or local boilerplate tools can create technical mismatches naturally.',
                details: { finalLength, keystrokes }
            };
        }

        return this.noObservation();
    }

    private noObservation(): SignalResult {
        return {
            observed: false,
            confidence: 0,
            weight: 0.25,
            uncertaintyScore: 10,
            impact: 'Low',
            explanation: 'Technical solution growth correlates with registered mechanical input activity.',
            channel: this.channel,
            limitations: 'Does not detect logic-flow assistance, only physical-to-mechanical insertion anomalies.'
        };
    }
}
