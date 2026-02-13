import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import ChoosePath from './components/ChoosePath';
import WhySection from './components/WhySection';
import ProcessSection from './components/ProcessSection';
import TrustedSection from './components/TrustedSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-base min-h-screen text-primaryText selection:bg-accent selection:text-white overflow-x-hidden">
      <CustomCursor />
      <Header />

      <main>
        <Hero />
        <PainSection />
        <ChoosePath />
        <WhySection />
        <ProcessSection />
        <TrustedSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
