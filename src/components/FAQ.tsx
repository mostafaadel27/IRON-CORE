"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I know if this coaching is right for me?",
    answer:
      "If you are highly successful in other areas of your life but your physical health and physique have fallen behind, this is meant for you. If you are willing to execute a plan without excuses, we are a good fit. We do not work with individuals looking for quick fixes or magic pills.",
  },
  {
    question: "Do I need a fully equipped commercial gym?",
    answer:
      "While a commercial gym provides the most tools, programs can be adapted. However, to maximize the results of full hypertrophy phases, access to standard gym equipment (barbells, dumbbells, cable machines) is highly recommended. We discuss your setup during the consult.",
  },
  {
    question: "How customized are the nutrition protocols?",
    answer:
      "Your protocol is built entirely around your metabolic data, physiological feedback, schedule, and preferences. It is not a cookie-cutter meal plan. You will learn how to track effectively, substitute appropriately, and manage dining out while still making progress.",
  },
  {
    question: "What if I can't train 5-6 days a week?",
    answer:
      "Volume and frequency must match your recovery capacity and schedule. We have highly effective 3-day and 4-day protocols. It's about maximizing the stimulus in the time you have, not just spending hours in the gym.",
  },
  {
    question: "How does the check-in process work?",
    answer:
      "Check-ins are done weekly via a comprehensive form covering biofeedback (sleep, digestion, stress, hunger), training metrics, and progress photos. Based on this data, adjustments are made to your macros or training volume for the upcoming week.",
  },
  {
    question: "Do I have to take supplements?",
    answer:
      "No supplements are mandatory. They are exactly what the name implies—supplementary. However, based on your bloodwork and goals, specific evidence-based supplements (like creatine, whey, or certain vitamins) will be recommended to optimize results.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={false}
      className="border-b border-white/10 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg lg:text-xl font-semibold text-white pr-4 group-hover:text-primary-400 transition-colors duration-300 tracking-tight">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 ml-4"
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-accent-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-primary-400 transition-colors duration-300" />
          )}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/50 leading-relaxed font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-40 bg-[#0A0A0A] relative overflow-hidden" ref={ref}>
      {/* Precision Detail Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/5">
            <span className="text-primary-400 text-[10px] font-bold uppercase tracking-widest font-mono">
              Protocol Details
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-white mt-3 mb-8 tracking-tighter uppercase font-display leading-[0.9]">
            Clarity <br />
            <span className="text-primary-500 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Precedes</span> Power.
          </h2>
          <p className="text-white/40 text-lg font-medium max-w-2xl mx-auto">
            Review the operational parameters below before initiating your application process.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-2 lg:p-4 border border-white/5"
        >
          <div className="divide-y divide-white/5 px-6 lg:px-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
