import { NextResponse } from 'next/server';
import connectDB from '@/app/api/lib/db';
import Resume from '@/app/api/lib/models/Resume';

export async function GET(request, { params }) {
    try {
        await connectDB();

        const resume = await Resume.findById(params.id);
        if (!resume) {
            return NextResponse.json(
                { error: 'Resume not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            id: resume._id,
            status: resume.status,
            parsedData: resume.parsedData,
            optimizedContent: resume.optimizedContent,
            jobDescription: resume.jobDescription,
            createdAt: resume.createdAt,
            updatedAt: resume.updatedAt
        });

    } catch (error) {
        console.error('Error fetching resume:', error);
        return NextResponse.json(
            { error: 'Error fetching resume' },
            { status: 500 }
        );
    }
}
