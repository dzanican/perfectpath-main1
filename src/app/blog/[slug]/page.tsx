"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// This would typically come from a CMS or API
const articles = {
  "how-to-optimize-your-resume-for-ats-systems": {
    title: "How to Optimize Your Resume for ATS Systems",
    description: "Learn the key strategies to ensure your resume gets past Applicant Tracking Systems and lands on the recruiter's desk.",
    image: "/blog/featured-ats.png",
    content: `
      In today's competitive job market, getting your resume past Applicant Tracking Systems (ATS) is crucial. Here's your comprehensive guide to optimizing your resume for ATS success.

      Understanding ATS
      Applicant Tracking Systems are software applications that help employers manage job applications and screen resumes. These systems scan resumes for relevant keywords, experience, and qualifications before they reach human recruiters.

      Key Optimization Strategies
      1. Use Standard Resume Sections
      - Include clear section headings like "Experience," "Education," and "Skills"
      - Maintain a clean, hierarchical structure
      - Avoid custom sections that might confuse the ATS

      2. Choose the Right Keywords
      - Review the job description carefully
      - Include relevant industry-specific terms
      - Use both acronyms and full terms (e.g., "AI" and "Artificial Intelligence")

      3. Format Wisely
      - Stick to common fonts like Arial or Calibri
      - Avoid tables, graphics, and columns
      - Use standard bullet points
      - Save your resume in the requested format (usually .docx or .pdf)

      4. Focus on Content Quality
      - Use action verbs to describe achievements
      - Include specific metrics and results
      - Keep information relevant to the position

      Common Mistakes to Avoid
      - Don't use headers/footers for important information
      - Avoid images and graphics
      - Don't submit scanned documents
      - Don't use excessive formatting

      Testing Your Resume
      Before submitting, test your resume against ATS systems:
      - Use online ATS testing tools
      - Compare your resume against the job description
      - Have a professional review your formatting

      Remember, while optimizing for ATS is important, your resume should still be readable and engaging for human recruiters. Strike a balance between optimization and readability for the best results.
    `
  },
  "top-interview-questions-for-software-engineers": {
    title: "Top Interview Questions for Software Engineers",
    description: "Master the most common and challenging interview questions for software engineering positions.",
    image: "/blog/Untitled-1.png",
    content: `
      Preparing for software engineering interviews requires a comprehensive understanding of both technical and behavioral questions. Here's a guide to the most common interview questions and how to approach them.

      Technical Questions
      1. Data Structures & Algorithms
      - "How would you implement a binary search tree?"
      - "Explain the difference between stack and queue"
      - "What's the time complexity of quicksort?"

      2. System Design
      - "Design a URL shortening service"
      - "How would you scale Instagram?"
      - "Design a real-time chat application"

      3. Coding Problems
      - String manipulation
      - Array operations
      - Tree traversal
      - Dynamic programming

      Behavioral Questions
      1. Team Collaboration
      - "Describe a challenging project you worked on"
      - "How do you handle conflicts in a team?"
      - "Tell me about a time you had to meet a tight deadline"

      2. Problem-Solving
      - "How do you approach debugging complex issues?"
      - "Describe a time you had to optimize code performance"
      - "What's your process for learning new technologies?"

      Tips for Success
      - Practice coding on a whiteboard
      - Explain your thought process clearly
      - Ask clarifying questions
      - Discuss trade-offs in your solutions
      - Stay calm and composed

      Remember, interviews are not just about getting the right answer, but demonstrating your problem-solving approach and communication skills.
    `
  },
  "building-a-strong-linkedin-profile": {
    title: "Building a Strong LinkedIn Profile",
    description: "Learn how to create an impressive LinkedIn profile that attracts recruiters and opportunities.",
    image: "/blog/Untitled-1.png",
    content: `
      Your LinkedIn profile is your digital professional identity. Here's how to make it stand out and attract the right opportunities.

      Profile Basics
      1. Professional Photo
      - Use a high-quality, professional headshot
      - Dress appropriately for your industry
      - Ensure good lighting and a neutral background

      2. Headline
      - Make it keyword-rich and compelling
      - Include your current role and specialties
      - Use industry-relevant terms

      3. About Section
      - Tell your professional story
      - Highlight key achievements
      - Include relevant keywords
      - Keep it concise but informative

      Experience Section
      - List relevant work experience
      - Include measurable achievements
      - Use action verbs
      - Highlight leadership and initiatives

      Skills & Endorsements
      - List relevant technical and soft skills
      - Prioritize skills most important for your target role
      - Seek endorsements from colleagues

      Recommendations
      - Request recommendations from supervisors and colleagues
      - Provide recommendations to others
      - Focus on specific projects or achievements

      Engagement Strategies
      - Share relevant industry content
      - Engage with your network's posts
      - Join and participate in relevant groups
      - Write articles on industry topics

      Profile Optimization Tips
      - Use SEO-friendly terms
      - Keep information updated
      - Customize your URL
      - Set your profile to "Open to Work" if job searching

      Remember to regularly update your profile and stay active on the platform to maximize its potential for your career growth.
    `
  },
  "negotiating-your-job-offer": {
    title: "Negotiating Your Job Offer",
    description: "Expert tips on how to negotiate your job offer effectively and secure the best package.",
    image: "/blog/Untitled-1.png",
    content: `
      Negotiating a job offer can be intimidating, but it's a crucial step in your career journey. Here's your comprehensive guide to successful negotiation.

      Preparation
      - Research industry standards
      - Know your market value
      - Understand your minimum requirements
      - Prepare supporting documentation

      Key Components to Negotiate
      1. Base Salary
      2. Equity or Stock Options
      3. Bonuses
      4. Benefits Package
      5. Work Flexibility
      6. Professional Development

      And much more detailed content about negotiation strategies...
    `
  },
  "career-transition-success-stories": {
    title: "Career Transition Success Stories",
    description: "Inspiring stories of successful career transitions and the lessons learned along the way.",
    image: "/blog/Untitled-1.png",
    content: `
      Real stories of career transitions that will inspire and guide your own career change journey.

      Story 1: From Teaching to Tech
      Story 2: Finance to Product Management
      Story 3: Healthcare to Data Science

      Key Lessons Learned
      - Importance of networking
      - Value of transferable skills
      - Role of continuous learning
      
      And more inspiring transition stories...
    `
  },
  "career-development": {
    title: "Essential Skills for Career Development in 2025",
    description: "Stay ahead of the curve with these essential skills for career growth in 2025.",
    image: "/blog/untitled-1.png",
    content: `
      The workplace is evolving rapidly. Here are the key skills you need to succeed in 2025.

      Technical Skills
      - AI and Machine Learning
      - Data Analysis
      - Digital Collaboration
      
      Soft Skills
      - Adaptability
      - Emotional Intelligence
      - Remote Leadership

      And more insights about future skills...
    `
  },
  "networking": {
    title: "The Power of Professional Networking",
    description: "Master the art of professional networking in the digital age.",
    image: "/blog/untitled-1.png",
    content: `
      Effective networking is crucial for career success. Learn how to build and maintain professional relationships.

      Networking Strategies
      - Online networking platforms
      - Industry events
      - Professional associations
      
      Best Practices
      - Follow-up techniques
      - Relationship maintenance
      - Value exchange

      And more networking tips...
    `
  },
  "work-life-balance": {
    title: "Achieving Work-Life Balance in Tech",
    description: "Practical strategies for maintaining a healthy work-life balance in the fast-paced tech industry.",
    image: "/blog/untitled-1.png",
    content: `
      Finding balance in the tech industry can be challenging. Here's your guide to maintaining wellness while excelling in your career.

      Setting Boundaries
      - Establishing work hours
      - Creating dedicated workspaces
      - Managing digital boundaries

      Wellness Strategies
      - Regular exercise
      - Mindfulness practices
      - Time management techniques

      And more wellness tips...
    `
  },
  "leadership": {
    title: "Leadership Skills for Modern Managers",
    description: "Essential leadership skills and strategies for modern management roles.",
    image: "/blog/untitled-1.png",
    content: `
      Modern leadership requires a unique blend of skills. Learn how to lead effectively in today's workplace.

      Key Leadership Skills
      - Emotional Intelligence
      - Digital Leadership
      - Crisis Management
      
      Team Building
      - Remote team management
      - Cultural awareness
      - Conflict resolution

      And more leadership insights...
    `
  },
  "ai-in-recruitment": {
    title: "The Impact of AI on Modern Recruitment",
    description: "Understanding how AI is transforming the recruitment landscape and what it means for job seekers.",
    image: "/blog/untitled-1.png",
    content: `
      AI is revolutionizing how companies hire. Learn about its impact and how to adapt your job search strategy.

      AI in Hiring
      - Resume screening
      - Video interviews
      - Skill assessments
      
      Adapting Your Approach
      - AI-friendly resumes
      - Interview preparation
      - Digital presence optimization

      And more AI recruitment trends...
    `
  },
  "future-of-work": {
    title: "The Future of Work: Trends and Predictions",
    description: "Exploring emerging workplace trends and preparing for the future of work.",
    image: "/blog/untitled-1.png",
    content: `
      The workplace is evolving rapidly. Stay ahead with insights into future trends and necessary adaptations.

      Key Trends
      - Remote-first culture
      - AI integration
      - Skill-based hiring
      
      Preparing for Change
      - Continuous learning
      - Digital literacy
      - Adaptability

      And more future workplace insights...
    `
  },
  "personal-branding": {
    title: "Building Your Personal Brand in the Digital Age",
    description: "Create and maintain a strong personal brand that sets you apart in your industry.",
    image: "/blog/untitled-1.png",
    content: `
      Your personal brand is your professional identity. Learn how to build and maintain it effectively.

      Brand Elements
      - Online presence
      - Professional image
      - Content strategy
      
      Platform Strategy
      - LinkedIn optimization
      - Twitter presence
      - Professional blog

      And more personal branding tips...
    `
  },
  "tech-skills": {
    title: "Must-Have Tech Skills for Non-Technical Roles",
    description: "Essential technical skills for professionals in non-technical positions.",
    image: "/blog/untitled-1.png",
    content: `
      Technology affects every role. Learn the key tech skills needed for non-technical positions.

      Essential Skills
      - Data analysis
      - Digital collaboration
      - Basic coding concepts
      
      Learning Resources
      - Online courses
      - Practice projects
      - Certification paths

      And more tech skill guidance...
    `
  },
  "career-growth": {
    title: "Strategies for Accelerating Your Career Growth",
    description: "Proven strategies to fast-track your career development and achieve your professional goals.",
    image: "/blog/untitled-1.png",
    content: `
      Accelerate your career growth with proven strategies and expert insights.

      Growth Strategies
      - Skill development
      - Networking
      - Mentorship
      
      Action Plans
      - Goal setting
      - Progress tracking
      - Success metrics

      And more career growth strategies...
    `
  }
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles[slug];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 mt-24">
        <article className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative w-[629px] h-[629px]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-7xl font-bold mb-4">{article.title}</h1>
              <p className="text-4xl text-gray-600 mb-6">{article.description}</p>
            </div>
          </div>
          <div className="prose max-w-none">
            {article.content.split('\n').map((paragraph: string, index: number) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
