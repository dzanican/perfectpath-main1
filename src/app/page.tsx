"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Analysis from "@/components/Analysis";
import ATS from "@/components/ATS";
import SkillGap from "@/components/Interview Practice";
import Pricing from "@/components/Pricing";
import Try from "@/components/Try";
import ReadMore from "@/components/ReadMore";
import About from "@/components/About";
import Testimonials from "@/components/Testmonials";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />  
      <Analysis />
      <ATS />
      <SkillGap />
      <Pricing />
      <Try />
      <ReadMore />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}

