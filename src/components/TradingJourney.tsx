import React from 'react';
import { BookOpen, TrendingUp, Award, Target, Zap, Crown } from 'lucide-react';

const TradingJourney = () => {
  const journeySteps = [
    {
      year: '2019',
      title: 'Market Discovery',
      description: 'First introduction to financial markets and began studying price action fundamentals.',
      icon: BookOpen,
    },
    {
      year: '2020',
      title: 'ICT Methodology',
      description: 'Discovered Inner Circle Trader concepts and began intensive study of institutional trading.',
      icon: Target,
    },
    {
      year: '2021',
      title: 'Live Trading',
      description: 'Transitioned to live trading with proper risk management and consistent methodology.',
      icon: Zap,
    },
    {
      year: '2022',
      title: 'Consistency Achieved',
      description: 'Reached consistent profitability with refined entry and exit strategies.',
      icon: TrendingUp,
    },
    {
      year: '2023',
      title: 'Advanced Strategies',
      description: 'Mastered complex market structure analysis and multi-timeframe confluence.',
      icon: Award,
    },
    {
      year: '2024',
      title: 'Elite Performance',
      description: 'Achieved elite trader status with exceptional risk-reward ratios and drawdown control.',
      icon: Crown,
    }
  ];

  return (
    <section id="journey" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 text-white text-lg animate-pulse delay-500">✦</div>
        <div className="absolute bottom-20 right-10 text-white text-xl animate-pulse delay-1500">✦</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From a video editor to a coder, and now a professional trader. <br/> Here's a timeline of my trading journey.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-800"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.year} className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                  {/* Content Card */}
                  <div className={`w-full max-w-md ${isEven ? 'mr-8 lg:mr-16' : 'ml-8 lg:ml-16 text-right'} transform hover:scale-105 transition-all duration-500`}>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300">
                      <div className={`flex items-center gap-4 mb-6 ${isEven ? 'justify-start' : 'justify-end'}`}>
                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                          <Icon className="w-7 h-7 text-black" />
                        </div>
                        <div className="text-2xl font-bold text-white">
                          {step.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingJourney;