import Image from 'next/image'
import Link from 'next/link'
import PerfectPathLogo from '../assets/PerfectPath NEW.png';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#002D61] py-4 z-50 ">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image 
            src={PerfectPathLogo}
            alt="PerfectPath Logo"
            width={34}
            height={34}
          />
          <span className="text-2xl font-bold text-white">PerfectPath</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-16 items-center justify-center">
          <div className="relative group">
            <Link 
              href="#features" 
              className="text-white hover:opacity-80 transition-opacity duration-300 flex items-center gap-1"
            >
              Features
              <IoIosArrowDown className="text-sm" />
            </Link>
            <div className="absolute left-0 hidden group-hover:block mt-2 w-48 bg-white rounded-lg shadow-lg">
              <Link href="#feature1" className="block px-4 py-2 text-[#002D61] hover:bg-gray-100">
                Feature 1
              </Link>
              <Link href="#feature2" className="block px-4 py-2 text-[#002D61] hover:bg-gray-100">
                Feature 2
              </Link>
              <Link href="#feature3" className="block px-4 py-2 text-[#002D61] hover:bg-gray-100">
                Feature 3
              </Link>
            </div>
          </div>

          <div className="relative group">
            <Link 
              href="#resources" 
              className="text-white hover:opacity-80 transition-opacity duration-300 flex items-center gap-1"
            >
              Resources
              <IoIosArrowDown className="text-sm" />
            </Link>
            <div className="absolute left-0 hidden group-hover:block mt-2 w-48 bg-white rounded-lg shadow-lg">
              <Link href="#resource1" className="block px-4 py-2 text-[#002D61] hover:bg-gray-100">
                Resource 1
              </Link>
              <Link href="#resource2" className="block px-4 py-2 text-[#002D61] hover:bg-gray-100">
                Resource 2
              </Link>
              <Link href="#resource3" className="block px-4 py-2 text-[#002D61] hover:bg-gray-100">
                Resource 3
              </Link>
            </div>
          </div>

          <div className="relative group">
            <Link 
              href="#pricing" 
              className="text-white hover:opacity-80 transition-opacity duration-300 flex items-center gap-1"
            >
              Pricing
              <IoIosArrowDown className="text-sm" />
            </Link>
            <div className="absolute left-0 hidden group-hover:block mt-2 w-48 bg-white rounded-lg shadow-lg">
              <Link href="#basic" className="block px-4 py-2 text-[#002D61] hover:bg-gray-100">
                Basic Plan
              </Link>
              <Link href="#pro" className="block px-4 py-2 text-[#002D61] hover:bg-gray-100">
                Pro Plan
              </Link>
              <Link href="#enterprise" className="block px-4 py-2 text-[#002D61] hover:bg-gray-100">
                Enterprise
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">
          <button className="px-6 py-3 rounded-lg bg-[#FFE492] text-[#002D61] hover:bg-[#FFD970] transition-all duration-300 hover:-translate-y-0.5">
            Login
          </button>
          <button className="px-6 py-3 rounded-lg bg-[#4F9CF9] text-white hover:bg-[#3B82F6] transition-all duration-300 hover:-translate-y-0.5">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-[#002D61] mt-4 pb-4 px-4`}>
        <div className="flex flex-col gap-4">
          {/* Mobile Navigation Items */}
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Link 
                href="#features" 
                className="text-white hover:opacity-80 transition-opacity duration-300 flex items-center gap-1"
              >
                Features
                <IoIosArrowDown className="text-sm" />
              </Link>
            </div>
            <div className="relative">
              <Link 
                href="#resources" 
                className="text-white hover:opacity-80 transition-opacity duration-300 flex items-center gap-1"
              >
                Resources
                <IoIosArrowDown className="text-sm" />
              </Link>
            </div>
            <div className="relative">
              <Link 
                href="#pricing" 
                className="text-white hover:opacity-80 transition-opacity duration-300 flex items-center gap-1"
              >
                Pricing
                <IoIosArrowDown className="text-sm" />
              </Link>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4">
            <button className="w-full px-6 py-3 rounded-lg bg-[#FFE492] text-[#002D61] hover:bg-[#FFD970] transition-all duration-300">
              Login
            </button>
            <button className="w-full px-6 py-3 rounded-lg bg-[#4F9CF9] text-white hover:bg-[#3B82F6] transition-all duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
