import React from 'react';
import { motion } from 'framer-motion';
import { BorderBeam } from './magicui/border-beam';
import Button from './Button';

const ChoosePath: React.FC = () => {
  return (
    <section id="services" className="py-14 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display font-semibold text-4xl mb-6">Choose Your Path</h2>
          <p className="text-mutedText text-lg">
            We work with serious leaders ready for real results, offering two distinct paths to market domination.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Card 1: Full Transformation (Dominant) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-gradient-to-br from-surface2 to-base border border-accent/50 rounded-2xl p-8 md:p-12 relative overflow-hidden group shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
            data-hoverable="true"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(249,115,22,0.15),transparent_50%)]" />
            <BorderBeam
              duration={8}
              size={150}
              colorFrom="#2DD4BF"
              colorTo="#F97316"
            />

            <div className="relative z-10">
              <span className="text-accent text-xs font-mono font-bold tracking-widest uppercase mb-4 block">Our signature two-year partnership for category domination.</span>
              <h3 className="font-display text-3xl font-bold mb-6">The Full Transformation</h3>
              <p className="text-mutedText mb-8 leading-relaxed">
                This is our flagship offering: a comprehensive partnership where we become your dedicated marketing department. Work directly with 2- to 5-decade veterans who specialize exclusively in founder-focused brands. Revenue typically grows 100–200% as you evolve from well-regarded expert to undisputed market leader.
              </p>

              <ul className="space-y-3 mb-10">
                {['Full-stack senior team deployed', 'Revenue & contribution margin focus', 'Weekly executive strategy syncs', 'Complete funnel reconstruction'].map(item => (
                  <li key={item} className="flex items-center text-base text-primaryText">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-8">
                <div>
                  <span className="block text-xs font-mono text-mutedText mb-1">Investment</span>
                  <span className="font-mono text-2xl text-accent">$25k–$45k<span className="text-sm text-mutedText">/monthly (+ media)</span></span>
                </div>
                <Button variant="primary" className="px-6 py-3">
                  Apply for Full Partnership
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Breakthroughs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 bg-surface1 border border-white/5 rounded-2xl p-8 relative group hover:border-white/20 transition-colors"
            data-hoverable="true"
          >
            <span className="text-secondaryAccent text-xs font-mono font-bold tracking-widest uppercase mb-4 block">Targeted solutions for immediate impact.</span>
            <h3 className="font-display text-2xl font-bold mb-4">Start with a Strategic Breakthrough</h3>
            <p className="text-mutedText text-base mb-8 leading-relaxed">
              Not ready for the full partnership? These strategic sprints solve specific challenges while giving you a preview of our approach. Think of these as intelligent first steps.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { title: "Brand Voice & Clarity Sprint", desc: "3 weeks" },
                { title: "Customer Acquisition System", desc: "4 weeks" },
                { title: "Authority Content Strategy", desc: "3 weeks" }
              ].map((sprint) => (
                <div key={sprint.title} className="bg-white/5 border border-white/5 rounded p-3 hover:bg-white/10 transition-colors cursor-default">
                  <h4 className="text-base font-bold text-secondaryAccent">{sprint.title}<br /><span className="text-sm text-mutedText font-normal">({sprint.desc})</span></h4>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="w-full border border-white/20 text-primaryText font-semibold px-6 py-3 rounded-lg text-sm uppercase tracking-wider hover:bg-white/5 transition-colors">
                Explore Breakthroughs
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChoosePath;
