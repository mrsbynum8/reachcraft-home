import React from 'react';
import { motion } from 'framer-motion';
import { RippleBackground } from './RippleBackground';
import Button from './Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="relative h-[500px] w-full flex items-center justify-center text-center bg-base overflow-hidden">
      <RippleBackground className="absolute inset-0 z-0">
        {/* Content Wrapper - Pointer events allow interaction with buttons */}
        <div className="relative z-10 pointer-events-none h-full w-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl px-5"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Ready to Claim Your <br />Market Position?
            </h2>
            <p className="text-mutedText text-lg mb-10">
              Limited partnerships are available for serious inquiries. If you're ready to build category authority while your competitors scramble with scattered tactics, let's talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto">
              <Button
                href="#apply"
                variant="primary"
                className="shadow-[0_0_40px_rgba(249,115,22,0.3)]"
                data-hoverable="true"
                data-cursor-text="APPLY"
              >
                Apply for Full Partnership
              </Button>
              <Button
                href="#sprints"
                variant="outline"
                data-hoverable="true"
              >
                Explore Breakthroughs
              </Button>
            </div>
          </motion.div>
        </div>
      </RippleBackground>
    </section>
  );
};

export default FinalCTA;
