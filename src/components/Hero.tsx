import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-600 dark:text-blue-300 text-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Education Revolution
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight px-2">
            Empower Your
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Homeschooling </span>
            Journey
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Transform your homeschooling experience with AI-powered tools designed specifically for homeschooling educators. 
            From personalized curricula to adaptive lesson plans, we make quality education accessible and engaging.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <a href="https://dumroo.ai/login" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <button className="border border-gray-400 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Watch Demo
            </button>
          </div>
      </div>
    </section>
  );
}