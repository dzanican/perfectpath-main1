import Image from 'next/image'
import AnalysisImage from "../assets/BACKGROUND.png"
import ATSImage from '../assets/Element.png'

const Analysis = () => {
  return (
    <div className="relative w-full mt-20">
      <div className="absolute left-0 top-0 ml-[-300px] mb-[-100px]">
        <Image 
          src={AnalysisImage} 
          alt="Background pattern"
          width={700}
          height={800}
          priority
        />
      </div>

      <div className="container mx-auto px-4 pt-20 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              Experience
              <span className="block relative">
                Analysis
                <Image
                  src={ATSImage}
                  alt=""
                  width={200}
                  height={20}
                  className="absolute -bottom-1 left-0 -z-10 w-full opacity-100"
                />
              </span>
            </h1>
            <p className="text-gray-600 mb-8">
              Upload your resume to discover suitable job titles for your next career move
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                Get Started
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right column - Blue box placeholder */}
          <div className="bg-blue-100 rounded-lg aspect-video w-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Analysis
