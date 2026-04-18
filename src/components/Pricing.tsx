"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, Shield, Crown } from "lucide-react";

const tiers = [
  {
    name: "Standard Protocol",
    price: "149",
    description: "Foundational strength and hypertrophy programming with data-driven tracking.",
    features: [
      "AI-Adaptive Training Plan",
      "Macro-Nutrient Profiling",
      "Bi-Weekly Protocol Audits",
      "Community Access",
    ],
    icon: Shield,
    cta: "Start Protocol",
    highlight: false,
  },
  {
    name: "Iron Elite",
    price: "299",
    description: "The gold standard for high-performance transformation and metabolic mastery.",
    features: [
      "Everything in Standard",
      "1-on-1 Biomechanical Audit",
      "Custom Recovery Protocol",
      "Priority Support Line",
      "Exclusive Gym Equipment Access",
    ],
    icon: Crown,
    cta: "Join the Elite",
    highlight: true,
  },
  {
    name: "Council Access",
    price: "999",
    description: "Direct white-glove oversight from our Council of Master Trainers.",
    features: [
      "Everything in Elite",
      "Weekly Video Consultations",
      "Bespoke Supplementation Path",
      "24/7 Direct Council Access",
      "Concierge Onboarding Service",
    ],
    icon: Zap,
    cta: "Contact Council",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 lg:py-40 bg-[#0A0A0A] relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/5">
            <Crown size={12} className="text-primary-400" />
            <span className="text-primary-400 text-[10px] font-bold uppercase tracking-widest font-mono">
              Membership Tiers
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase font-display leading-[0.9]">
            Invest in <br />
            <span className="text-primary-500 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Dominance.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className={`relative group h-full`}
            >
              {tier.highlight && (
                <div className="absolute -inset-1 bg-gradient-to-b from-primary-600 to-primary-900 rounded-[2.6rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              )}
              
              <div className={`glass-card p-10 flex flex-col h-full border ${tier.highlight ? 'border-primary-500/50 bg-primary-500/5' : 'border-white/5'} hover:border-primary-500/30 transition-all duration-500`}>
                <div className="flex justify-between items-start mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${tier.highlight ? 'bg-primary-500/20 border-primary-500/30' : 'bg-neutral-900 border-white/10'}`}>
                        <tier.icon size={24} className={tier.highlight ? 'text-primary-400' : 'text-white/40'} />
                    </div>
                    {tier.highlight && (
                        <span className="px-3 py-1 bg-primary-500 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-primary-500/20">
                            Recommended
                        </span>
                    )}
                </div>

                <div className="mb-10">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 font-display">
                        {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-white">$</span>
                        <span className="text-6xl font-black text-white tracking-tighter">{tier.price}</span>
                        <span className="text-white/30 text-sm font-bold uppercase tracking-widest font-mono">/mo</span>
                    </div>
                    <p className="mt-4 text-white/40 text-sm font-medium leading-relaxed">
                        {tier.description}
                    </p>
                </div>

                <ul className="space-y-4 mb-12 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/60 font-medium">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                          <Check size={12} className="text-primary-400" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 ${
                    tier.highlight 
                    ? 'bg-primary-500 text-white hover:bg-primary-400 hover:shadow-2xl hover:shadow-primary-500/40' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}>
                    {tier.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
