"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Dumbbell, Zap, Flame } from "lucide-react";

const programs = [
  {
    icon: Flame,
    title: "The Recomp",
    description:
      "A 12-week intensive aimed at rapid fat oxidation while preserving and building lean muscle tissue. Ideal for those needing a significant shift in body composition.",
    features: [
      "Custom Macro Protocols",
      "Hypertrophy + MetCon Programming",
      "Weekly Check-ins & Adjustments",
      "Supplementation Guide",
    ],
    duration: "12 Weeks",
    price: "$2,500",
    popular: true,
  },
  {
    icon: Dumbbell,
    title: "Pure Hypertrophy",
    description:
      "A 16-week dedicated muscle-building phase. We focus purely on progressive overload, perfect biomechanics, and optimizing the hormonal environment for growth.",
    features: [
      "Periodized Training Blocks",
      "Caloric Surplus Management",
      "Form Analysis & Correction",
      "Recovery Optimization",
    ],
    duration: "16 Weeks",
    price: "$3,200",
    popular: false,
  },
  {
    icon: Zap,
    title: "Executive Performer",
    description:
      "A holistic program designed for busy professionals. Maximizes athletic performance and aesthetics with minimal time investment. Efficiency is the priority.",
    features: [
      "Time-Optimized Workouts",
      "Travel-Friendly Protocols",
      "Stress & Cortisol Management",
      "Concierge-Level Support",
    ],
    duration: "Ongoing",
    price: "$1k/mo",
    popular: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary-900/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-900/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 font-semibold text-xs tracking-widest uppercase mb-4">
            Elite Programs
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mt-3 mb-6 tracking-tighter">
            Select Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 italic">Protocol</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            I don't offer generic templates. These are highly structured, scientifically-backed protocols designed for those ready to commit entirely to the process.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative bg-[#111] rounded-3xl p-8 transition-all duration-500 flex flex-col h-full 
                ${program.popular
                  ? "border border-primary-500/50 shadow-[0_0_30px_rgba(14,165,233,0.15)] relative z-10 lg:scale-[1.03]"
                  : "border border-white/10 hover:border-white/20"
                }`}
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                  Most Selected
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border
                ${program.popular 
                    ? "bg-primary-900/40 border-primary-500/30" 
                    : "bg-white/5 border-white/10"
                }`}>
                <program.icon className={`w-6 h-6 ${program.popular ? "text-primary-400" : "text-white/70"}`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight leading-tight">
                {program.title}
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed font-light text-sm flex-grow">
                {program.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-10 border-t border-white/10 pt-8">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                        <div className={`w-1.5 h-1.5 rounded-full ${program.popular ? "bg-primary-400" : "bg-white/50"}`} />
                    </div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="pt-6 border-t border-white/10 mt-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white/40 text-xs uppercase tracking-wider font-semibold">{program.duration}</span>
                  <span className="text-2xl font-bold text-white tracking-tight">
                    {program.price}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm ${program.popular
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                    }`}
                >
                  Apply Now
                  <ArrowRight size={16} className={program.popular ? "text-primary-600" : "text-white/50"} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
