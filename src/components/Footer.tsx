import React from 'react';
import { Heart, Globe, Leaf, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold">EcoAction Hub</h3>
            </div>
            <p className="text-green-100 mb-4 leading-relaxed">
              Empowering individuals worldwide to take meaningful climate action through 
              gamified experiences, education, and community engagement.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-green-300">
                <Heart className="w-5 h-5 mr-2 text-red-400" />
                <span>Made with passion for our planet</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#calculator" className="text-green-100 hover:text-green-300 transition-colors">Carbon Calculator</a></li>
              <li><a href="#tips" className="text-green-100 hover:text-green-300 transition-colors">Eco Tips</a></li>
              <li><a href="#game-hub" className="text-green-100 hover:text-green-300 transition-colors">Game Hub</a></li>
              <li><a href="#about" className="text-green-100 hover:text-green-300 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://www.unep.org/ietc/resources" target="_blank" rel="noopener noreferrer" className="text-green-100 hover:text-green-300 transition-colors">UNEP Resources</a></li>
              <li><a href="#" className="text-green-100 hover:text-green-300 transition-colors">Climate Data</a></li>
              <li><a href="#" className="text-green-100 hover:text-green-300 transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-green-100 hover:text-green-300 transition-colors">Community Forum</a></li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-green-700/50 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">2.5M+</div>
              <div className="text-green-200 text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">1.2M</div>
              <div className="text-green-200 text-sm">Tons CO₂ Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">500K</div>
              <div className="text-green-200 text-sm">Trees Planted</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">127</div>
              <div className="text-green-200 text-sm">Countries</div>
            </div>
          </div>
        </div>

        {/* Creator Section */}
        <div className="border-t border-green-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-semibold text-white">Created by HARISH K</div>
                <div className="flex items-center text-green-300">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>INDIA • ENVIRONMENT CARE TAKER</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-green-400 font-semibold">🌍 World Environment Day</div>
                <div className="text-green-200 text-sm">June 5, 2024</div>
              </div>
              <div className="flex items-center text-green-300">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">harishkalyan5464@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700/50 pt-6 mt-6 text-center">
          <p className="text-green-200 text-sm">
            © 2024 EcoAction Hub. Built with 💚 for a sustainable future. 
            <span className="block mt-1">Together, we can make every action count for our planet.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;