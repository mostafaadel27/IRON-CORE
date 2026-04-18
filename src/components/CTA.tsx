"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Clock, ShieldCheck, Zap, Lock, ChevronRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import GlassFlare from "./GlassFlare";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-48 bg-neutral-950 relative overflow-hidden"
      ref={ref}
      style={{ perspective: "2000px" }}
    >
      {/* Spatial Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[180px] opacity-40 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px] opacity-30 -translate-x-1/4 translate-y-1/4" />
        
        {/* Dynamic Scanning Line */}
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[1px] bg-primary-500/20 blur-[2px] opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center" style={{ transformStyle: "preserve-3d" }}>
          {/* Left Side: Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transform: "translateZ(30px)" }}
          >
            {/* Urgency Badge (Refined) */}
            <div className="inline-flex items-center gap-3 bg-neutral-900/50 border border-white/5 px-5 py-2 rounded-full mb-10 shadow-2xl backdrop-blur-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,1)]" />
              <span className="font-mono text-[9px] text-white/40 uppercase tracking-[0.4em]">Capacity Check // 2 Spots Available</span>
            </div>

            <h2 className="text-6xl lg:text-9xl font-black text-white mb-12 tracking-tighter uppercase font-display leading-[0.8] mix-blend-difference">
              Apply for <br />
              <span className="text-transparent border-text stroke-primary-500" style={{ WebkitTextStroke: '2px rgba(59,130,246,0.3)' }}>Access.</span>
            </h2>

            <p className="text-white/40 text-xl font-light leading-relaxed mb-16 max-w-xl">
              We operate at the limit of human performance. This is a high-load environment reserved for those ready to commit to absolute execution. 
            </p>

            {/* Technical Trust Hub */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {[
                { icon: ShieldCheck, label: "PROTOCOL", value: "Verified" },
                { icon: Lock, label: "ENCRYPTION", value: "Locked" },
                { icon: Zap, label: "RESPONSE", value: "Instant" },
                { icon: Clock, label: "WINDOW", value: "24h Cycle" },
              ].map((item, i) => (
                <div key={i} className="group flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <item.icon size={16} className="text-primary-500/50 group-hover:text-primary-500 transition-colors" />
                    <span className="font-mono text-[8px] text-white/20 uppercase tracking-[0.4em]">{item.label}</span>
                  </div>
                  <span className="text-white font-black text-xs uppercase tracking-widest">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: The Vault Entry Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <GlassFlare className="rounded-[4rem]">
              <div className="relative bg-[#111]/40 backdrop-blur-3xl p-12 lg:p-16 border border-white/5 shadow-2xl overflow-hidden rounded-[4rem]">
                {/* Visual Artifacts */}
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none font-display text-[120px] font-black leading-none -mr-16 -mt-8 italic text-white/10 select-none">VAULT</div>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-24 h-24 bg-primary-500 rounded-[2rem] flex items-center justify-center mb-10 shadow-[0_20px_50px_rgba(59,130,246,0.5)] rotate-12">
                      <Send className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter italic">Transmission Sent</h3>
                    <div className="flex flex-col gap-2">
                       <span className="text-[10px] font-mono text-primary-400 uppercase tracking-[0.5em]">Review Status: QUEUED</span>
                       <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">Est. Window: 24h</span>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10 relative z-10" style={{ transform: "translateZ(50px)" }}>
                    <div className="space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <label className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em] ml-1 font-mono">Subject_Name</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white/[0.02] border border-white/5 focus:border-primary-500/50 focus:bg-white/[0.05] outline-none px-6 py-5 rounded-2xl text-white font-black tracking-tight transition-all placeholder:text-white/5 placeholder:font-black text-xs"
                            placeholder="NAME_REQUIRED"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em] ml-1 font-mono">Email_Protocol</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white/[0.02] border border-white/5 focus:border-primary-500/50 focus:bg-white/[0.05] outline-none px-6 py-5 rounded-2xl text-white font-black tracking-tight transition-all placeholder:text-white/5 placeholder:font-black text-xs"
                            placeholder="EMAIL_REQUIRED"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <label className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em] ml-1 font-mono">Mission_Objectives</label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-white/[0.02] border border-white/5 focus:border-primary-500/50 focus:bg-white/[0.05] outline-none px-6 py-5 rounded-2xl text-white font-black tracking-tight transition-all resize-none placeholder:text-white/5 placeholder:font-black text-xs leading-relaxed"
                          placeholder="REASON_FOR_ENTRY..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full bg-primary-500 py-6 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(59,130,246,0.3)] hover:shadow-primary-500/50 transition-all duration-700"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                      <div className="relative z-10 flex items-center justify-center gap-4 text-white font-black text-xs uppercase tracking-[0.5em] italic">
                        Request Access 
                        <ChevronRight size={16} />
                      </div>
                    </button>

                    <p className="text-center text-white/20 text-[8px] font-black uppercase tracking-[0.4em] leading-relaxed">
                      Submission does not guarantee entry. <br />
                      Protocol review required.
                    </p>
                  </form>
                )}
              </div>
            </GlassFlare>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

