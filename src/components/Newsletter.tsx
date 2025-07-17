import React, { useState } from 'react';
import { Mail, Send, CheckCircle, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-slate-500 via-blue-600 to-purple-700 flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 lg:p-16 shadow-2xl">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
            <Mail className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Homeschooling Experience?
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of homeschooling educators already using Dumroo AI to enhance their teaching experience. 
            Get started for free today and see the difference AI can make!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
            <a 
              href="https://dumroo.ai/login"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center w-full sm:w-auto hover:scale-105 hover:shadow-xl"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="group border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-200 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              Free to get started
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              Cancel anytime
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  )
  );
}