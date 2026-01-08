import { NextResponse } from 'next/server';
import { getSession, saveReport } from '@/lib/session-store';
import { IntegrityEngine } from '@/core/engine';

export async function GET(
    request: Request,
    props: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await props.params;
        const session = getSession(id);
        if (!session) {
            return NextResponse.json({ error: 'Session not found' }, { status: 404 });
        }

        const engine = new IntegrityEngine();
        const report = engine.generateReport(session.id, session.events);

        // Persist report in store
        saveReport(session.id, report);

        return NextResponse.json(report);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to generate report' }, { status: 500 });
    }
}
