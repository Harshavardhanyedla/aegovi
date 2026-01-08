import { InterviewEvent, IntegrityReport } from '@/core/types';

// In-memory store for MVP. Resets on server restart.
type SessionData = {
    id: string;
    events: InterviewEvent[];
    report?: IntegrityReport;
    createdAt: number;
};

const sessions: Record<string, SessionData> = {};

export function createSession(id: string) {
    sessions[id] = {
        id,
        events: [],
        createdAt: Date.now()
    };
    return sessions[id];
}

export function addEvents(sessionId: string, events: InterviewEvent[]) {
    if (!sessions[sessionId]) return null;
    sessions[sessionId].events.push(...events);
    // Sort by timestamp to ensure engine reads correctly
    sessions[sessionId].events.sort((a, b) => a.timestamp - b.timestamp);
    return sessions[sessionId];
}

export function getSession(id: string) {
    return sessions[id];
}

export function saveReport(id: string, report: IntegrityReport) {
    if (sessions[id]) {
        sessions[id].report = report;
    }
}
