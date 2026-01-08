"use client";

import { useEffect, useRef, useState } from 'react';
import { InterviewEvent } from '@/core/types';

export function useSessionCapture(sessionId: string | null) {
    const eventsBuffer = useRef<InterviewEvent[]>([]);
    const [isCapturing, setIsCapturing] = useState(false);

    useEffect(() => {
        if (!sessionId) return;
        setIsCapturing(true);

        const recordEvent = (event: InterviewEvent) => {
            eventsBuffer.current.push(event);
            // Flush buffer to API if it gets large? Or just periodic.
        };

        const handleKeystroke = () => {
            recordEvent({ type: 'keystroke', timestamp: Date.now() });
        };

        const handlePaste = (e: ClipboardEvent) => {
            const content = e.clipboardData?.getData('text') || '';
            const lineCount = content.split('\n').length;
            recordEvent({ type: 'paste', timestamp: Date.now(), lineCount });
        };

        const handleFocus = () => recordEvent({ type: 'focus', timestamp: Date.now() });
        const handleBlur = () => recordEvent({ type: 'blur', timestamp: Date.now() });

        // Add listeners
        window.addEventListener('keydown', handleKeystroke);
        window.addEventListener('paste', handlePaste);
        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);

        // Snapshot interval (every 10 seconds for MVP)
        const snapshotInterval = setInterval(() => {
            // In a real IDE, we'd grab the editor state
            recordEvent({ type: 'snapshot', timestamp: Date.now(), content: '// Simulated Snapshot' });
        }, 10000);

        // Batch upload interval
        const uploadInterval = setInterval(async () => {
            if (eventsBuffer.current.length === 0) return;

            const eventsToUpload = [...eventsBuffer.current];
            eventsBuffer.current = [];

            try {
                await fetch(`/api/sessions/${sessionId}/events`, {
                    method: 'POST',
                    body: JSON.stringify({ events: eventsToUpload }),
                    headers: { 'Content-Type': 'application/json' }
                });
            } catch (error) {
                console.error('Failed to flush events', error);
                // Prepend back to buffer on failure?
                eventsBuffer.current = [...eventsToUpload, ...eventsBuffer.current];
            }
        }, 5000);

        return () => {
            window.removeEventListener('keydown', handleKeystroke);
            window.removeEventListener('paste', handlePaste);
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('blur', handleBlur);
            clearInterval(snapshotInterval);
            clearInterval(uploadInterval);
            setIsCapturing(false);
        };
    }, [sessionId]);

    return { isCapturing };
}
