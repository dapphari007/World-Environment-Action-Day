import React, { useState, useEffect } from 'react';
import { Leaf, Globe, TreePine, Wind, Calculator, Gamepad2 } from 'lucide-react';

const Hero = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [Leaf, Globe, TreePine, Wind];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[currentIcon];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Leaf className="w-6 h-6 text-green-300" />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <CurrentIcon className="w-24 h-24 text-green-300 animate-pulse transition-all duration-500" />
            <div className="absolute inset-0 w-24 h-24 rounded-full bg-green-300/20 animate-ping"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          World Environment
          <span className="block text-green-400 animate-pulse">Action Day</span>
        </h1>

        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join millions worldwide in taking action for our planet. Track your impact,
          learn sustainable practices, and become part of the global climate solution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('carbon-calculator')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculate Your Impact
          </button>
          <button 
            onClick={() => scrollToSection('eco-game-hub')}
            className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            <Gamepad2 className="w-5 h-5 mr-2" />
            Play EcoGame
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30">
            <Globe className="w-12 h-12 text-green-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-2">2.5M+</h3>
            <p className="text-green-100">Active Eco-Warriors</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30">
            <TreePine className="w-12 h-12 text-green-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-2">500K</h3>
            <p className="text-green-100">Trees Planted</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30">
            <Leaf className="w-12 h-12 text-green-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-2">1.2M tons</h3>
            <p className="text-green-100">CO₂ Reduced</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;