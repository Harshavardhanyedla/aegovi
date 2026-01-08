import { Signal, SignalResult, InterviewEvent, SnapshotEvent, InformationChannel } from '../types';

export class SuddenSolutionSignal implements Signal {
    id = 'sudden-solution-001';
    name = 'Sudden Technical Realization';
    description = 'Observes periods of mechanical inactivity followed by high-fidelity technical solutions.';
    channel: InformationChannel = 'Cross-Channel';

    analyze(events: InterviewEvent[]): SignalResult {
        const snapshots = events.filter(e => e.type === 'snapshot') as SnapshotEvent[];
        if (snapshots.length < 2) return this.noObservation();

        const INACTIVITY_THRESHOLD = 300000; // 5 minutes
        const COMPLEXITY_THRESHOLD = 200; // characters added

        for (let i = 1; i < snapshots.length; i++) {
            const prev = snapshots[i - 1];
            const curr = snapshots[i];

            const timeDiff = curr.timestamp - prev.timestamp;
            const charDiff = curr.content.length - prev.content.length;

            if (timeDiff > INACTIVITY_THRESHOLD && charDiff > COMPLEXITY_THRESHOLD) {
                return {
                    observed: true,
                    confidence: 25,
                    weight: 0.3,
                    uncertaintyScore: 15,
                    impact: 'Medium',
                    explanation: `A solution of ${charDiff} characters emerged after ${Math.round(timeDiff / 60000)} minutes of technical inactivity. This suggests a potential external information flow window.`,
                    channel: this.channel,
                    limitations: 'Candidates often whiteboard, solve locally, or think through complex logic before implementing.'
                };
            }
        }

        return this.noObservation();
    }

    private noObservation(): SignalResult {
        return {
            observed: false,
            confidence: 0,
            weight: 0.3,
            uncertaintyScore: 5,
            impact: 'Low',
            explanation: 'Technical evolution shows consistent mechanical activity throughout the session.',
            channel: this.channel,
            limitations: 'Does not detect slow-flow external assistance or pre-prepared logic.'
        };
    }
}
