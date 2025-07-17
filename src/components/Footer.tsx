import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Dumroo.ai</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering homeschooling families with AI-powered educational tools for personalized learning experiences.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-slate-500 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-slate-500 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-slate-500 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-slate-500 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Syllabus AI</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Planning AI</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Personalize AI</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-slate-400">
                <Mail className="h-4 w-4 mr-2" />
                support@dumroo.ai
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="h-4 w-4 mr-2" />
                1-800-EDU-HELP
              </div>
              <div className="flex items-center text-slate-400">
                <MapPin className="h-4 w-4 mr-2" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © 2025 Dumroo.ai. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}