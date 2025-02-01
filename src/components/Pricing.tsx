import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Choose Your Path to Success
        </h2>
      </div>

      <div className="mt-12 space-y-8 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8 lg:max-w-7xl lg:mx-auto px-4 lg:px-8">
        {/* Free Tier */}
        <div className="border-2 border-[#FFE492] rounded-2xl p-6 lg:p-8 h-full bg-white">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-[#043873]">Free</h3>
            <p className="mt-5 text-3xl font-bold text-[#043873]">$0</p>
            <p className="mt-3 text-[#043873] text-lg">Take a step in a new direction</p>
            
            <ul className="mt-10 space-y-5">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-[#043873] mt-1" />
                </div>
                <p className="ml-3 text-[#043873] text-lg">Get 3 new job descriptions based on your resume</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-[#043873] mt-1" />
                </div>
                <p className="ml-3 text-[#043873] text-lg">Skill Gap Analysis</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-[#043873] mt-1" />
                </div>
                <p className="ml-3 text-[#043873] text-lg">Resume ATS Score</p>
              </li>
            </ul>

            <button className="mt-auto block w-full bg-[#043873] px-6 py-3 text-base font-medium text-white hover:bg-[#032b59] rounded-md">
              Get Started
            </button>
          </div>
        </div>

        {/* Standard Tier */}
        <div className="border-0 rounded-lg p-6 lg:p-10 bg-[#002B5B] text-white relative z-10 md:transform md:scale-105 lg:scale-110 shadow-xl">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-[#FFE492]">Standard</h3>
            <p className="mt-6 text-4xl font-bold text-[#FFE492]">$5.00</p>
            <p className="mt-4 text-gray-200">For the serious job-seeker</p>
            
            <ul className="mt-12 space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-yellow-500 mt-1" />
                </div>
                <p className="ml-3 text-gray-200 text-base">Everything in Free tier</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-yellow-500 mt-1" />
                </div>
                <p className="ml-3 text-gray-200 text-base">Resume + ATS Optimization</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-yellow-500 mt-1" />
                </div>
                <p className="ml-3 text-gray-200 text-base">Career Progression Map</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-yellow-500 mt-1" />
                </div>
                <p className="ml-3 text-gray-200 text-base">Cover Letter Generator</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-yellow-500 mt-1" />
                </div>
                <p className="ml-3 text-gray-200 text-base">Interview Prep</p>
              </li>
            </ul>

            <button className="block w-full bg-[#FFE492] px-6 py-2 text-base font-medium text-[#043873] hover:bg-[#FFE492] rounded-md mt-10">
              Get Started
            </button>
          </div>
        </div>

        {/* Elite Tier */}
        <div className="border-2 border-[#FFE492] rounded-2xl p-6 lg:p-8 h-full bg-white">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-[#043873]">Elite</h3>
            <p className="mt-5 text-3xl font-bold text-[#043873]">$10.00</p>
            <p className="mt-3 text-[#043873] text-lg">For those looking for a new career</p>
            
            <ul className="mt-10 space-y-5">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-[#043873] mt-1" />
                </div>
                <p className="ml-3 text-[#043873] text-lg">Everything in Standard tier</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-[#043873] mt-1" />
                </div>
                <p className="ml-3 text-[#043873] text-lg">Upskilling Recommendations</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-[#043873] mt-1" />
                </div>
                <p className="ml-3 text-[#043873] text-lg">Personality & Culture Fit Analysis</p>
              </li>
            </ul>

            <button className="mt-auto block w-full bg-[#043873] px-6 py-3 text-base font-medium text-white hover:bg-[#032b59] rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
