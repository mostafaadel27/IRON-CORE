"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  Dumbbell,
  Flame,
  HeartPulse,
  TrendingDown,
  Timer
} from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    icon: Dumbbell,
    title: "Muscle Hypertrophy",
    description: "Scientifically structured training blocks to maximize lean tissue growth.",
  },
  {
    icon: Flame,
    title: "Metabolic Conditioning",
    description: "Torch body fat while preserving hard-earned muscle mass.",
  },
  {
    icon: Timer,
    title: "Optimized Recovery",
    description: "Advanced sleep, nutrition, and supplementation protocols.",
  },
  {
    icon: TrendingDown,
    title: "Body Fat Reduction",
    description: "Sustainable fat loss strategies without extreme, unsustainable dieting.",
  },
  {
    icon: HeartPulse,
    title: "Cardiovascular Health",
    description: "Improve VO2 max and overall heart health alongside aesthetics.",
  },
  {
    icon: CheckCircle2,
    title: "Biomechanical Mastery",
    description: "Perfect form on every lift to prevent injury and maximize tension.",
  },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-24 lg:py-32 bg-[#050505] text-white relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent-900/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400 font-semibold text-xs tracking-widest uppercase mb-4">
              The Method
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 tracking-tighter leading-[1.1]">
              Engineered for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 italic">Results</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 font-light">
              This isn't theory. This is applied science combined with relentless execution. My methodology strips away the noise and focuses on what actually forces the body to adapt.
            </p>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                 <motion.div
                 key={benefit.title}
                 initial={{ opacity: 0, x: -30 }}
                 animate={isInView ? { opacity: 1, x: 0 } : {}}
                 transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
                 className="flex gap-4 group"
               >
                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary-900/40 group-hover:border-primary-500/30">
                   <benefit.icon className="w-5 h-5 text-primary-400" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-white text-lg mb-1">
                     {benefit.title}
                   </h3>
                   <p className="text-white/50 text-sm font-light leading-relaxed">{benefit.description}</p>
                 </div>
               </motion.div>
             ))}
            </div>
          </motion.div>

          {/* Transformation Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="relative"
          >
            <div className="relative aspect-[3/4] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden group border border-white/10">
                {/* Image Glow/Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-transparent z-10" />
              
                <Image 
                    src="/fit_results.png"
                    alt="Client Transformation Results"
                    fill
                    className="object-cover transition-transform duration-[15s] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Overlays */}
                <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                   <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                      <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Phase 1</p>
                      <p className="text-white font-medium text-lg leading-none">Day 01</p>
                   </div>
                   
                   <div className="h-0.5 flex-grow mx-4 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent self-center rounded-full" />
                   
                   <div className="bg-primary-900/60 backdrop-blur-md border border-primary-500/30 p-4 rounded-xl text-right">
                      <p className="text-primary-300 text-xs font-bold uppercase tracking-wider mb-1">Phase 4</p>
                      <p className="text-white font-bold text-lg leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Day 90</p>
                   </div>
                </div>
            </div>
            
             {/* Floating Stat */}
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-[#111] border border-white/10 p-5 rounded-2xl shadow-2xl z-30"
            >
                <div className="flex items-center gap-3 mb-2">
                    <TrendingDown className="text-accent-400 w-5 h-5" />
                    <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Avg Fat Loss</span>
                </div>
                <div className="text-3xl font-bold text-white tracking-tight">-12%</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
