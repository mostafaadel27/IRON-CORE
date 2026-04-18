"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Zap, Star } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import GlassFlare from "./GlassFlare";

const testimonials = [
  {
    name: "Marcus T.",
    role: "CEO & Founder",
    image: "MT",
    quote:
      "I was running a multi-million dollar company but my body was breaking down. Coach Pro didn't just rebuild my physique; they optimized my entire operating system. The 12% drop in body fat was just the start.",
    result: "-12% Body Fat",
    rating: 5,
  },
  {
    name: "Elena R.",
    role: "Former Athlete",
    image: "ER",
    quote:
      "I thought my athletic days were behind me after two kids. The hypertrophy program helped me pack on 8lbs of lean mass and I'm stronger now in my 30s than I was in college.",
    result: "+8lbs Lean Mass",
    rating: 5,
  },
  {
    name: "Jameson K.",
    role: "Surgeon",
    image: "JK",
    quote:
      "Time is my most scarce resource. The Executive program completely eliminated the guesswork. It's ruthlessly efficient training that fundamentally changed how I perform in the OR.",
    result: "Elite Conditioning",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Tech Founder",
    image: "DP",
    quote:
      "I was skeptical about the recomp, but the results delivered beyond anything I imagined. My energy is stable all day, I look incredible in a suit, and I finally have a system I can sustain.",
    result: "Sustained Recomp",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Creative Director",
    image: "LT",
    quote:
      "This isn't just workouts; it's a recalibration of your standards. The meticulous focus on biomechanics meant I could train intensely without the joint pain that always sidelined me before.",
    result: "Pain-Free Hypertrophy",
    rating: 5,
  },
  {
    name: "Michael B.",
    role: "Sales Director",
    image: "MB",
    quote:
      "I literally had to buy a new wardrobe. The metabolic conditioning wiped the floor with me at first, but the mirror doesn't lie. Unbelievable results in just 16 weeks.",
    result: "Complete Transformation",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  const visibleTestimonials = 3;
  const maxIndex = Math.max(0, testimonials.length - visibleTestimonials);

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-40 bg-neutral-950 text-white relative overflow-hidden"
      ref={ref}
      style={{ perspective: "2000px" }}
    >
      {/* Antigravity Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-900/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Subtle Spatial Grid Decor */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ 
               backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", 
               backgroundSize: "60px 60px",
               transform: "rotateX(70deg) translateZ(-200px) scale(2)"
             }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-center mb-24"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 backdrop-blur-md mb-8"
               style={{ transform: "translateZ(30px)" }}>
            <span className="text-primary-400 font-black text-[10px] tracking-[0.4em] uppercase font-mono">
              Member Success Stories
            </span>
          </div>
          <h2 className="text-6xl lg:text-8xl font-black mb-10 tracking-tighter uppercase font-display leading-[0.85]"
              style={{ transform: "translateZ(60px)" }}>
            The <span className="text-transparent border-text stroke-primary-500" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Verified</span> Outcome.
          </h2>
          <p className="text-white/40 text-xl font-light italic max-w-2xl mx-auto"
             style={{ transform: "translateZ(20px)" }}>
            Elite execution yields elite data. These are the verified recalibrations of individuals who demand the extreme.
          </p>
        </motion.div>

        {/* Testimonials Grid - 3D Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ transformStyle: "preserve-3d" }}>
          {testimonials
            .slice(currentIndex, currentIndex + visibleTestimonials)
            .map((testimonial, index) => (
              <GlassFlare key={testimonial.name} className="rounded-[3rem]">
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -100) next();
                    if (info.offset.x > 100) prev();
                  }}
                  initial={{ 
                    opacity: 0, 
                    y: 60, 
                    rotateX: reducedMotion ? 0 : 20, 
                    z: reducedMotion ? 0 : -100 
                  }}
                  animate={isInView ? { 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0, 
                    z: 0 
                  } : {}}
                  transition={{ delay: index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                  whileHover={reducedMotion ? { y: -5 } : { y: -15, rotateX: -5, z: 30 }}
                  className="group/card bg-[#111]/40 backdrop-blur-2xl rounded-[3rem] p-10 border border-white/5 hover:border-primary-500/30 transition-all duration-700 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.5)] flex flex-col min-h-[450px] cursor-grab active:cursor-grabbing"
                  style={{ transformStyle: "preserve-3d" }}
                >
                {/* Quote Icon Background */}
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" style={{ transform: "translateZ(40px)" }}>
                  <Quote size={80} strokeWidth={1} />
                </div>

                {/* Rating - Gold Stars Style */}
                <div className="flex gap-1.5 mb-10" style={{ transform: "translateZ(40px)" }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -30 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.5 + i * 0.1 
                      }}
                    >
                      <Star 
                        size={14} 
                        fill="currentColor" 
                        strokeWidth={1.5} 
                        className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" 
                      />                    </motion.div>
                  ))}
                </div>

                {/* Quote Content */}
                <div style={{ transform: "translateZ(30px)" }} className="flex-grow">
                   <p className="text-white/50 text-base leading-relaxed font-light italic mb-10 group-hover:text-white/80 transition-colors duration-500">
                     &ldquo;{testimonial.quote}&rdquo;
                   </p>
                </div>

                {/* Holographic Result Badge */}
                <div className="mb-12" style={{ transform: "translateZ(50px)" }}>
                  <div className="relative inline-flex items-center gap-3 bg-primary-500/10 border border-primary-500/30 text-primary-400 px-6 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(59,130,246,0.1)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <Zap size={14} className="animate-pulse" />
                    <span>{testimonial.result}</span>
                  </div>
                </div>

                {/* Author Metadata Layer */}
                <div className="flex items-center gap-5 pt-8 border-t border-white/5" style={{ transform: "translateZ(20px)" }}>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-white/20 text-xs scale-100 group-hover:scale-110 group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-all duration-700">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-black text-white tracking-tight text-sm uppercase">{testimonial.name}</div>
                    <div className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em] font-mono mt-1">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            </GlassFlare>
          ))}
      </div>

        {/* Simple & Premium Navigation UI */}
        <div className="flex items-center justify-center mt-32">
          <div className="flex items-center gap-12 sm:gap-20">
            {/* Minimal Prev Trigger */}
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="group text-white/20 hover:text-white disabled:opacity-0 transition-all duration-500"
              aria-label="Previous record"
            >
              <ChevronLeft size={40} strokeWidth={1} className="group-hover:-translateX-2 transition-transform group-active:scale-75" />
            </button>

            {/* Minimal Dot Pagination */}
            <div className="flex items-center gap-4">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full border transition-all duration-500 ${
                    i === currentIndex 
                    ? "bg-white border-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                    : "bg-transparent border-white/20 hover:border-white/40"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            {/* Minimal Next Trigger */}
            <button
              onClick={next}
              disabled={currentIndex === maxIndex}
              className="group text-white/20 hover:text-white disabled:opacity-0 transition-all duration-500"
              aria-label="Next record"
            >
              <ChevronRight size={40} strokeWidth={1} className="group-hover:translateX-2 transition-transform group-active:scale-75" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
