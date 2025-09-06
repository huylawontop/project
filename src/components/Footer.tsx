import React from 'react';
import { TrendingUp, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-black" />
              </div>
              <div className="text-2xl font-bold text-white">
                huylaw
              </div>
            </div>
            <p className="text-gray-400 text-sm">Professional Chart Starer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white font-semibold mb-1">
              © HUYLAW 2025
            </p>
            <p className="text-gray-400 text-sm">
              All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800/50 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-xs leading-relaxed">
            Not financial advice, obviously.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;