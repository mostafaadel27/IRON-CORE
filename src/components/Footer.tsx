"use client";

import { motion } from "framer-motion";
import { Mail, Shield } from "lucide-react";

const Instagram = ({ size = 24, ...props }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Twitter = ({ size = 24, ...props }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Structural Precision Detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-8 tracking-tighter uppercase font-display">
              IRON<span className="text-primary-500">CORE</span>
            </h3>
            <p className="text-white/40 mb-10 max-w-sm font-medium leading-relaxed">
               Biological optimization for high-performers. We engineer physiques that command respect and sustain excellence.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/50 flex items-center justify-center transition-all duration-500 hover:bg-primary-500/10 group"
                >
                  <Icon size={18} className="text-white/40 group-hover:text-primary-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest font-mono mb-8">
              Navigation
            </h4>
            <ul className="space-y-6">
              {[
                { name: "Programs", href: "#programs" },
                { name: "Evidence", href: "#evidence" },
                { name: "Trainers", href: "#trainers" },
                { name: "Pricing", href: "#pricing" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary-400 transition-colors duration-300 text-sm font-black uppercase tracking-tight"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* System Status / Meta */}
          <div>
            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest font-mono mb-8">
              Legal
            </h4>
            <ul className="space-y-6 text-sm font-black uppercase tracking-tight text-white/60">
              <li className="hover:text-primary-400 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-primary-400 cursor-pointer transition-colors">Terms of Protocol</li>
              <li className="hover:text-primary-400 cursor-pointer transition-colors">Cookie Audit</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Shield size={14} className="text-primary-400" />
             </div>
             <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest font-mono">
               © {currentYear} IronCore Dynamics. All Rights Reserved.
             </p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest font-mono">
              System Operational: v4.2.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
