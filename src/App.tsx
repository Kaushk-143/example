import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import AITools from './components/AITools';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-900 transition-colors duration-300">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Hero />
        <HowItWorks />
        <AITools />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;