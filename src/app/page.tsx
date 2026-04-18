"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";

const SocialProof = dynamic(() => import("@/components/SocialProof"), { ssr: true });
const Programs = dynamic(() => import("@/components/Programs"), { ssr: true });
const Trainers = dynamic(() => import("@/components/Trainers"), { ssr: true });
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const CTA = dynamic(() => import("@/components/CTA"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <LoadingScreen onComplete={() => setIsLoaded(true)} />
      
      <Navigation />
      
      {/* 
        We use a conditional visibility pattern here. 
        The loader is fixed and has a high z-index.
        We keep the background dark and initial opacity low for the content.
      */}
      <div 
        className="transition-all duration-1000 ease-[0.16,1,0.3,1]"
        style={{ 
          opacity: isLoaded ? 1 : 0,
          filter: isLoaded ? "none" : "blur(20px)",
          transform: isLoaded ? "none" : "translateY(20px)"
        }}
      >
        <Hero />
        <SocialProof />
        <Programs />
        <Trainers />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}

