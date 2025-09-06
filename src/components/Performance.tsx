import React from 'react';
import { TrendingUp, Target, DollarSign, Award, BarChart3, TrendingDown, Infinity } from 'lucide-react';

const Performance = () => {
  const stats = [
    {
      title: 'Total Payouts',
      value: '$10k+',
      change: '+23.5%',
      icon: DollarSign,
    },
    {
      title: 'Win Rate',
      value: '70%',
      change: '+5.1%',
      icon: Target,
    },
    {
      title: 'Revenge Trades',
      value: 'Too Many',
      change: '??%',
      icon: TrendingDown,
    },
    {
      title: 'Coffee Consumed',
      value: '∞',
      change: '∞%',
      icon: Infinity,
    }
  ];

  const monthlyData = [
    { month: 'Jan', profit: 8500 },
    { month: 'Feb', profit: 12300 },
    { month: 'Mar', profit: 9800 },
    { month: 'Apr', profit: 15200 },
    { month: 'May', profit: 11900 },
    { month: 'Jun', profit: 18400 },
    { month: 'Jul', profit: 14600 },
    { month: 'Aug', profit: 16800 },
    { month: 'Sep', profit: 13200 },
    { month: 'Oct', profit: 19500 },
    { month: 'Nov', profit: 17300 },
    { month: 'Dec', profit: 21200 }
  ];

  const maxProfit = Math.max(...monthlyData.map(d => d.profit));

  return (
    <section id="performance" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-32 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-20 text-white text-lg animate-pulse delay-700">✦</div>
        <div className="absolute bottom-1/4 right-20 text-white text-xl animate-pulse delay-1200">✦</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trading Results
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My win rate is calculated using advanced selective memory techniques.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.title} className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <span className="text-green-400 text-sm font-semibold bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">{stat.change}</span>
                </div>
                <h3 className="text-gray-400 text-sm font-medium mb-2">{stat.title}</h3>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Chart Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 lg:p-12 hover:bg-gray-900/70 transition-all duration-300">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Monthly Performance 2024</h3>
              <p className="text-gray-400">Consistent growth throughout the year</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 rounded-full px-4 py-2 border border-gray-700/50">
              <BarChart3 size={16} className="text-white" />
              <span className="text-sm font-medium text-gray-300">Monthly View</span>
            </div>
          </div>
          
          <div className="relative h-80 flex items-end justify-center gap-3 md:gap-6">
            {monthlyData.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center group">
                <div className="relative">
                  <div 
                    className="w-8 md:w-16 bg-white rounded-t-xl transition-all duration-700 hover:bg-gray-200 group-hover:scale-105"
                    style={{ height: `${(data.profit / maxProfit) * 250}px` }}
                  ></div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-700">
                    ${data.profit.toLocaleString()}
                  </div>
                </div>
                <span className="text-gray-400 text-sm mt-4 font-medium">{data.month}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-4 text-sm bg-gray-800/50 rounded-full px-6 py-3 border border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-gray-300 font-medium">Monthly Profit ($)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;