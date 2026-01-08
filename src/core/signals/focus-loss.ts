import { Signal, SignalResult, InterviewEvent, InformationChannel } from '../types';

export class FocusLossSignal implements Signal {
    id = 'focus-loss-001';
    name = 'Interface Context Shift';
    description = 'Monitors frequency and duration of interface focus changes.';
    channel: InformationChannel = 'Visual';

    analyze(events: InterviewEvent[]): SignalResult {
        const focusEvents = events.filter(e => e.type === 'focus' || e.type === 'blur');

        const BLUR_COUNT_THRESHOLD = 5;
        const MAX_SINGLE_BLUR_MS = 60000; // 1 minute

        let blurCount = 0;
        let longBlurObserved = false;
        let lastBlurTime: number | null = null;

        for (const event of focusEvents) {
            if (event.type === 'blur') {
                blurCount++;
                lastBlurTime = event.timestamp;
            } else if (event.type === 'focus' && lastBlurTime !== null) {
                const duration = event.timestamp - lastBlurTime;
                if (duration > MAX_SINGLE_BLUR_MS) longBlurObserved = true;
                lastBlurTime = null;
            }
        }

        if (blurCount > BLUR_COUNT_THRESHOLD || longBlurObserved) {
            return {
                observed: true,
                confidence: blurCount > 10 ? 20 : 10,
                weight: 0.2,
                uncertaintyScore: 40,
                impact: longBlurObserved ? 'Medium' : 'Low',
                explanation: `Observed ${blurCount} context shifts away from the interview interface. ${longBlurObserved ? 'Extended context shifts suggest external documentation or reference usage.' : ''}`,
                channel: this.channel,
                limitations: 'System notifications, environment glitches, or approved documentation lookups commonly cause interface focus loss.',
                details: { blurCount, longBlurObserved }
            };
        }

        return {
            observed: false,
            confidence: 0,
            weight: 0.2,
            uncertaintyScore: 10,
            impact: 'Low',
            explanation: 'Focus was maintained consistently on the primary interview interface.',
            channel: this.channel,
            limitations: 'Secondary physical monitors or external hardware cannot be observed via interface focus.'
        };
    }
}
