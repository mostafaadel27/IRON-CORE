"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Magnetic from "./Magnetic";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const ctx = gsap.context(() => {
      // Background Grid Animation
      gsap.to(gridRef.current, {
        backgroundPosition: "0 100px",
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      // Mouse Parallax Effect
      const handleMouseMove = (e: MouseEvent) => {
        if (!heroRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPos = (clientX / innerWidth - 0.5) * 2;
        const yPos = (clientY / innerHeight - 0.5) * 2;

        // Animate Content (Subtle spatial tilt)
        gsap.to(contentRef.current, {
          rotateY: xPos * 4,
          rotateX: -yPos * 4,
          x: xPos * 15,
          y: yPos * 15,
          duration: 1.2,
          ease: "power3.out",
        });

        // Animate Floating Image Node
        gsap.to(imageRef.current, {
          x: -xPos * 30,
          y: -yPos * 30,
          rotateY: xPos * 8,
          rotateX: -yPos * 4,
          duration: 1.5,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    });

    return () => ctx.revert();
  }, [reducedMotion, isMobile]);

  const handleJoinNow = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToPrograms = () => {
    document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: isMobile ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: isMobile ? 0 : 0.1, delayChildren: isMobile ? 0 : 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30, filter: isMobile ? "blur(0px)" : "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: isMobile ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-neutral-950 overflow-hidden pt-20"
      style={{ perspective: "2000px" }}
    >
      {/* 3D Background Grid */}
      <div 
        ref={gridRef}
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          transform: "rotateX(65deg) translateY(-200px) translateZ(-400px) scale(3)",
          transformOrigin: "center center",
          maskImage: "radial-gradient(ellipse at 50% 50%, black, transparent 70%)",
        }}
      />

      {/* Atmospheric Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[160px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-[160px] animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Column with Spatial Depth */}
          <motion.div
            ref={contentRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center relative z-20"
            style={{ transformStyle: "preserve-3d" }}
          >


            {/* Main Heading - Spatial Layering */}
            <motion.h1
              variants={itemVariants}
              className="text-7xl sm:text-8xl lg:text-[10rem] font-black leading-[0.75] mb-12 tracking-tighter uppercase font-display"
              style={{ transform: "translateZ(100px)" }}
            >
              <span className="block drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]">Infinite</span>
              <span className="block text-transparent border-text stroke-primary-500 bg-clip-text bg-gradient-to-b from-white/10 to-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Force.</span>
            </motion.h1>

            {/* Subheadline - Glassmorphic Surface */}
            <motion.div
              variants={itemVariants}
              className="relative mb-16 p-8 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-md max-w-lg group overflow-hidden"
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <p className="text-lg sm:text-xl text-white/40 leading-relaxed font-light tracking-wide italic relative z-10 transition-colors group-hover:text-white/60">
                Biological engineering for the top 0.1%. We architect high-performance assets for environments that demand nothing less than perfection.
              </p>
            </motion.div>

            {/* CTA Interaction - High Visibility Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6"
              style={{ transform: "translateZ(80px)" }}
            >
              <button
                onClick={handleJoinNow}
                className="group relative px-10 py-5 bg-white text-neutral-950 font-black text-[10px] uppercase tracking-[0.4em] rounded-full hover:bg-neutral-200 transition-all duration-500 overflow-hidden shadow-[0_0_30_px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30_px_rgba(255,255,255,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                <span className="relative z-10">Lock In Access</span>
              </button>
              
              <button
                onClick={handleScrollToPrograms}
                className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.4em] rounded-full hover:bg-white/10 hover:border-primary-500/50 transition-all duration-500"
              >
                Explore
              </button>
            </motion.div>
          </motion.div>

          {/* 3D Asset Composition */}
          <div className="relative h-full flex items-center justify-center lg:justify-end py-12 lg:py-0">
            <div 
              ref={imageRef}
              className="relative w-full aspect-[4/5] max-w-[500px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Floating Base Image Node */}
              <motion.div
                initial={{ opacity: isMobile ? 1 : 0, scale: isMobile ? 1 : 0.9, rotateY: isMobile ? 0 : 20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: isMobile ? 0 : 2.5, ease: [0.16, 1, 0.3, 1] as any }}
                className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)]"
                style={{ transform: "translateZ(80px)" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
                  alt="Elite Performance"
                  fill
                  className="object-cover grayscale brightness-50 contrast-125 transition-all duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/20 opacity-80 pointer-events-none" />
                
                {/* Internal HUD Scanning Line */}
                <motion.div
                  animate={isMobile ? {} : { top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[1px] bg-primary-500/30 blur-[2px] z-20 pointer-events-none"
                />
              </motion.div>

              {/* Spatial Glass Panels (Z-Axis Layers) */}
              <motion.div
                animate={isMobile ? {} : { y: [0, -25, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 z-40 p-8 rounded-3xl border border-white/15 bg-black/40 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] min-w-[240px]"
                style={{ transform: "translateZ(200px)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em]">Client Success</span>
                </div>
                <div className="space-y-6">
                   <div className="flex justify-between items-end">
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Rate</span>
                      <span className="text-2xl font-display font-black text-white italic tracking-tighter">99.8%</span>
                   </div>
                   <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: isMobile ? "99.8%" : 0 }}
                        animate={{ width: "99.8%" }}
                        transition={{ duration: isMobile ? 0 : 2.5, delay: isMobile ? 0 : 1 }}
                        className="h-full bg-primary-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                      />
                   </div>
                </div>
              </motion.div>

              <motion.div
                animate={isMobile ? {} : { y: [0, 25, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-12 -left-12 z-20 p-8 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-xl shadow-2xl min-w-[200px]"
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Trophy className="text-primary-500 shadow-glow" size={24} />
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1.5">Elite Status</p>
                <p className="text-3xl font-black text-white italic leading-none tracking-tighter">Gold Verified</p>
              </motion.div>

              {/* Structural Spatial Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[110%] border border-white/5 rounded-full opacity-30 pointer-events-none" style={{ transform: "translateZ(-120px) rotateX(75deg)" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] border border-white/5 rounded-full opacity-10 pointer-events-none" style={{ transform: "translateZ(-200px) rotateX(75deg)" }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
