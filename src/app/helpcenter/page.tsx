'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <svg
          className={`w-6 h-6 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export default function HelpCenter() {
  const [openSection, setOpenSection] = useState(0);

  const helpSections = [
    {
      title: 'Getting Started',
      items: [
        { question: 'How do I create an account?', answer: 'Click the "Sign Up" button in the top right corner and follow the registration process.' },
        { question: 'What is PerfectPath?', answer: 'PerfectPath is your career development companion, helping you navigate your professional journey with personalized guidance and resources.' },
      ]
    },
    {
      title: 'Features & Services',
      items: [
        { question: 'What features are included?', answer: 'PerfectPath offers resume optimization, career path planning, skill assessments, and personalized learning recommendations.' },
        { question: 'How does the ATS optimization work?', answer: 'Our ATS optimization tool analyzes your resume against job descriptions and provides specific recommendations to improve your match rate.' },
      ]
    },
    {
      title: 'Account & Billing',
      items: [
        { question: 'How do I update my account information?', answer: 'Go to your profile settings to update your personal information, preferences, and notification settings.' },
        { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and bank transfers for our premium services.' },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Help Center</h1>
          
          <div className="space-y-6">
            {helpSections.map((section, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenSection(openSection === index ? -1 : index)}
                >
                  <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
                  <svg
                    className={`w-8 h-8 text-gray-500 transition-transform ${
                      openSection === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openSection === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-2 space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <AccordionItem
                        key={itemIndex}
                        question={item.question}
                        answer={item.answer}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still need help?</p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-[#4F9CF9] text-white rounded-[8px] font-semibold hover:bg-[#4589e0] transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
