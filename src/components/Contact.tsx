import React from 'react';
import { Mail, Send, MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-40 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-20 text-white text-lg animate-pulse delay-500">✦</div>
        <div className="absolute bottom-1/4 left-20 text-white text-xl animate-pulse delay-1500">✦</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to discuss trading strategies or potential collaboration opportunities?
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:bg-gray-900/70 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                  Whether you're interested in discussing trading methodologies, seeking mentorship, or exploring collaboration opportunities, I'm always open to connecting with fellow traders and professionals.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-2xl hover:bg-gray-800/70 transition-colors border border-gray-700/50">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
                      <Mail className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Email</p>
                      <p className="text-white font-semibold text-lg">huylaw.trading@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-2xl hover:bg-gray-800/70 transition-colors border border-gray-700/50">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
                      <Send className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Telegram</p>
                      <p className="text-white font-semibold text-lg">@huylaw_trader</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:bg-gray-900/70 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-semibold mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-4 focus:ring-white/10 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-semibold mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-4 focus:ring-white/10 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white text-sm font-semibold mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-4 focus:ring-white/10 transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="group w-full bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <a
              href="mailto:huylaw.trading@gmail.com"
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800/70 transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                <Mail size={20} />
                Email Me
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href="https://t.me/huylaw_trader"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                <Send size={20} />
                Telegram
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;