"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity, Target } from "lucide-react";

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING_PROTOCOL");

  const statuses = [
    "ASSEMBLING_PERFORMANCE_METRICS",
    "CALIBRATING_RESISTANCE_PROFILES",
    "LOADING_NUTRITIONAL_DATA",
    "PREPARING_THE_VAULT",
    "READY_FOR_EXECUTION"
  ];

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) onComplete();
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const statusInterval = setInterval(() => {
      const idx = Math.min(Math.floor((progress / 100) * statuses.length), statuses.length - 1);
      setStatusText(statuses[idx]);
    }, 400);

    return () => clearInterval(statusInterval);
  }, [progress]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -50,
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle Dynamic Lighting */}
          <div className="absolute inset-0 z-0">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
             <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-neutral-800/20 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-6">
            
            {/* Massive Brutalist Core Text */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mb-16 flex flex-col items-center select-none"
            >
              <h1 
                className="text-8xl md:text-9xl font-black text-transparent uppercase tracking-tighter font-display leading-none"
                style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}
              >
                IRON
              </h1>
              {/* Fill effect based on progress */}
              <h1 
                className="text-8xl md:text-9xl font-black text-white uppercase tracking-tighter font-display leading-none absolute top-0 left-0 overflow-hidden whitespace-nowrap"
                style={{ width: `${progress}%` }}
              >
                IRON
              </h1>
              <div className="mt-2 text-primary-500 font-black tracking-[0.5em] text-xs md:text-sm uppercase font-mono">
                Performance Vault
              </div>
            </motion.div>


          </div>
          

        </motion.div>
      )}
    </AnimatePresence>
  );
}
