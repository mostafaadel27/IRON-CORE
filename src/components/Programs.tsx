"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Flame, Zap, Crosshair, Check, Clock, Activity } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const programs = [
  {
    title: "Iron Recomp",
    difficulty: "Advanced",
    focus: "Hypertrophy + Loss",
    description: "A 12-week intensive aimed at rapid fat oxidation while building lean muscle tissue. Engineered for a complete body shift.",
    features: [
      "Custom Macro Protocols",
      "Metabolic Conditioning",
      "Weekly Precision Audits",
      "Recovery Management"
    ],
    duration: "12 WEEKS",
    intensity: "8/10",
    icon: Flame,
    popular: false,
  },
  {
    title: "Power Building",
    difficulty: "Elite",
    focus: "Max Strength + Size",
    description: "Our signature 16-week strength and mass protocol. Focus on progressive overload and perfect biomechanical execution.",
    features: [
      "Periodized Strength Blocks",
      "Form Analysis + Correction",
      "Hormonal Optimization",
      "Supplements Strategy"
    ],
    duration: "16 WEEKS",
    intensity: "9.5/10",
    icon: Activity,
    popular: true,
  },
  {
    title: "Elite Performance",
    difficulty: "Executive",
    focus: "Efficiency + Health",
    description: "Designed for high-performers with limited time. Maximizes athletic output and longevity with minimal friction.",
    features: [
      "Time-Optimized Sessions",
      "Travel-Ready Protocols",
      "Cortisol & Stress Audit",
      "Lifestyle Integration"
    ],
    duration: "ONGOING",
    intensity: "7/10",
    icon: Zap,
    popular: false,
  },
];

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  return (
    <section id="programs" className="py-24 lg:py-40 bg-neutral-950 relative overflow-hidden" ref={ref} style={{ perspective: "2000px" }}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Spatial Grid Base */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)", 
             backgroundSize: "40px 40px",
             transform: "rotateX(60deg) translateY(-100px) scale(2)"
           }} 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="max-w-3xl mb-32"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 backdrop-blur-md"
               style={{ transform: "translateZ(30px)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-primary-400 text-[10px] font-black uppercase tracking-[0.3em] font-mono">
              Operational Protocols
            </span>
          </div>
          <h2 className="text-6xl lg:text-8xl font-black text-white mb-10 tracking-tighter uppercase font-display leading-[0.85]"
              style={{ transform: "translateZ(60px)" }}>
            Select Your <br />
            <span className="text-transparent border-text stroke-primary-500" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Legacy.</span>
          </h2>
          <p className="text-white/40 text-xl font-light leading-relaxed max-w-2xl italic"
             style={{ transform: "translateZ(20px)" }}>
            Precision-engineered training structures for high-performance individuals ready to commit to the elite standard of execution.
          </p>
        </motion.div>

        {/* Program Cards - 3D Grid Composition */}
        <div className="grid lg:grid-cols-3 gap-8" style={{ transformStyle: "preserve-3d" }}>
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ 
                opacity: 0, 
                y: 30, 
                rotateX: reducedMotion ? 0 : 20, 
                z: reducedMotion ? 0 : -50 
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotateX: 0, 
                z: 0 
              } : {}}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              whileHover={reducedMotion ? { y: -5 } : { y: -10, rotateX: -5, rotateY: 5, z: 20 }}
              className={`group relative overflow-hidden rounded-[3rem] border transition-all duration-700 
                ${program.popular 
                  ? "bg-neutral-900/60 border-primary-500/40 shadow-[0_40px_100px_rgba(0,102,255,0.15)] ring-1 ring-primary-500/10" 
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
                }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glassmorphic Grain Surface */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              
              {/* Vertical Light Flare */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="p-12 flex flex-col h-full relative z-10">
                {/* Visual Metadata Layer */}
                <div className="flex items-start justify-between mb-16" style={{ transform: "translateZ(40px)" }}>
                  <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center border transition-all duration-700 group-hover:rotate-[15deg] group-hover:bg-primary-500/10
                    ${program.popular 
                      ? "bg-primary-600/20 border-primary-500/40 text-primary-400" 
                      : "bg-white/5 border-white/10 text-white/40 group-hover:text-primary-400"
                    }`}>
                    <program.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em] mb-1 font-mono">Difficulty</p>
                    <p className={`text-xs font-black uppercase tracking-tighter ${program.popular ? "text-primary-400" : "text-white/60"}`}>
                      {program.difficulty}
                    </p>
                  </div>
                </div>

                {/* Content Layer */}
                <div style={{ transform: "translateZ(30px)" }}>
                   <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tight group-hover:text-primary-400 transition-colors duration-500">
                     {program.title}
                   </h3>
                   <p className="text-white/40 text-[15px] font-light mb-12 leading-relaxed italic group-hover:text-white/60 transition-colors">
                     {program.description}
                   </p>
                </div>

                {/* Performance Metrics Layer */}
                <div className="flex items-center gap-8 mb-12 pt-8 border-t border-white/5" style={{ transform: "translateZ(20px)" }}>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] font-mono">Duration</span>
                    <span className="text-[11px] font-black text-white italic tracking-widest">{program.duration}</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] font-mono">Intensity</span>
                    <span className="text-[11px] font-black text-primary-500 italic tracking-widest">{program.intensity}</span>
                  </div>
                </div>

                {/* Feature Checklist Layer */}
                <ul className="space-y-5 mb-14 flex-grow" style={{ transform: "translateZ(10px)" }}>
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-5 group/item">
                      <div className="mt-1 w-4 h-4 rounded-sm border border-white/10 flex items-center justify-center group-hover/item:border-primary-500/50 transition-all duration-300">
                        <Check size={10} className="text-white/20 group-hover/item:text-primary-500" />
                      </div>
                      <span className="text-white/40 text-[11px] font-black uppercase tracking-wider group-hover/item:text-white transition-colors uppercase">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Layer */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transform: "translateZ(50px)" }}
                  className={`relative z-20 w-full py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.5em] transition-all duration-500 flex items-center justify-center gap-4
                    ${program.popular 
                      ? "bg-primary-500 text-white shadow-[0_25px_50px_rgba(59,130,246,0.3)] hover:shadow-primary-500/50" 
                      : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10 hover:border-primary-500/50"
                    }`}
                >
                  <span className="pointer-events-none flex items-center gap-4">
                    Reserve Spot
                    <ArrowRight size={14} />
                  </span>
                </motion.button>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
