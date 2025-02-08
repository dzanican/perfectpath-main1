'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'

const testimonials = [
  {
    text: "PerfectPath helped me focus in on what I wanted most from my career.",
    name: "Oberon Shaw, MCH",
    role: "Lorem Ipsum",
    image: "/Avater21.png",
    bgColor: "bg-blue-500",
    quoteColor: "text-white",
    textColor: "text-white"
  },
  {
    text: "PerfectPath saved me time by refining my job search.",
    name: "Oberon Shaw, MCH",
    role: "Lorem Ipsum",
    image: "/Avater2.png",
    bgColor: "bg-blue-500",
    quoteColor: "text-white",
    textColor: "text-white"
  },
  {
    text: "PerfectPath was able to optimize my resume to pass ATS systems and get in front of a real person.",
    name: "Oberon Shaw, MCH",
    role: "Lorem Ipsum",
    image: "/Avater.png",
    bgColor: "bg-blue-500",
    quoteColor: "text-white",
    textColor: "text-white"
  },
  {
    text: "The AI-powered resume customization helped me land interviews at top tech companies.",
    name: "Sarah Chen",
    role: "Software Engineer",
    image: "/Avater3.png",
    bgColor: "bg-blue-500",
    quoteColor: "text-white",
    textColor: "text-white"
  },
  {
    text: "The career compass feature showed me opportunities I hadn't even considered. Now I'm in my dream role!",
    name: "Michael Rodriguez",
    role: "Product Manager",
    image: "/Avater4.png",
    bgColor: "bg-blue-500",
    quoteColor: "text-white",
    textColor: "text-white"
  },
  {
    text: "Using PerfectPath's cover letter generator saved me hours of work while making my applications more impactful.",
    name: "Emily Thompson",
    role: "Marketing Director",
    image: "/Avater5.png",
    bgColor: "bg-blue-500",
    quoteColor: "text-white",
    textColor: "text-white"
  }
]

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    }, 1000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8 sm:py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
        +1000 users have found their dream job with PerfectPath <span className="relative">
          <span className="absolute bottom-1 left-0 w-full h-2 sm:h-3 bg-yellow-300 -z-10"></span>
        </span>
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center gap-2 sm:gap-4">
          {testimonials.map((testimonial, index) => {
            const isCenter = index === currentSlide
            const isPrev = index === (currentSlide - 1 + testimonials.length) % testimonials.length
            const isNext = index === (currentSlide + 1) % testimonials.length
            
            return (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 ease-in-out cursor-pointer ${
                  isCenter ? 'w-full max-w-[90vw] sm:max-w-xl z-20 opacity-100 scale-100' :
                  (isPrev || isNext) ? 'hidden sm:block w-full max-w-[80vw] sm:max-w-md z-10 opacity-70 scale-90' :
                  'hidden'
                }`}
              >
                <Card className={`p-4 sm:p-8 py-24 ${testimonial.bgColor} min-h-[350px] rounded-[9px] flex flex-col justify-between`}>
                  <img 
                    src="/Quote.png" 
                    alt="Quote" 
                    className={`w-12 h-12 mb-4`}
                  />
                  <p className={`text-base sm:text-lg mb-4 sm:mb-6 border-b pb-4 ${testimonial.textColor}`}>
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className={`text-sm sm:text-base font-semibold ${testimonial.textColor}`}>
                        {testimonial.name}
                      </h3>
                      <p className={`text-xs sm:text-sm ${testimonial.textColor} opacity-80`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
