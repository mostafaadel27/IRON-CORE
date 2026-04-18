"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, Cpu, Dna } from "lucide-react";

const trainers = [
  {
    name: "Alex Thorne",
    role: "Biomechanical Lead",
    specialty: "Form & Precision",
    bio: "Focusing on the architectural integrity of movement. Precision is the precursor to power.",
    icon: Cpu,
  },
  {
    name: "Sarah Vance",
    role: "Metabolic Strategist",
    specialty: "Nutrition & Recovery",
    bio: "Optimizing the physiological landscape. Your recovery determines your ceiling.",
    icon: Dna,
  },
  {
    name: "Marcus Vane",
    role: "Executive Performance",
    specialty: "Strength & Mass",
    bio: "Engineering maximum skeletal muscle adaptation through high-tension protocols.",
    icon: Shield,
  },
];

export default function Trainers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trainers" className="py-24 lg:py-40 bg-[#0A0A0A] relative overflow-hidden" ref={ref}>
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[150px] opacity-50 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/5">
            <Target size={12} className="text-primary-400" />
            <span className="text-primary-400 text-[10px] font-bold uppercase tracking-widest font-mono">
              The Protocol Council
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase font-display leading-[0.9]">
            The Architects <br />
            <span className="text-primary-500 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">of Strength.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
              
              <div className="glass-card p-10 flex flex-col h-full border border-white/5 group-hover:border-primary-500/30 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-500/10 group-hover:border-primary-500/20 transition-all duration-500">
                  <trainer.icon size={32} className="text-white group-hover:text-primary-400 transition-colors" />
                </div>

                <div className="mb-6">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-primary-400 transition-colors font-display">
                        {trainer.name}
                    </h3>
                    <div className="flex gap-2">
                         <span className="text-primary-400 text-[10px] font-bold uppercase tracking-widest font-mono">
                            {trainer.role}
                        </span>
                        <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest font-mono">|</span>
                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest font-mono">
                            {trainer.specialty}
                        </span>
                    </div>
                </div>

                <p className="text-white/40 text-sm font-medium leading-relaxed group-hover:text-white/60 transition-colors">
                  {trainer.bio}
                </p>

                <div className="mt-10 pt-8 border-t border-white/5 flex gap-4">
                    <div className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest text-white/30 group-hover:text-primary-300 transition-colors">Elite III</div>
                    <div className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest text-white/30 group-hover:text-primary-300 transition-colors">Protocol Master</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
