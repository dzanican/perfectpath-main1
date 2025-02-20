import Image from 'next/image'
import ATSImage from '../assets/Element.png';
import WorkTogetherImage from '../assets/Work Together Image.png';

const ATS = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-16 max-w-7xl mx-auto gap-8 mt-24 pt-24">
      {/* Left side - Make full width on mobile */}
      <div className="w-full md:w-1/2">
        <Image
          src={WorkTogetherImage}
          alt="ATS visualization"
          width={500}
          height={500}
          className="w-full max-w-[600px] mx-auto"
        />
      </div>

      {/* Right side - Make full width on mobile and center text */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-7xl font-bold text-gray-900">
          Job{" "}
          <span className="relative z-10 inline-block">
            Tailor
            <Image
              src={ATSImage}
              alt=""
              width={300}
              height={50}
              className="absolute -bottom-1 left-0 md:left-8 -z-10 w-full opacity-100"
            />
          </span>
          <br />
          
        </h1>
        <p className="text-gray-600 text-lg">
        Boost your job prospects with PerfectPath’s AI-powered Resume Customizer. Simply paste your target job description and instantly receive a tailored resume and personalized cover letter designed to optimize your application for ATS and hiring managers. Enhance your interview chances and stand out in today’s competitive job market.

        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-[8px] transition-colors">
          Check Now
        </button>
      </div>
    </div>
  )
}

export default ATS
