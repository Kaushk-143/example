import React from 'react';
import { BookOpen, Brain, Palette, Zap, Target, Lightbulb } from 'lucide-react';

const tools = [
  {
    icon: BookOpen,
    title: "Syllabus AI",
    description: "Creates comprehensive curricula tailored to your student's grade level, learning objectives, and interests.",
    features: ["Grade-appropriate content", "Subject integration", "Learning objective alignment", "Progress tracking"],
    color: "from-emerald-500 to-teal-600",
    accentColor: "text-emerald-400"
  },
  {
    icon: Brain,
    title: "Planning AI",
    description: "Intelligent scheduling and lesson planning that adapts to your family's pace and learning goals.",
    features: ["Adaptive scheduling", "Optimal learning paths", "Progress monitoring", "Resource suggestions"],
    color: "from-purple-500 to-indigo-600",
    accentColor: "text-purple-400"
  },
  {
    icon: Palette,
    title: "Personalize AI",
    description: "Customizes content delivery and learning experiences to match each student's unique learning style.",
    features: ["Learning style adaptation", "Interest-based content", "Difficulty adjustment", "Engagement optimization"],
    color: "from-orange-500 to-red-600",
    accentColor: "text-orange-400"
  }
];

export default function AITools() {
  return (
    <section id="ai-tools" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Your AI Teaching Assistants
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Three specialized AI tools working together to create the perfect homeschooling experience for your family
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group">
                {tool.title === "Syllabus AI" && (
                  <div className="mb-6 rounded-lg overflow-hidden w-full">
                    <img 
                      src="/public/image copy copy.png" 
                      alt="Syllabus AI visualization" 
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover"
                    />
                  </div>
                )}
                
                {tool.title === "Planning AI" && (
                  <div className="mb-6 rounded-lg overflow-hidden w-full">
                    <img 
                      src="/public/image.png" 
                      alt="Planning AI visualization" 
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover"
                    />
                  </div>
                )}
                
                {tool.title === "Personalize AI" && (
                  <div className="mb-6 rounded-lg overflow-hidden w-full">
                    <img 
                      src="/public/image copy copy copy.png" 
                      alt="Personalize AI visualization" 
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover"
                    />
                  </div>
                )}
                
                <div className={`bg-gradient-to-br ${tool.color} rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">{tool.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">{tool.description}</p>
                
                <div className="space-y-3">
                  <h4 className={`font-semibold ${tool.accentColor} mb-3`}>Key Features:</h4>
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Zap className="h-4 w-4 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-sm lg:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}