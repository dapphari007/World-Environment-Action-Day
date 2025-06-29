import React, { useState } from 'react';
import { Calculator, Zap, Car, Home, Utensils, Award, TrendingDown } from 'lucide-react';

const CarbonCalculator = () => {
  const [inputs, setInputs] = useState({
    electricity: 0,
    transport: 0,
    food: 'moderate',
    waste: 0,
  });
  const [result, setResult] = useState(0);
  const [level, setLevel] = useState('');
  const [showResult, setShowResult] = useState(false);

  const calculateFootprint = () => {
    let total = 0;
    
    // Electricity (kWh per month * 12 * 0.4 kg CO2/kWh)
    total += inputs.electricity * 12 * 0.4;
    
    // Transport (miles per day * 365 * 0.4 kg CO2/mile)
    total += inputs.transport * 365 * 0.4;
    
    // Food (rough estimates in kg CO2 per year)
    const foodEmissions = {
      low: 1000,
      moderate: 2000,
      high: 3000,
    };
    total += foodEmissions[inputs.food as keyof typeof foodEmissions];
    
    // Waste (kg per week * 52 * 0.5 kg CO2/kg waste)
    total += inputs.waste * 52 * 0.5;
    
    setResult(Math.round(total));
    
    // Determine level
    if (total < 5000) {
      setLevel('Eco Champion 🌟');
    } else if (total < 10000) {
      setLevel('Green Warrior 🌿');
    } else if (total < 15000) {
      setLevel('Climate Conscious 🌱');
    } else {
      setLevel('Ready for Change 💪');
    }
    
    setShowResult(true);
  };

  return (
    <section id="carbon-calculator" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Calculator className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Carbon Footprint Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your environmental impact and get personalized recommendations 
            to reduce your carbon footprint. Every small change makes a difference!
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Tell us about your lifestyle</h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border-l-4 border-yellow-400">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 text-yellow-600 mr-3" />
                    <label className="text-lg font-semibold text-gray-700">
                      Monthly Electricity Usage (kWh)
                    </label>
                  </div>
                  <input
                    type="number"
                    value={inputs.electricity}
                    onChange={(e) => setInputs({...inputs, electricity: Number(e.target.value)})}
                    className="w-full p-4 border-2 border-yellow-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="e.g., 300"
                  />
                  <p className="text-sm text-gray-500 mt-2">Average household uses 300-1000 kWh/month</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-blue-400">
                  <div className="flex items-center mb-4">
                    <Car className="w-6 h-6 text-blue-600 mr-3" />
                    <label className="text-lg font-semibold text-gray-700">
                      Daily Transport Miles
                    </label>
                  </div>
                  <input
                    type="number"
                    value={inputs.transport}
                    onChange={(e) => setInputs({...inputs, transport: Number(e.target.value)})}
                    className="w-full p-4 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="e.g., 25"
                  />
                  <p className="text-sm text-gray-500 mt-2">Include commuting, errands, and leisure travel</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-400">
                  <div className="flex items-center mb-4">
                    <Utensils className="w-6 h-6 text-green-600 mr-3" />
                    <label className="text-lg font-semibold text-gray-700">
                      Diet Type
                    </label>
                  </div>
                  <select
                    value={inputs.food}
                    onChange={(e) => setInputs({...inputs, food: e.target.value})}
                    className="w-full p-4 border-2 border-green-200 rounded-xl focus:border-green-400 focus:outline-none transition-colors"
                  >
                    <option value="low">Plant-based / Vegetarian</option>
                    <option value="moderate">Balanced (some meat)</option>
                    <option value="high">Meat-heavy diet</option>
                  </select>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-l-4 border-purple-400">
                  <div className="flex items-center mb-4">
                    <Home className="w-6 h-6 text-purple-600 mr-3" />
                    <label className="text-lg font-semibold text-gray-700">
                      Weekly Waste (kg)
                    </label>
                  </div>
                  <input
                    type="number"
                    value={inputs.waste}
                    onChange={(e) => setInputs({...inputs, waste: Number(e.target.value)})}
                    className="w-full p-4 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="e.g., 10"
                  />
                  <p className="text-sm text-gray-500 mt-2">Average person produces 4-15 kg waste/week</p>
                </div>
              </div>

              <button
                onClick={calculateFootprint}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Calculate My Impact
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-2xl">
              {showResult ? (
                <div className="text-center space-y-6">
                  <Award className="w-20 h-20 text-green-600 mx-auto" />
                  <h3 className="text-3xl font-bold text-gray-800">Your Results</h3>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold text-red-500 mb-2">{result.toLocaleString()} kg</div>
                    <div className="text-gray-600 mb-4">CO₂ per year</div>
                    <div className="text-2xl font-bold text-green-600">{level}</div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow">
                      <TrendingDown className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-800">Quick Tips to Reduce</h4>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        <li>• Switch to LED bulbs (-200 kg CO₂/year)</li>
                        <li>• Use public transport 2x/week (-500 kg CO₂/year)</li>
                        <li>• Reduce meat intake (-300 kg CO₂/year)</li>
                        <li>• Recycle more (-150 kg CO₂/year)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-blue-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
                      Share Results
                    </button>
                    <button className="bg-green-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-600 transition-colors">
                      Get Action Plan
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                    <Calculator className="w-16 h-16 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Ready to Calculate?</h3>
                  <p className="text-gray-600">
                    Fill in your lifestyle details to discover your carbon footprint and 
                    unlock personalized recommendations for a greener future.
                  </p>
                  <div className="bg-green-100 p-4 rounded-xl">
                    <p className="text-green-800 font-semibold">🌍 Global Average: 4-16 tons CO₂/year</p>
                    <p className="text-green-700 text-sm mt-1">Let's see how you compare!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonCalculator;