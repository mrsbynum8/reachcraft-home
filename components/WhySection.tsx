import React from 'react';
import { InfoCard } from './InfoCard';

const WhySection: React.FC = () => {
  return (
    <section id="why-us" className="py-14 md:py-24 bg-surface1/30">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-16">
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-4">Why Smart Business Owners Choose ReachCraft</h2>
          <p className="text-mutedText text-lg max-w-2xl">Unlike traditional agencies that over-promise and under-deliver, we operate with radical transparency. We believe that's how partnerships should work.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            title="A True Partnership"
            description="Our approach combines strategic insights with genuine care for your success. You'll always know what we're doing and why."
            image="/partnership.jpg"
          />
          <InfoCard
            title="Results, Not Markup"
            description="We separate media investment from strategy fees. This means we're focused on results that grow your bottom line, not our commissions."
            image="/results.jpg"
          />
          <InfoCard
            title="Radical Transparency"
            description="No more mysterious reports. We provide clear, concise updates that show real progress towards your goals."
            image="/transparency.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhySection;
