'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function HUDCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCoords({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest('button, a, [role="button"]'));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center"
      style={{ x: springX, y: springY }}
    >
      {/* Target Crosshair / Pointer */}
      <div className="relative flex items-center justify-center">
        <motion.div 
          animate={{ 
            scale: isHovered ? 1.5 : 1,
            rotate: isHovered ? 45 : 0
          }}
          className="relative flex items-center justify-center"
        >
          <div className={`w-4 h-[1px] ${isHovered ? 'bg-primary-400 opacity-100' : 'bg-primary-500/50'} absolute transition-all`} />
          <div className={`h-4 w-[1px] ${isHovered ? 'bg-primary-400 opacity-100' : 'bg-primary-500/50'} absolute transition-all`} />
        </motion.div>
        
        <motion.div 
          animate={{ scale: isHovered ? 2.5 : 1, opacity: isHovered ? 0.8 : 1 }}
          className={`w-1 h-1 ${isHovered ? 'bg-white' : 'bg-primary-500'} rounded-full transition-colors shadow-[0_0_10px_rgba(59,130,246,0.5)]`} 
        />

        {/* Dynamic Pointer Status */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 15 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute left-full flex flex-col gap-0.5"
            >
              <span className="text-[6px] font-mono text-primary-400 uppercase tracking-[0.3em] font-black">Pointer_Active</span>
              <div className="w-8 h-[1px] bg-primary-500/30" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
