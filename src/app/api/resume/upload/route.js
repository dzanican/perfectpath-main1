import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import connectDB from '@/app/api/lib/db';
import Resume from '@/app/api/lib/models/Resume';

export async function POST(request) {
    try {
        await connectDB();
        
        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        // Validate file type
        if (!file.name.match(/\.(pdf|docx)$/)) {
            return NextResponse.json(
                { error: 'Invalid file format. Only PDF and DOCX files are allowed.' },
                { status: 400 }
            );
        }

        // Save file
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filename = `${Date.now()}-${file.name}`;
        const filepath = join('src/app/api/lib/uploadResume', filename);
        
        await writeFile(filepath, buffer);

        // Create resume record
        const resume = await Resume.create({
            originalContent: filepath,
            status: 'uploaded'
        });

        return NextResponse.json({
            message: 'File uploaded successfully',
            resumeId: resume._id,
            status: resume.status
        }, { status: 201 });

    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json(
            { error: 'Error uploading file' },
            { status: 500 }
        );
    }
}
