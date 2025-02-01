import Link from 'next/link'

export default function Hero() {
  return (
    <section className="text-white py-12 sm:py-24 mt-8 sm:mt-14 bg-[#043873]">
      <div className="container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between mt-8 sm:mt-14">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Targeted Career Choices with PerfectPath
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-300 max-w-xl">
            PerfectPath is an AI-powered career tool that analyzes resumes to suggest tailored job titles, optimize career paths, and help users confidently navigate their professional journey
          </p>
          <Link 
            href="/signup" 
            className="inline-block bg-blue-500 hover:bg-blue-600 transition-colors px-6 sm:px-8 py-3 sm:py-4 rounded-[8px] text-lg sm:text-xl font-medium"
          >
            Try PerfectPath free
          </Link>
        </div>
        
        <div className="flex-1 mt-8 lg:mt-0 lg:ml-16">
          <div className="bg-blue-600 rounded-lg w-full max-w-[750px] h-[300px] sm:h-[500px]" />
        </div>
      </div>
    </section>
  )
}
