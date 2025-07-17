import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for newsletter signup
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-purple-100 dark:from-blue-900 dark:via-blue-800 dark:to-purple-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-blue-200 dark:border-white/20 rounded-2xl p-8 lg:p-12">
          <Mail className="h-12 sm:h-16 w-12 sm:w-16 text-blue-600 dark:text-blue-300 mx-auto mb-6" />
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 px-4">
            Ready to Transform Your Homeschooling Experience?
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 dark:text-blue-100 mb-8 max-w-2xl mx-auto px-4">
            Join thousands of homeschooling educators already using Dumroo AI to enhance their teaching experience. Get started for free today!
          </p>

          <div className="max-w-md mx-auto px-4">
            <a 
              href="https://dumroo.ai/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              Start Your Journey
            </a>
          </div>
          
          <p className="text-gray-600 dark:text-blue-200 text-sm mt-4 px-4">
            Free to get started • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}