import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeschooling Mom of 3",
    image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Dumroo AI has completely transformed our homeschooling experience. The personalized curricula save me hours of planning time, and my kids are more engaged than ever!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Former Teacher, Now Homeschooling Dad",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "As a former educator, I'm impressed by the quality of AI-generated lesson plans. They're comprehensive, age-appropriate, and perfectly aligned with learning objectives.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Homeschooling Advocate",
    image: "https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "The progress tracking feature helps me understand exactly where each of my children excels and where they need more support. It's like having a teaching assistant!",
    rating: 5
  }
];

const statistics = [
  {
    number: "10,000+",
    label: "Happy Families",
    description: "Homeschooling families trust Dumroo AI"
  },
  {
    number: "50%",
    label: "Time Saved",
    description: "Average planning time reduction"
  },
  {
    number: "95%",
    label: "Satisfaction Rate",
    description: "Users would recommend us"
  },
  {
    number: "24/7",
    label: "AI Support",
    description: "Always available when you need it"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="min-h-screen py-20 bg-gradient-to-br from-slate-600 via-slate-500 to-slate-600 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Loved by Homeschooling Families
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            See what educators and parents are saying about their experience with Dumroo AI
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center bg-slate-900/30 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-slate-500 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-400 font-semibold mb-1">{stat.label}</div>
              <div className="text-slate-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 hover:border-slate-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
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
      </div>
    </section>
  );
}