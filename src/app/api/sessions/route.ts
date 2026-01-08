import { NextResponse } from 'next/server';
import { createSession } from '@/lib/session-store';
import { v4 as uuidv4 } from 'uuid';

export async function POST() {
    try {
        const id = uuidv4();
        const session = createSession(id);
        return NextResponse.json({ id: session.id, status: 'initialized' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
    }
}
