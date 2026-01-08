import { NextResponse } from 'next/server';
import { addEvents } from '@/lib/session-store';

export async function POST(
    request: Request,
    props: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await props.params;
        const body = await request.json();
        const { events } = body;

        if (!Array.isArray(events)) {
            return NextResponse.json({ error: 'Events must be an array' }, { status: 400 });
        }

        const session = addEvents(id, events);
        if (!session) {
            return NextResponse.json({ error: 'Session not found' }, { status: 404 });
        }

        return NextResponse.json({ received: events.length, status: 'ingested' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to ingest events' }, { status: 500 });
    }
}
