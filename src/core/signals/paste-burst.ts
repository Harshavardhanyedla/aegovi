import { Signal, InterviewEvent, SignalResult, InformationChannel } from '../types';

export class PasteBurstSignal implements Signal {
    id = 'paste-burst-001';
    name = 'Bulk Context Insertion';
    description = 'Observes rapid insertion of significant code blocks, suggesting potential external reference usage.';
    channel: InformationChannel = 'Visual';

    analyze(events: InterviewEvent[]): SignalResult {
        const pasteEvents = events.filter(e => e.type === 'paste');
        const largePastes = pasteEvents.filter(e => (e as any).lineCount > 10);

        const observed = largePastes.length > 0;

        return {
            observed,
            confidence: observed ? 15 : 0,
            weight: 0.15, // Paste bursts have moderate weight
            uncertaintyScore: 20, // Low uncertainty generally
            impact: largePastes.length > 2 ? 'Medium' : 'Low',
            explanation: observed
                ? `Observed ${largePastes.length} instances of bulk context insertion. This pattern suggests the use of pre-existing reference material or documentation lookups.`
                : 'Technical context insertion remains within expected developer ranges.',
            channel: this.channel,
            limitations: 'Bulk insertion can be legitimate if the candidate is moving their own code between files or using platform-provided boilerplate.'
        };
    }
}
