import React from 'react';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Sparkle elements */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
        
        {/* Larger sparkles */}
        <div className="absolute top-32 right-1/4 text-white text-2xl animate-pulse delay-700">✦</div>
        <div className="absolute bottom-1/4 left-1/4 text-white text-xl animate-pulse delay-1200">✦</div>
        <div className="absolute top-1/3 right-10 text-white text-lg animate-pulse delay-300">✦</div>
        
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">Professional Chart Starer</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Charts are art
            <br />
            <span className="text-gray-400">
              I just doodle on them.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional day trader who pretends to understand what the market makers are thinking. I draw lines on chart and somehow make money doing it.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">
                $10K+
              </div>
              <div className="text-gray-400 font-medium">Total Payouts</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">
                70%
              </div>
              <div className="text-gray-400 font-medium">Win Rate</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">
                Too Many
              </div>
              <div className="text-gray-400 font-medium">Revenge Trades</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;