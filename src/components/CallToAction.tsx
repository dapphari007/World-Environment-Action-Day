import React, { useState } from 'react';
import { Share2, Download, ArrowRight, Heart, Users, Target, Globe, ArrowUp } from 'lucide-react';
import ShareModal from './ShareModal';

const CallToAction = () => {
  const [shareModal, setShareModal] = useState<{isOpen: boolean, type: 'share' | 'download' | 'invite', title: string}>({
    isOpen: false,
    type: 'share',
    title: ''
  });

  const openShareModal = (type: 'share' | 'download' | 'invite', title: string) => {
    setShareModal({ isOpen: true, type, title });
  };

  const closeShareModal = () => {
    setShareModal({ isOpen: false, type: 'share', title: '' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-green-800 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            >
              <Heart className="w-8 h-8 text-green-300" />
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Globe className="w-20 h-20 text-green-300 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Every Action 
              <span className="block text-green-400">Matters</span>
            </h2>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Join our global community of climate champions. Share your journey, 
              inspire others, and help us reach our goal of a sustainable future for all.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30 text-center transform hover:scale-105 transition-all duration-300">
              <Share2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Share Your Impact</h3>
              <p className="text-green-100 mb-6">
                Inspire your network by sharing your carbon savings and eco-achievements on social media.
              </p>
              <button 
                onClick={() => openShareModal('share', 'Share Your Impact')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center mx-auto"
              >
                Share Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30 text-center transform hover:scale-105 transition-all duration-300">
              <Download className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Get Resources</h3>
              <p className="text-green-100 mb-6">
                Download our comprehensive eco-guides, checklists, and printable materials for offline use.
              </p>
              <button 
                onClick={() => openShareModal('download', 'Download Resources')}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center mx-auto"
              >
                Download Kit
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30 text-center transform hover:scale-105 transition-all duration-300">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Invite Friends</h3>
              <p className="text-green-100 mb-6">
                Multiply your impact by inviting friends and family to join the environmental movement.
              </p>
              <button 
                onClick={() => openShareModal('invite', 'Invite Friends')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center mx-auto"
              >
                Invite Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Main CTA */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-8 md:p-12 rounded-3xl text-center shadow-2xl">
            <Target className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make a Real Difference?
            </h3>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Your journey to environmental impact starts today. Track your progress, 
              connect with like-minded individuals, and be part of the solution our planet needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToTop}
                className="bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
              >
                <ArrowUp className="w-5 h-5 mr-2" />
                Start Your Journey
              </button>
              <button 
                onClick={() => scrollToSection('every-action-matters')}
                className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Learn More Section */}
          <div id="every-action-matters" className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30">
            <h3 className="text-3xl font-bold text-center text-green-300 mb-8">Every Action Matters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">🌍 Global Impact</h4>
                <p className="text-green-100 mb-4">
                  Climate change affects every corner of our planet. From rising sea levels to extreme weather events, 
                  the consequences of inaction are becoming increasingly severe. But together, we can make a difference.
                </p>
                <ul className="text-green-200 space-y-2">
                  <li>• 1.5°C warming limit requires immediate action</li>
                  <li>• Individual actions collectively create massive impact</li>
                  <li>• Technology and awareness are our strongest tools</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">🚀 Your Power</h4>
                <p className="text-green-100 mb-4">
                  Every sustainable choice you make ripples outward, inspiring others and contributing to a global movement. 
                  Your carbon footprint reduction, no matter how small, is part of the solution.
                </p>
                <ul className="text-green-200 space-y-2">
                  <li>• Small changes lead to big results</li>
                  <li>• Community action amplifies individual impact</li>
                  <li>• Education and awareness drive lasting change</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Stats */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-green-400">2.5M+</div>
                <div className="text-green-100">Community Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">127</div>
                <div className="text-green-100">Countries Reached</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">1.2M</div>
                <div className="text-green-100">Tons CO₂ Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">500K</div>
                <div className="text-green-100">Trees Planted</div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-green-200 text-lg mb-4">
              "This platform transformed how I think about my environmental impact. 
              The gamification makes sustainable living fun and rewarding!"
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-green-400 rounded-full"></div>
              <span className="text-green-300 font-semibold">Sarah M., Climate Champion</span>
            </div>
          </div>
        </div>
      </section>

      <ShareModal 
        isOpen={shareModal.isOpen}
        onClose={closeShareModal}
        type={shareModal.type}
        title={shareModal.title}
      />
    </>
  );
};

export default CallToAction;