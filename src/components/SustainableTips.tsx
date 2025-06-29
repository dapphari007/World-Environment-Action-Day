import React, { useState } from 'react';
import { Home, ShoppingCart, Zap, Recycle, CheckCircle, Star, Trophy } from 'lucide-react';

const SustainableTips = () => {
  const [completedTips, setCompletedTips] = useState(new Set());
  const [currentCategory, setCurrentCategory] = useState('home');

  const categories = {
    home: {
      icon: Home,
      title: 'Eco-Friendly Home',
      color: 'green',
      tips: [
        { id: 1, title: 'Switch to LED Bulbs', impact: 'Save 200kg CO₂/year', difficulty: 'easy', points: 10 },
        { id: 2, title: 'Install Smart Thermostat', impact: 'Reduce energy by 15%', difficulty: 'medium', points: 25 },
        { id: 3, title: 'Use Cold Water for Laundry', impact: 'Save 150kg CO₂/year', difficulty: 'easy', points: 15 },
        { id: 4, title: 'Seal Air Leaks', impact: 'Cut heating costs by 20%', difficulty: 'medium', points: 30 },
      ]
    },
    shopping: {
      icon: ShoppingCart,
      title: 'Green Shopping',
      color: 'blue',
      tips: [
        { id: 5, title: 'Buy Local Produce', impact: 'Reduce transport emissions', difficulty: 'easy', points: 20 },
        { id: 6, title: 'Choose Reusable Bags', impact: 'Prevent 500 plastic bags/year', difficulty: 'easy', points: 10 },
        { id: 7, title: 'Buy in Bulk', impact: 'Reduce packaging waste', difficulty: 'easy', points: 15 },
        { id: 8, title: 'Support Eco-Brands', impact: 'Drive sustainable business', difficulty: 'medium', points: 25 },
      ]
    },
    energy: {
      icon: Zap,
      title: 'Energy Conservation',
      color: 'yellow',
      tips: [
        { id: 9, title: 'Unplug Electronics', impact: 'Save 100kg CO₂/year', difficulty: 'easy', points: 10 },
        { id: 10, title: 'Use Natural Light', impact: 'Reduce electricity usage', difficulty: 'easy', points: 15 },
        { id: 11, title: 'Air Dry Clothes', impact: 'Save 300kg CO₂/year', difficulty: 'easy', points: 20 },
        { id: 12, title: 'Optimize Computer Settings', impact: 'Cut energy by 40%', difficulty: 'medium', points: 25 },
      ]
    },
    waste: {
      icon: Recycle,
      title: 'Waste Reduction',
      color: 'purple',
      tips: [
        { id: 13, title: 'Start Composting', impact: 'Reduce food waste by 30%', difficulty: 'medium', points: 30 },
        { id: 14, title: 'Repair Instead of Replace', impact: 'Extend product lifespan', difficulty: 'medium', points: 25 },
        { id: 15, title: 'Use Refillable Containers', impact: 'Eliminate single-use items', difficulty: 'easy', points: 15 },
        { id: 16, title: 'Digital Receipts', impact: 'Save paper and clutter', difficulty: 'easy', points: 10 },
      ]
    }
  };

  const toggleTip = (tipId: number) => {
    const newCompleted = new Set(completedTips);
    if (newCompleted.has(tipId)) {
      newCompleted.delete(tipId);
    } else {
      newCompleted.add(tipId);
    }
    setCompletedTips(newCompleted);
  };

  const totalPoints = Array.from(completedTips).reduce((sum, tipId) => {
    const tip = Object.values(categories).flatMap(cat => cat.tips).find(t => t.id === tipId);
    return sum + (tip?.points || 0);
  }, 0);

  const currentCategoryData = categories[currentCategory as keyof typeof categories];
  const CategoryIcon = currentCategoryData.icon;

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Trophy className="w-16 h-16 text-yellow-500 mr-4" />
            <div className="bg-yellow-100 px-6 py-3 rounded-full">
              <span className="text-2xl font-bold text-yellow-700">{totalPoints} Points</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sustainable Living Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete eco-friendly actions to earn points and level up your environmental impact. 
            Every action counts toward a healthier planet!
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => {
            const Icon = category.icon;
            const isActive = currentCategory === key;
            return (
              <button
                key={key}
                onClick={() => setCurrentCategory(key)}
                className={`flex items-center px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? `bg-${category.color}-500 text-white shadow-lg`
                    : `bg-white text-gray-700 hover:bg-${category.color}-50 border-2 border-${category.color}-200`
                }`}
              >
                <Icon className="w-6 h-6 mr-3" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Tips Grid */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex items-center justify-center mb-8">
            <CategoryIcon className={`w-12 h-12 text-${currentCategoryData.color}-600 mr-4`} />
            <h3 className="text-3xl font-bold text-gray-800">{currentCategoryData.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategoryData.tips.map((tip) => {
              const isCompleted = completedTips.has(tip.id);
              return (
                <div
                  key={tip.id}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-102 ${
                    isCompleted
                      ? `bg-${currentCategoryData.color}-50 border-${currentCategoryData.color}-300`
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => toggleTip(tip.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold mb-2 ${isCompleted ? `text-${currentCategoryData.color}-800` : 'text-gray-800'}`}>
                        {tip.title}
                      </h4>
                      <p className="text-gray-600 mb-3">{tip.impact}</p>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          tip.difficulty === 'easy' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {tip.difficulty === 'easy' ? '🟢 Easy' : '🟡 Medium'}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="font-semibold text-gray-700">{tip.points} pts</span>
                        </div>
                      </div>
                    </div>
                    <div className={`ml-4 p-2 rounded-full transition-all duration-300 ${
                      isCompleted 
                        ? `bg-${currentCategoryData.color}-500 text-white` 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      <CheckCircle className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Summary */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Your Progress</h4>
                <p className="text-gray-600">
                  {completedTips.size} actions completed • {totalPoints} points earned
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors">
                  Share Progress
                </button>
                <button className="border-2 border-green-500 text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                  Download Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableTips;