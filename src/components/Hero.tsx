import React from 'react';
import { ArrowRight, Sparkles, Play, Star, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="h-screen pt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm backdrop-blur-sm">
                <Sparkles className="h-4 w-4 mr-2" />
                AI-Powered Education Revolution
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Empower Your Homeschooling Journey
            </h1>
            
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transform your homeschooling experience with AI-powered tools designed specifically for homeschooling educators. 
              From personalized curricula to adaptive lesson plans, we make quality education accessible and engaging.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <a 
                href="https://dumroo.ai/login" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="group border-2 border-blue-400/50 hover:border-blue-400 text-blue-300 hover:text-white hover:bg-blue-600/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center backdrop-blur-sm">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="flex items-center text-blue-200">
                <Users className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-sm">10,000+ Families</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Award className="h-5 w-5 mr-2 text-green-400" />
                <span className="text-sm">Award Winning</span>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Images */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-4 h-96">
              {/* Main large image */}
              <div className="col-span-8 row-span-2 relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full transform group-hover:scale-105 transition-all duration-500 hover:shadow-blue-500/25">
                  <img 
                    src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Parent teaching child at home" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-semibold mb-1">Personalized Learning</p>
                    <p className="text-sm text-blue-200">AI-powered curriculum design</p>
                  </div>
                </div>
              </div>

              {/* Top right image */}
              <div className="col-span-4 relative group">
                <div className="relative overflow-hidden rounded-xl shadow-xl h-full transform group-hover:scale-105 transition-all duration-500 hover:shadow-purple-500/25">
                  <img 
                    src="https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Child learning with technology" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-medium">Interactive Tools</p>
                  </div>
                </div>
              </div>

              {/* Bottom right image */}
              <div className="col-span-4 relative group">
                <div className="relative overflow-hidden rounded-xl shadow-xl h-full transform group-hover:scale-105 transition-all duration-500 hover:shadow-indigo-500/25">
                  <img 
                    src="https://images.pexels.com/photos/8613204/pexels-photo-8613204.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Interactive learning session" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-medium">Progress Tracking</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-15 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}