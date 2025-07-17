import React from 'react';
import { TrendingUp, Clock, Target, Users } from 'lucide-react';

const statistics = [
  {
    icon: Clock,
    percentage: "50%",
    title: "Time Saved",
    description: "Reduce planning time by up to 50%",
    color: "from-emerald-500 to-teal-600",
    accentColor: "text-emerald-400"
  },
  {
    icon: TrendingUp,
    percentage: "85%",
    title: "Better Outcomes",
    description: "Improved learning results",
    color: "from-blue-500 to-indigo-600",
    accentColor: "text-blue-400"
  },
  {
    icon: Users,
    percentage: "90%",
    title: "Engagement",
    description: "Increased student engagement",
    color: "from-purple-500 to-pink-600",
    accentColor: "text-purple-400"
  },
  {
    icon: Target,
    percentage: "100%",
    title: "Personalization",
    description: "Tailored learning experiences",
    color: "from-orange-500 to-red-600",
    accentColor: "text-orange-400"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Homeschooling Educators Love Dumroo AI
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See the impact our platform has on homeschooling success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 text-center hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group">
                <div className={`bg-gradient-to-br ${stat.color} rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.percentage}
                  </div>
                  <h3 className={`text-xl font-semibold ${stat.accentColor} mb-2`}>
                    {stat.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}