import React from 'react';
import Hero from './components/Hero';
import CarbonCalculator from './components/CarbonCalculator';
import SustainableTips from './components/SustainableTips';
import EcoGameHub from './components/EcoGameHub';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Hero />
      <CarbonCalculator />
      <SustainableTips />
      <div id="eco-game-hub">
        <EcoGameHub />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;