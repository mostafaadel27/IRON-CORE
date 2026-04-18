"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, TrendingDown, Users, Activity, Timer } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Elite Members", value: "500+", icon: Users },
  { label: "Success Rate", value: "99%", icon: Activity },
  { label: "Training Hours", value: "10k+", icon: Timer },
  { label: "Avg Fat Loss", value: "12%", icon: TrendingDown },
];

const highlights = [
  {
    name: "Marcus T.",
    role: "CEO & Founder",
    result: "-12% Body Fat",
    quote: "Coach Pro didn't just rebuild my physique; they optimized my entire operating system.",
  },
  {
    name: "Elena R.",
    role: "Former Athlete",
    result: "+8lbs Lean Mass",
    quote: "I'm stronger now in my 30s than I was in college. The power blocks are lethal.",
  },
  {
    name: "Jameson K.",
    role: "Surgeon",
    result: "Elite Conditioning",
    quote: "Ruthlessly efficient training that fundamentally changed how I perform in the OR.",
  },
];

export default function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="evidence" className="py-24 lg:py-40 bg-[#0A0A0A] relative overflow-hidden" ref={ref}>
      {/* Structural Precision Detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/5">
              <Star size={12} className="text-primary-400 fill-primary-400" />
              <span className="text-primary-400 text-[10px] font-bold uppercase tracking-widest font-mono">
                The Evidence
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase font-display leading-[0.9]">
              Built on <br />
              <span className="text-primary-500 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Performance.</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/40 text-xl font-medium leading-relaxed max-w-xl pb-2"
          >
            Results are the only metric that matters. We don't deal in promises—we deal in biological adaptation and measurable growth.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-neutral-950 p-10 lg:p-14 group hover:bg-neutral-900 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <stat.icon size={20} className="text-primary-400" />
              </div>
              <div className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-2 font-display">{stat.value}</div>
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Evidence Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.15 }}
              className="glass-card p-10 flex flex-col border border-white/5 hover:border-primary-500/30 transition-all duration-500"
            >
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star 
                    key={s} 
                    size={14} 
                    fill="currentColor" 
                    strokeWidth={1.5} 
                    className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" 
                  />
                ))}
              </div>
              
              <p className="text-white/70 text-lg font-medium leading-relaxed italic mb-10 flex-grow">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="pt-8 border-t border-white/5">
                <div className="inline-block bg-primary-500/10 border border-primary-500/20 text-primary-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                  {item.result}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center font-black text-primary-400">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-black uppercase text-sm tracking-tight">{item.name}</div>
                    <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest font-mono">{item.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
