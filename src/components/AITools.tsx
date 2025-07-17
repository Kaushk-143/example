import React from 'react';
import { BookOpen, Brain, Palette, Zap } from 'lucide-react';

const tools = [
  {
    icon: BookOpen,
    title: "Syllabus AI",
    description: "Creates comprehensive curricula tailored to your student's grade level, learning objectives, and interests with intelligent content suggestions.",
    features: ["Grade-appropriate content", "Subject integration", "Learning objective alignment", "Progress tracking"],
    color: "from-emerald-500 to-teal-600",
    accentColor: "text-emerald-400",
    image: "https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Brain,
    title: "Planning AI",
    description: "Intelligent scheduling and lesson planning that adapts to your family's pace and learning goals with smart recommendations.",
    features: ["Adaptive scheduling", "Optimal learning paths", "Progress monitoring", "Resource suggestions"],
    color: "from-purple-500 to-indigo-600",
    accentColor: "text-purple-400",
    image: "https://images.pexels.com/photos/8613097/pexels-photo-8613097.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Palette,
    title: "Personalize AI",
    description: "Customizes content delivery and learning experiences to match each student's unique learning style and preferences.",
    features: ["Learning style adaptation", "Interest-based content", "Difficulty adjustment", "Engagement optimization"],
    color: "from-orange-500 to-red-600",
    accentColor: "text-orange-400",
    image: "https://images.pexels.com/photos/8613201/pexels-photo-8613201.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export default function AITools() {
  return (
    <section id="ai-tools" className="min-h-screen py-20 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet Your AI Teaching Assistants
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Three specialized AI tools working together to create the perfect homeschooling experience for your family
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={index} className="group bg-slate-900/50 backdrop-blur-sm border border-slate-600 rounded-2xl overflow-hidden hover:border-slate-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={tool.image}
                    alt={`${tool.title} visualization`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${tool.color} opacity-60`}></div>
                  <div className="absolute top-4 right-4">
                    <div className={`bg-gradient-to-br ${tool.color} rounded-lg w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{tool.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{tool.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className={`font-semibold ${tool.accentColor} mb-3`}>Key Features:</h4>
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-slate-300">
                        <Zap className="h-4 w-4 text-blue-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}