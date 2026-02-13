import React from 'react';
import { motion } from 'framer-motion';

const TrustedSection: React.FC = () => {
  const logos = Array(8).fill("REACHCRAFT");

  return (
    <section className="py-10 md:py-20 border-y border-white/5 bg-base overflow-hidden">

      {/* Marquee */}
      <div className="relative w-full mb-10 md:mb-20 mask-linear-fade">
        <div className="flex w-max space-x-20 animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="text-2xl font-display font-bold text-white/10 uppercase tracking-widest whitespace-nowrap">
              CLIENT LOGO {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="max-w-4xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="text-6xl text-accent/20 absolute -top-8 -left-4 font-serif">&ldquo;</div>
          <p className="text-xl md:text-3xl font-light text-primaryText leading-normal mb-8 relative z-10">
            ReachCraft didn't just run ads. They rebuilt our entire go-to-market strategy. We went from $80k/mo to $250k/mo in 8 months, and I actually have less work to do.
          </p>
          <div className="flex flex-col items-center">
            <cite className="not-italic font-bold text-white">Alex V.</cite>
            <span className="text-sm text-mutedText font-mono mt-1">Founder, FinTech SaaS</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}
      </style>
    </section>
  );
};

export default TrustedSection;
