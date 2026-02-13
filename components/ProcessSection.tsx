import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="relative py-14 md:py-32 bg-base">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Sticky Left Column */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <h2 className="font-display font-bold text-4xl mb-6">Our Proven Path to <br />Market Leadership</h2>
              <p className="text-mutedText text-lg leading-relaxed mb-8">
                Chaos is expensive. We install a marketing operating system that creates predictable growth. This isn't a hack; it's engineering.
              </p>
              <div className="h-64 w-[1px] bg-gradient-to-b from-accent to-transparent hidden lg:block ml-2 opacity-50"></div>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-40 pb-12 lg:pb-24">
            {PROCESS_STEPS.map((step, idx) => (
              <ProcessCard key={step.id} step={step} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessCard: React.FC<{ step: any, index: number }> = ({ step, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, x }}
      className="bg-surface2 border border-white/5 p-8 md:p-10 rounded-2xl relative overflow-hidden group"
      data-hoverable="true"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-8xl font-bold text-secondaryAccent select-none">
        {step.number}
      </div>

      <div className="relative z-10">
        <span className="text-accent font-mono text-sm tracking-widest uppercase mb-3 block">Step {step.number}</span>
        <h3 className="font-display text-2xl font-bold mb-4">{step.title}</h3>
        <p className="text-mutedText text-lg leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
};

export default ProcessSection;
