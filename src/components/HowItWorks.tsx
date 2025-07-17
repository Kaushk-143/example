import React from 'react';
import { BookOpen, Route, TrendingUp, Library, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: "AI Curriculum Assistant",
    description: "Get personalized curriculum planning and lesson design assistance",
    color: "text-blue-400",
    bgColor: "bg-blue-600/20",
    borderColor: "border-blue-500/30"
  },
  {
    icon: Route,
    title: "Learning Path Designer",
    description: "Create customized learning paths for each child",
    color: "text-emerald-400",
    bgColor: "bg-emerald-600/20",
    borderColor: "border-emerald-500/30"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor learning progress with detailed analytics",
    color: "text-purple-400",
    bgColor: "bg-purple-600/20",
    borderColor: "border-purple-500/30"
  },
  {
    icon: Library,
    title: "Resource Library",
    description: "Access curated educational resources and materials",
    color: "text-orange-400",
    bgColor: "bg-orange-600/20",
    borderColor: "border-orange-500/30"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful tools and features designed specifically for homeschooling educators
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className={`${step.bgColor} ${step.borderColor} border rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-900`}>
                  <div className={`${step.bgColor} ${step.borderColor} border rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400 dark:text-gray-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}