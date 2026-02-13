import React from 'react';
import { motion } from 'framer-motion';

const PainSection: React.FC = () => {
  return (
    <section className="py-14 md:py-32 relative bg-surface1/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-primaryText mb-6">
            You're Juggling Too Much <br />
            <span className="text-mutedText">(And Marketing Keeps Getting Dropped)</span>
          </h2>
          <p className="text-mutedText text-lg leading-relaxed mb-6">
            You're stretched between operations, finance, and customer service. Somewhere in there, you're supposed to be a marketing genius. The result? A message that isn't connecting and an expertise that isn't translating into the market presence you deserve.
          </p>
          <p className="text-mutedText text-lg leading-relaxed">
            You're tired of agencies that specialize in creative excuses and mysterious monthly reports. You don't have time for marketing that doesn't work, but you can't afford to let competitors own the conversation.
          </p>
        </motion.div>

        {/* Right Visual: Stack */}
        <div className="relative h-[450px] w-full flex flex-col items-center justify-center">
          {/* The stack */}
          <div className="relative w-full max-w-md -mt-16">
            {['Operations', 'Finance', 'Customer Service'].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="w-full bg-surface2 border border-white/10 rounded-lg p-6 mb-3 text-center text-primaryText text-xl font-medium shadow-lg z-20 relative"
              >
                {label}
              </motion.div>
            ))}

            {/* The Dropped Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 120, rotate: 12 }}
              viewport={{ once: false, margin: "-5%" }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.5 }}
              className="w-full bg-surface1 border border-accent/40 rounded-lg p-6 text-center text-accent text-2xl font-bold shadow-xl absolute bottom-0 left-0 z-10"
            >
              Marketing
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
