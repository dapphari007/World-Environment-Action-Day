import React, { useState } from 'react';
import { Gamepad2, Trophy, Zap, Target, Star, Crown, Gift, Users, TrendingUp, Award, Medal, Flame, Recycle, Droplets } from 'lucide-react';

const EcoGameHub = () => {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const challenges = [
    {
      id: 1,
      title: '7-Day Eco Streak',
      description: 'Complete daily eco-actions for a week',
      progress: 4,
      total: 7,
      reward: '100 EcoCoins + Streak Badge',
      difficulty: 'Easy',
      participants: 12847,
      timeLeft: '3 days',
      icon: Flame,
      color: 'orange'
    },
    {
      id: 2,
      title: 'Carbon Crusher',
      description: 'Reduce your footprint by 20% this month',
      progress: 12,
      total: 20,
      reward: '500 EcoCoins + Carbon Hero Badge',
      difficulty: 'Medium',
      participants: 8934,
      timeLeft: '18 days',
      icon: Target,
      color: 'green'
    },
    {
      id: 3,
      title: 'Community Builder',
      description: 'Invite 5 friends to join the movement',
      progress: 2,
      total: 5,
      reward: '300 EcoCoins + Influencer Badge',
      difficulty: 'Medium',
      participants: 5621,
      timeLeft: '25 days',
      icon: Users,
      color: 'blue'
    },
    {
      id: 4,
      title: 'Waste Warrior',
      description: 'Reduce household waste by 50% this week',
      progress: 3,
      total: 7,
      reward: '200 EcoCoins + Recycling Master Badge',
      difficulty: 'Hard',
      participants: 3456,
      timeLeft: '4 days',
      icon: Recycle,
      color: 'purple'
    }
  ];

  const achievements = [
    { name: 'First Steps', icon: '🌱', rarity: 'Common', earned: true },
    { name: 'Eco Warrior', icon: '⚔️', rarity: 'Rare', earned: true },
    { name: 'Planet Protector', icon: '🛡️', rarity: 'Epic', earned: true },
    { name: 'Climate Champion', icon: '👑', rarity: 'Legendary', earned: false },
    { name: 'Earth Guardian', icon: '🌍', rarity: 'Mythic', earned: false },
    { name: 'Sustainability Master', icon: '✨', rarity: 'Divine', earned: false }
  ];

  const leaderboard = [
    { rank: 1, name: 'EcoNinja2024', level: 47, coins: 15420, streak: 89 },
    { rank: 2, name: 'GreenQueen', level: 43, coins: 14230, streak: 76 },
    { rank: 3, name: 'ClimateHero', level: 41, coins: 13890, streak: 65 },
    { rank: 4, name: 'PlanetSaver', level: 38, coins: 12450, streak: 54 },
    { rank: 5, name: 'EcoMaster', level: 36, coins: 11780, streak: 43 }
  ];

  const handleStartPlaying = () => {
    setIsPlaying(true);
    // Scroll to the first challenge
    const firstChallenge = document.querySelector('.challenge-card');
    if (firstChallenge) {
      firstChallenge.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Star className="w-6 h-6 text-purple-300" />
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Gamepad2 className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            EcoGame Hub
            <span className="block text-purple-400">Level Up Your Impact! 🎮</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Turn climate action into an epic adventure! Complete challenges, earn rewards, 
            and compete with eco-warriors worldwide. Your planet needs a hero - are you ready?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Challenges */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-purple-200 mb-6 flex items-center">
              <Zap className="w-8 h-8 text-yellow-400 mr-3" />
              Active Challenges ({challenges.length})
            </h3>
            
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              const progressPercent = (challenge.progress / challenge.total) * 100;
              
              return (
                <div 
                  key={challenge.id}
                  className={`challenge-card bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border transition-all duration-300 hover:scale-102 cursor-pointer ${
                    activeChallenge === index ? 'border-purple-400 shadow-lg shadow-purple-400/20' : 'border-gray-600/30'
                  } ${isPlaying ? 'ring-2 ring-yellow-400/50 animate-pulse' : ''}`}
                  onClick={() => setActiveChallenge(index)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-${challenge.color}-500/20`}>
                        <Icon className={`w-8 h-8 text-${challenge.color}-400`} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{challenge.title}</h4>
                        <p className="text-gray-300">{challenge.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                        challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {challenge.difficulty}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Progress</span>
                      <span className="text-white font-semibold">{challenge.progress}/{challenge.total}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className={`bg-gradient-to-r from-${challenge.color}-400 to-${challenge.color}-500 h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {challenge.participants.toLocaleString()}
                      </span>
                      <span>⏰ {challenge.timeLeft}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-yellow-400 font-semibold">🎁 {challenge.reward}</div>
                    </div>
                  </div>

                  {isPlaying && activeChallenge === index && (
                    <div className="mt-4 p-3 bg-yellow-500/10 rounded-xl border border-yellow-400/30">
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-300 font-semibold">🎮 Challenge Active!</span>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 px-4 py-2 rounded-lg font-semibold transition-colors">
                          Complete Action
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Player Stats */}
            <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-200">Your Stats</h3>
                <div className="text-3xl font-bold text-white">Level 23</div>
                <div className="text-purple-300">EcoWarrior</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">EcoCoins</span>
                  <span className="text-yellow-400 font-bold">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Current Streak</span>
                  <span className="text-orange-400 font-bold">12 days 🔥</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Global Rank</span>
                  <span className="text-green-400 font-bold">#1,247</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30">
              <h3 className="text-xl font-bold text-blue-200 mb-4 flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                Achievements
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-xl text-center transition-all duration-300 ${
                      achievement.earned 
                        ? 'bg-yellow-500/20 border border-yellow-400/50' 
                        : 'bg-gray-700/20 border border-gray-600/30 opacity-50'
                    }`}
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-xs font-semibold text-gray-300">{achievement.name}</div>
                    <div className={`text-xs ${
                      achievement.rarity === 'Common' ? 'text-gray-400' :
                      achievement.rarity === 'Rare' ? 'text-blue-400' :
                      achievement.rarity === 'Epic' ? 'text-purple-400' :
                      achievement.rarity === 'Legendary' ? 'text-yellow-400' :
                      achievement.rarity === 'Mythic' ? 'text-red-400' :
                      'text-pink-400'
                    }`}>
                      {achievement.rarity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini Leaderboard */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-600/30">
              <h3 className="text-xl font-bold text-gray-200 mb-4 flex items-center">
                <Medal className="w-6 h-6 mr-2 text-yellow-400" />
                Top Players
              </h3>
              <div className="space-y-3">
                {leaderboard.slice(0, 5).map((player) => (
                  <div key={player.rank} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        player.rank === 1 ? 'bg-yellow-500 text-yellow-900' :
                        player.rank === 2 ? 'bg-gray-400 text-gray-900' :
                        player.rank === 3 ? 'bg-orange-600 text-orange-100' :
                        'bg-gray-600 text-gray-100'
                      }`}>
                        {player.rank}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{player.name}</div>
                        <div className="text-gray-400 text-xs">Level {player.level}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-yellow-400 text-sm font-bold">{player.coins.toLocaleString()}</div>
                      <div className="text-orange-400 text-xs">{player.streak}🔥</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl">
            <Gift className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              {isPlaying ? 'Game Mode Active! 🎮' : 'Ready to Start Your Eco-Adventure?'}
            </h3>
            <p className="text-purple-100 mb-6">
              {isPlaying 
                ? 'Great! You\'re now in game mode. Complete challenges above to earn rewards!'
                : 'Join thousands of players making a real difference while having fun!'
              }
            </p>
            <button 
              onClick={handleStartPlaying}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                isPlaying 
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-white text-purple-600 hover:bg-gray-100'
              }`}
            >
              {isPlaying ? '✅ Playing Now!' : 'Start Playing Now! 🎮'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoGameHub;