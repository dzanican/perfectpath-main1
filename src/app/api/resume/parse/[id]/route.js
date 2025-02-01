import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import connectDB from '@/app/api/lib/db';
import Resume from '@/app/api/lib/models/Resume';
import { parsePdf, parseDocx } from '@/app/api/lib/utils/parser';

export async function POST(request, { params }) {
    try {
        await connectDB();

        const resume = await Resume.findById(params.id);
        if (!resume) {
            return NextResponse.json(
                { error: 'Resume not found' },
                { status: 404 }
            );
        }

        // Read file
        const fileContent = await readFile(resume.originalContent);
        
        // Parse based on file type
        const isDocx = resume.originalContent.endsWith('.docx');
        const parsedContent = isDocx 
            ? await parseDocx(fileContent)
            : await parsePdf(fileContent);

        // Update resume
        resume.parsedData = parsedContent;
        resume.status = 'parsed';
        await resume.save();

        return NextResponse.json({
            message: 'Resume parsed successfully',
            resumeId: resume._id,
            status: resume.status,
            parsedData: parsedContent
        });

    } catch (error) {
        console.error('Error parsing resume:', error);
        return NextResponse.json(
            { error: 'Error parsing resume' },
            { status: 500 }
        );
    }
}
