import React from 'react';
import { BookOpen, Route, TrendingUp, Library, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: "AI Curriculum Assistant",
    description: "Get personalized curriculum planning and lesson design assistance tailored to your teaching style",
    color: "text-blue-400",
    bgColor: "bg-blue-600/20",
    borderColor: "border-blue-500/30",
    hoverBg: "hover:bg-blue-600/30"
  },
  {
    icon: Route,
    title: "Learning Path Designer",
    description: "Create customized learning paths that adapt to each child's pace and interests",
    color: "text-emerald-400",
    bgColor: "bg-emerald-600/20",
    borderColor: "border-emerald-500/30",
    hoverBg: "hover:bg-emerald-600/30"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor learning progress with detailed analytics and insights for better outcomes",
    color: "text-purple-400",
    bgColor: "bg-purple-600/20",
    borderColor: "border-purple-500/30",
    hoverBg: "hover:bg-purple-600/30"
  },
  {
    icon: Library,
    title: "Resource Library",
    description: "Access thousands of curated educational resources and interactive materials",
    color: "text-orange-400",
    bgColor: "bg-orange-600/20",
    borderColor: "border-orange-500/30",
    hoverBg: "hover:bg-orange-600/30"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="min-h-screen py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Powerful tools and features designed specifically for homeschooling educators
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className={`${step.bgColor} ${step.borderColor} ${step.hoverBg} border rounded-2xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-slate-900/50 backdrop-blur-sm h-full`}>
                  <div className={`${step.bgColor} ${step.borderColor} border rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-10 w-10 ${step.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="bg-slate-700 rounded-full p-2">
                      <ArrowRight className="h-6 w-6 text-slate-400" />
                    </div>
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