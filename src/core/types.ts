export type EventType = 'keystroke' | 'paste' | 'focus' | 'blur' | 'snapshot';

export type InformationChannel = 'Auditory' | 'Visual' | 'Technical' | 'Cross-Channel' | 'Probabilistic';

export type CalibrationProfile = 'Conservative' | 'Balanced' | 'Research';

export type ReviewLabel = 'Aligned' | 'Contextually Explained' | 'Inconclusive' | 'Awaiting Review';

export interface BaseEvent {
    type: EventType;
    timestamp: number; // ms since start of session or Epoch
}

export interface KeystrokeEvent extends BaseEvent {
    type: 'keystroke';
}

export interface PasteEvent extends BaseEvent {
    type: 'paste';
    lineCount: number;
}

export interface FocusEvent extends BaseEvent {
    type: 'focus' | 'blur';
}

export interface SnapshotEvent extends BaseEvent {
    type: 'snapshot';
    content: string; // The code at that point in time
}

export type InterviewEvent = KeystrokeEvent | PasteEvent | FocusEvent | SnapshotEvent;

export interface SignalResult {
    observed: boolean;
    confidence: number; // Raw signal score 0-100
    weight: number; // Contribution weight (0.0 - 1.0)
    uncertaintyScore: number; // 0-100 (high means signal is noisy)
    impact: 'Low' | 'Medium' | 'High';
    explanation: string;
    channel: InformationChannel;
    details?: any;
    limitations: string;
}

export interface Signal {
    id: string;
    name: string;
    description: string;
    channel: InformationChannel;
    analyze(events: InterviewEvent[]): SignalResult;
}

export type RiskContext = 'Standard High-Confidence' | 'Advisory Review' | 'Technical Disparity';

export interface IntegrityReport {
    sessionId: string;
    timestamp: number;
    confidenceIndex: number; // ICI v1 (0-100)
    confidenceBounds: {
        lower: number;
        upper: number;
    };
    status: RiskContext | 'Insufficient Signal';
    calibrationProfile: CalibrationProfile;
    reviewLabel: ReviewLabel;
    contributionMap: Record<string, number>; // How much each signal contributed to the final score
    signals: {
        id: string;
        name: string;
        result: SignalResult;
    }[];
    timeline: {
        timestamp: number;
        summary: string;
        channel?: InformationChannel;
        uncertainty?: boolean;
    }[];
    probabilisticSummary: string;
    ethicsStatement: string;
    auditSignature: string; // Cryptographic hash of the report content
}
