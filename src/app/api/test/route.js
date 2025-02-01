import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        mongodbUri: process.env.MONGODB_URI ? 'Connected' : 'Not connected',
        openaiKey: process.env.OPENAI_API_KEY ? 'Connected' : 'Not connected'
    });
}
