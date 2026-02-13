import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import ScatteredVisual from './ScatteredVisual';

const Hero: React.FC = () => {
  const line1Words = "Your Marketing Feels Scattered.".split(" ");
  const line2Words = "Your Expertise Deserves Better.".split(" ");

  let charIndex1 = 0;
  let charIndex2 = 0;

  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 md:pt-0 overflow-hidden bg-vignette">
      <div className="max-w-7xl mx-auto w-full px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Text Content */}
        <div className="flex flex-col z-10">
          <h1 className="font-display text-4xl md:text-5xl lg:text-[4rem] leading-[1.05] -tracking-[0.04em] text-primaryText mb-8">
            <div className="overflow-hidden flex flex-wrap">
              {line1Words.map((word, wi) => {
                const startIdx = charIndex1;
                charIndex1 += word.length + 1; // +1 for the space
                return (
                  <span key={wi} className="inline-flex whitespace-nowrap" style={{ marginRight: "0.3em" }}>
                    {word.split("").map((char, ci) => (
                      <motion.span
                        key={ci}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9, delay: (startIdx + ci) * 0.02, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                );
              })}
            </div>
            <div className="overflow-hidden flex flex-wrap mt-2">
              {line2Words.map((word, wi) => {
                const startIdx = charIndex2;
                charIndex2 += word.length + 1; // +1 for the space
                return (
                  <span key={wi} className="inline-flex whitespace-nowrap" style={{ marginRight: "0.3em" }}>
                    {word.split("").map((char, ci) => (
                      <motion.span
                        key={ci}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.4 + (startIdx + ci) * 0.02, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                );
              })}
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-[rgba(245,245,247,0.82)] leading-relaxed max-w-lg mb-10"
          >
            You're really good at what you do. So why does your marketing seem like it was assembled by a caffeinated intern at 3 AM? We build unified brand and marketing systems that turn expertise into authority—and authority into revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Button
              href="#apply"
              variant="primary"
              className="whitespace-nowrap text-center"
              data-hoverable="true"
              data-cursor-text="START"
            >
              Apply for Full Partnership
            </Button>
            <Button
              href="#breakthrough"
              variant="outline"
              className="whitespace-nowrap text-center"
              data-hoverable="true"
            >
              Choose Your Breakthrough
            </Button>
          </motion.div>
        </div>

        {/* Right: Chaotic to Unified Visual */}
        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center perspective-[1000px]">
          <ScatteredVisual />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-8 flex items-center gap-4 hidden md:flex"
      >
        <span className="font-mono text-xs text-mutedText uppercase tracking-widest">Scroll for clarity</span>
        <div className="h-12 w-[1px] bg-[rgba(245,245,247,0.2)] relative overflow-hidden">
          <motion.div
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[30%] bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
