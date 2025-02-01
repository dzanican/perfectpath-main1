import { NextResponse } from 'next/server';
import connectDB from '@/app/api/lib/db';
import Resume from '@/app/api/lib/models/Resume';
import openai from '@/app/api/lib/openai';

export async function POST(request, { params }) {
    try {
        await connectDB();
        
        const { jobDescription } = await request.json();
        if (!jobDescription) {
            return NextResponse.json(
                { error: 'Job description is required' },
                { status: 400 }
            );
        }
        
        const resume = await Resume.findById(params.id);
        if (!resume) {
            return NextResponse.json(
                { error: 'Resume not found' },
                { status: 404 }
            );
        }

        // Prepare prompt for OpenAI
        const prompt = `
        Analyze and optimize this resume for the following job description:
        
        Job Description:
        ${jobDescription}

        Current Resume Content:
        ${JSON.stringify(resume.parsedData, null, 2)}

        Please provide:
        1. Optimized work experience descriptions
        2. Relevant skills highlighted
        3. Suggested improvements
        4. Keywords from job description to include
        `;

        // Optimize using OpenAI
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: "You are a professional resume optimizer. Your goal is to help improve resumes to match job descriptions effectively."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7,
        });

        const optimizedContent = completion.choices[0].message.content;

        // Update resume
        resume.optimizedContent = optimizedContent;
        resume.jobDescription = jobDescription;
        resume.status = 'optimized';
        await resume.save();

        return NextResponse.json({
            message: 'Resume optimized successfully',
            resumeId: resume._id,
            status: resume.status,
            optimizedContent
        });

    } catch (error) {
        console.error('Error optimizing resume:', error);
        return NextResponse.json(
            { error: 'Error optimizing resume' },
            { status: 500 }
        );
    }
}
