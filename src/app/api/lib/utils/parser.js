import pdf from 'pdf-parse';
import mammoth from 'mammoth';

export async function parsePdf(buffer) {
    try {
        const data = await pdf(buffer);
        return extractResumeData(data.text);
    } catch (error) {
        console.error('Error parsing PDF:', error);
        throw error;
    }
}

export async function parseDocx(buffer) {
    try {
        const result = await mammoth.extractRawText({ buffer });
        return extractResumeData(result.value);
    } catch (error) {
        console.error('Error parsing DOCX:', error);
        throw error;
    }
}

function extractResumeData(text) {
    const sections = text.split('\n\n');
    
    const workExperience = sections.filter(s => {
        const lower = s.toLowerCase();
        return lower.includes('experience') || 
               lower.includes('work') ||
               lower.includes('employment');
    });

    const skills = sections.filter(s => {
        const lower = s.toLowerCase();
        return lower.includes('skill') || 
               lower.includes('technologies') ||
               lower.includes('tools');
    });

    const education = sections.filter(s => {
        const lower = s.toLowerCase();
        return lower.includes('education') || 
               lower.includes('degree') ||
               lower.includes('university');
    });

    return {
        workExperience,
        skills,
        education
    };
}