"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const featuredArticle = {
  title: "How to Optimize Your Resume for ATS Systems",
  description: "Learn the key strategies to ensure your resume gets past Applicant Tracking Systems and lands on the recruiter's desk.",
  image: "/blog/featured-ats.png",
  slug: "how-to-optimize-your-resume-for-ats-systems"
};

const articles = [
  {
    title: "Top Interview Questions for Software Engineers",
    image: "/blog/Untitled-1.png",
    slug: "top-interview-questions-for-software-engineers"
  },
  {
    title: "Building a Strong LinkedIn Profile",
    image: "/blog/Untitled-1.png",
    slug: "building-a-strong-linkedin-profile"
  },
  {
    title: "Negotiating Your Job Offer",
    image: "/blog/Untitled-1.png",
    slug: "negotiating-your-job-offer"
  },
  {
    title: "Career Transition Success Stories",
    image: "/blog/Untitled-1.png",
    slug: "career-transition-success-stories"
  }
];

const gridArticles = [
  {
    title: "Introducing Perfect Path's Newest Feature: AI Resume Builder",
    category: "Perfect Path News",
    image: "/blog/Untitled-1.png",
    slug: "introducing-perfect-paths-newest-feature-ai-resume-builder"
  },
  {
    title: "How Interview Prep 2x'd Success Rates with Data-Driven Coaching",
    category: "Customer Stories",
    image: "/blog/Untitled-1.png",
    slug: "how-interview-prep-2xd-success-rates-with-data-driven-coaching"
  },
  {
    title: "The Best Lead Generation Tools for Building Profitable Pipeline",
    category: "Buyer's Guides, Growth Tactics",
    image: "/blog/Untitled-1.png",
    slug: "the-best-lead-generation-tools-for-building-profitable-pipeline"
  },
  {
    title: "Resume Filtering Just Got Stricter: Here's the Latest",
    category: "Perfect Path News, Growth Tactics",
    image: "/blog/Untitled-1.png",
    slug: "resume-filtering-just-got-stricter-heres-the-latest"
  },
  {
    title: "The 10 Best Job Search Databases on the Market",
    category: "Growth Tactics, Buyer's Guides",
    image: "/blog/Untitled-1.png",
    slug: "the-10-best-job-search-databases-on-the-market"
  },
  {
    title: "8 Disruptive Job Search Alternatives & Competitors to Consider in 2024",
    category: "Growth Tactics, Buyer's Guides",
    image: "/blog/Untitled-1.png",
    slug: "8-disruptive-job-search-alternatives-competitors-to-consider-in-2024"
  }
];

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Blog Title Section */}
        <div className="w-full bg-[#043873] h-48 flex items-center justify-center pt-12">
          <div className="container mx-auto px-4 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">Blog</h1>
          </div>
        </div>

        {/* Section 1: Featured Article and Grid */}
        <div className="container mx-auto px-4 mt-24">
          <section className="flex gap-8 mb-16">
            {/* Featured Article */}
            <Link href={`/blog/${featuredArticle.slug}`} className="flex-1 group">
              <div className="relative w-[624px] h-[624px] mb-4">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover rounded-lg transition-all duration-300 group-hover:[border-radius:125px]"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">{featuredArticle.title}</h2>
              <p className="text-gray-600">{featuredArticle.description}</p>
            </Link>

            {/* Article Grid */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {articles.map((article, index) => (
                <Link href={`/blog/${article.slug}`} key={index} className="flex flex-col group">
                  <div className="relative w-[296px] h-[296px] mb-2">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded-lg transition-all duration-300 group-hover:[border-radius:125px]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{article.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Section 2: Article Grid with Categories */}
        <div className="w-full bg-[#4F9CF9] py-12 mb-16">
          <div className="container mx-auto px-4">
            {/* Top Row - 4 Articles */}
            <div className="grid grid-cols-4 gap-6 mb-6">
              {gridArticles.slice(0, 4).map((article, index) => (
                <Link href={`/blog/${article.slug}`} key={index} className="group cursor-pointer">
                  <div className="relative w-[300px] h-[300px] mb-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded-lg transition-all duration-300 group-hover:[border-radius:125px]"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {article.category.split(', ').map((cat, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs font-medium px-2 py-1 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-white/80 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Row - 2 Articles + Newsletter */}
            <div className="grid grid-cols-4 gap-6">
              {/* 2 Articles */}
              {gridArticles.slice(4, 6).map((article, index) => (
                <Link href={`/blog/${article.slug}`} key={index} className="group cursor-pointer">
                  <div className="relative w-[300px] h-[300px] mb-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded-lg transition-all duration-300 group-hover:[border-radius:125px]"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {article.category.split(', ').map((cat, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs font-medium px-2 py-1 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-white/80 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}

              {/* Newsletter Signup */}
              <div className="bg-white/10 rounded-xl p-8 flex flex-col justify-center col-span-2 h-[300px]">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-white/80 mb-6">
                  Get the latest career tips and insights delivered straight to your inbox.
                </p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                  />
                  <button className="px-6 py-2 bg-white text-[#4F9CF9] rounded-lg font-semibold hover:bg-white/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Featured Article with Description */}
        <div className="container mx-auto px-4 mb-16">
          <section className="flex gap-8">
            {/* Left side - Image */}
            <div className="flex-1">
              <div className="relative w-[628px] h-[628px]">
                <Image
                  src="/blog/untitled-1.png"
                  alt="Featured Article"
                  fill
                  className="object-cover rounded-lg transition-all duration-300 hover:[border-radius:125px]"
                />
              </div>
            </div>

            {/* Right side - Title and Description */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-8xl font-bold mb-6">
                Mastering the Art of Remote Work: A Comprehensive Guide
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover proven strategies for thriving in a remote work environment. From setting up the perfect home office to maintaining work-life balance and staying productive, this guide covers everything you need to know to succeed in the modern remote workplace.
              </p>
            </div>
          </section>
        </div>

        {/* Section 4: Four Articles Row */}
        <div className="w-full bg-[#4F9CF9] py-12">
          <div className="container mx-auto px-4">
            <section className="grid grid-cols-4 gap-6">
              {/* Article 1 */}
              <Link href="/blog/career-development" className="group cursor-pointer">
                <div className="relative w-[300px] h-[300px] mb-4">
                  <Image
                    src="/blog/untitled-1.png"
                    alt="Career Development"
                    fill
                    className="object-cover rounded-lg transition-all duration-300 group-hover:[border-radius:125px]"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Essential Skills for Career Development in 2025
                </h3>
              </Link>

              {/* Article 2 */}
              <Link href="/blog/networking" className="group cursor-pointer">
                <div className="relative w-[300px] h-[300px] mb-4">
                  <Image
                    src="/blog/untitled-1.png"
                    alt="Networking"
                    fill
                    className="object-cover rounded-lg transition-all duration-300 group-hover:[border-radius:125px]"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  The Power of Professional Networking
                </h3>
              </Link>

              {/* Article 3 */}
              <Link href="/blog/work-life-balance" className="group cursor-pointer">
                <div className="relative w-[300px] h-[300px] mb-4">
                  <Image
                    src="/blog/untitled-1.png"
                    alt="Work-Life Balance"
                    fill
                    className="object-cover rounded-lg transition-all duration-300 group-hover:[border-radius:125px]"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Achieving Work-Life Balance in Tech
                </h3>
              </Link>

              {/* Article 4 */}
              <Link href="/blog/leadership" className="group cursor-pointer">
                <div className="relative w-[300px] h-[300px] mb-4">
                  <Image
                    src="/blog/untitled-1.png"
                    alt="Leadership"
                    fill
                    className="object-cover rounded-lg transition-all duration-300 group-hover:[border-radius:125px]"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Leadership Skills for Modern Managers
                </h3>
              </Link>
            </section>
          </div>
        </div>

        {/* Section 5: Two Featured Articles */}
        <div className="container mx-auto px-4 mb-16 mt-16">
          <section className="flex gap-16">
            {/* Left Article */}
            <Link href="/blog/ai-in-recruitment" className="flex-1 group cursor-pointer">
              <div className="relative w-[628px] h-[628px] mb-6">
                <Image
                  src="/blog/untitled-1.png"
                  alt="AI in Recruitment"
                  fill
                  className="object-cover rounded-lg transition-all duration-300 group-hover:[border-radius:125px]"
                />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                The Impact of AI on Modern Recruitment Practices
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Explore how artificial intelligence is revolutionizing the recruitment industry, from automated screening processes to predictive analytics in candidate assessment. Learn how both employers and job seekers can adapt to this technological shift.
              </p>
            </Link>

            {/* Right Article */}
            <Link href="/blog/future-of-work" className="flex-1 group cursor-pointer">
              <div className="relative w-[628px] h-[628px] mb-6">
                <Image
                  src="/blog/untitled-1.png"
                  alt="Future of Work"
                  fill
                  className="object-cover rounded-lg transition-all duration-300 group-hover:[border-radius:125px]"
                />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                The Future of Work: Trends Shaping 2025 and Beyond
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover the emerging workplace trends that will define the next decade of professional life. From hybrid work models to digital transformation, understand how to position yourself for success in the evolving job market.
              </p>
            </Link>
          </section>
        </div>

        {/* Section 6: Three Articles */}
        <div className="w-full bg-[#4F9CF9] py-12">
          <div className="container mx-auto px-4">
            <section className="grid grid-cols-3 gap-8">
              {/* Article 1 */}
              <Link href="/blog/personal-branding" className="group cursor-pointer">
                <div className="relative w-[400px] h-[400px] mb-6">
                  <Image
                    src="/blog/untitled-1.png"
                    alt="Personal Branding"
                    fill
                    className="object-cover rounded-lg transition-all duration-300 group-hover:[border-radius:125px]"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Building Your Personal Brand in the Digital Age
                </h3>
              </Link>

              {/* Article 2 */}
              <Link href="/blog/tech-skills" className="group cursor-pointer">
                <div className="relative w-[400px] h-[400px] mb-6">
                  <Image
                    src="/blog/untitled-1.png"
                    alt="Tech Skills"
                    fill
                    className="object-cover rounded-lg transition-all duration-300 group-hover:[border-radius:125px]"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Must-Have Tech Skills for Non-Technical Roles
                </h3>
              </Link>

              {/* Article 3 */}
              <Link href="/blog/career-growth" className="group cursor-pointer">
                <div className="relative w-[400px] h-[400px] mb-6">
                  <Image
                    src="/blog/untitled-1.png"
                    alt="Career Growth"
                    fill
                    className="object-cover rounded-lg transition-all duration-300 group-hover:[border-radius:125px]"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Strategies for Accelerating Your Career Growth
                </h3>
              </Link>
            </section>
          </div>
        </div>

        {/* Section 7: Newsletter CTA */}
        <div className="w-full bg-[#212529] py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Ahead in Your Career Journey
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter and get the latest career insights, industry trends, and expert advice delivered straight to your inbox.
            </p>
            <div className="flex gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white text-lg"
              />
              <button className="px-8 py-4 bg-[#4F9CF9] text-white rounded-xl font-semibold text-lg hover:bg-[#4F9CF9]/90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Join 10,000+ professionals who trust our weekly insights
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full bg-[#FFE492]">
          <div className="border-t border-white/10"></div>
        </div>

        {/* Marquee Section */}
        <div className="w-full bg-[#212529] overflow-hidden">
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex">
              {Array(6).fill(null).map((_, index) => (
                <h3 key={index} className="text-[200px] font-bold text-[#FFE492] mx-8">
                  Subscribe
                </h3>
              ))}
            </div>
          </div>
        </div>

      </main>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>

      <Footer />
    </div>
  );
}
