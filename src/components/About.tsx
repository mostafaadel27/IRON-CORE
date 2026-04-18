"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Calendar, Star } from "lucide-react";
import Image from "next/image";

const achievements = [
  { icon: Award, label: "Certified Master Coach", sublabel: "NASM & ISSA Accredited" },
  { icon: Users, label: "5,000+ Clients Coached", sublabel: "Worldwide Impact" },
  { icon: Calendar, label: "10+ Years Experience", sublabel: "Elite Training" },
  { icon: Star, label: "99% Success Rate", sublabel: "Proven Methodologies" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0A0A0A] text-white relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-900/30 rounded-full blur-[100px] opacity-60 -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-900/30 rounded-full blur-[100px] opacity-60 translate-y-1/2 translate-x-1/2" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10 group">
              {/* Image Glow/Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
              
              <Image 
                  src="/coach_about.png"
                  alt="Coach helping client"
                  fill
                  className="object-cover transition-transform duration-[15s] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
              />
              

              
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
              className="absolute -bottom-6 -right-6 lg:-right-12 bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 tracking-tight">10+</div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider mt-1">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                About The Coach
              </span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 tracking-tighter leading-[1.1]">
              Forging Elite {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 italic">Physiques</span>
            </h2>
            <div className="space-y-4 text-white/70 text-lg leading-relaxed font-light">
              <p>
                My philosophy is simple: Average effort yields average results. I specialize in taking high-achievers and turning their bodies into physical representations of their success.
              </p>
              <p>
                This isn't about generalized workout plans. It's about a complete architectural rebuild of your physiological composition, mindset, and daily operating rhythm.
              </p>
              <p>
                I provide the blueprint, the accountability, and the unyielding standard. You provide the execution. Together, we forge a version of you that commands respect in every room you enter.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl transition-colors duration-300 hover:bg-white/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-900/40 flex items-center justify-center flex-shrink-0 border border-primary-500/20">
                    <achievement.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {achievement.label}
                    </div>
                    <div className="text-white/50 text-xs mt-1">
                      {achievement.sublabel}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
