import React from 'react';
import { Star, Quote, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeschooling Mom of 3",
    image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Dumroo AI has completely transformed our homeschooling experience. The personalized curricula save me hours of planning time, and my kids are more engaged than ever!",
    rating: 5,
    highlight: "Saves 15+ hours weekly"
  },
  {
    name: "Michael Chen",
    role: "Former Teacher, Now Homeschooling Dad",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "As a former educator, I'm impressed by the quality of AI-generated lesson plans. They're comprehensive, age-appropriate, and perfectly aligned with learning objectives.",
    rating: 5,
    highlight: "Professional quality content"
  },
  {
    name: "Emily Rodriguez",
    role: "Homeschooling Advocate & Blogger",
    image: "https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "The progress tracking feature helps me understand exactly where each of my children excels and where they need more support. It's like having a teaching assistant!",
    rating: 5,
    highlight: "Data-driven insights"
  },
  {
    name: "David Thompson",
    role: "Homeschooling Dad & Engineer",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "The AI adapts to my children's learning styles perfectly. My visual learner gets more diagrams, while my kinesthetic learner gets hands-on activities. Amazing!",
    rating: 5,
    highlight: "Personalized learning paths"
  },
  {
    name: "Lisa Park",
    role: "Homeschooling Mom & Nurse",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Working irregular shifts made planning difficult. Dumroo AI creates flexible schedules that work with our family's unique needs. It's been a game-changer!",
    rating: 5,
    highlight: "Flexible scheduling"
  },
  {
    name: "Robert Martinez",
    role: "Homeschooling Dad & Business Owner",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "The resource library is incredible. From science experiments to literature discussions, everything is curated and age-appropriate. My kids love the variety!",
    rating: 5,
    highlight: "Extensive resource library"
  }
];

const statistics = [
  {
    icon: Users,
    number: "15,000+",
    label: "Happy Families",
    description: "Homeschooling families trust Dumroo AI",
    color: "text-blue-400"
  },
  {
    icon: TrendingUp,
    number: "65%",
    label: "Time Saved",
    description: "Average planning time reduction",
    color: "text-green-400"
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "User Rating",
    description: "Based on 2,500+ reviews",
    color: "text-yellow-400"
  },
  {
    icon: Award,
    number: "98%",
    label: "Satisfaction Rate",
    description: "Users would recommend us",
    color: "text-purple-400"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="min-h-screen py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm backdrop-blur-sm mb-6">
            <Star className="h-4 w-4 mr-2" />
            Trusted by Thousands
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Loved by Homeschooling Families
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            See what educators and parents are saying about their experience with Dumroo AI
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center bg-slate-900/30 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-slate-500 transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mb-4">
                  <div className="bg-slate-800/50 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className={`${stat.color} font-semibold mb-1`}>{stat.label}</div>
                <div className="text-slate-400 text-sm">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 hover:border-slate-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  <div className="inline-flex items-center px-2 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs mt-1">
                    {testimonial.highlight}
                  </div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="h-8 w-8 text-blue-400 opacity-50 mb-4" />
                <p className="text-slate-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Thousands of Satisfied Families
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Start your AI-powered homeschooling journey today and see why families love Dumroo AI
            </p>
            <a 
              href="https://dumroo.ai/login"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Start Free Trial
              <Star className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}