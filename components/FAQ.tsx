import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="pt-24 pb-12 max-w-3xl mx-auto px-5 md:px-8">
      <div className="flex items-baseline gap-4 mb-12">
        <h2 className="font-display font-semibold text-3xl">Frequently Asked Questions</h2>
        <span className="text-xs text-mutedText font-mono hidden sm:inline-block">(No corporate fluff.)</span>
      </div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, idx) => (
          <div key={idx} className="border-b border-white/10 last:border-0">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full py-6 flex items-center justify-between text-left group"
              data-hoverable="true"
            >
              <span className={`font-medium text-lg transition-colors duration-200 ${openIndex === idx ? 'text-accent' : 'text-primaryText group-hover:text-accent'}`}>
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: openIndex === idx ? 45 : 0 }}
                className="text-white/40 group-hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 text-mutedText text-lg leading-relaxed pr-8">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
