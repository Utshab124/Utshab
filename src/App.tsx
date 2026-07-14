/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Work from './components/Work';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';

export default function App() {
  const [showTerms, setShowTerms] = React.useState(false);

  return (
    <div className="min-h-screen bg-page-bg overflow-x-hidden selection:bg-accent selection:text-black relative">
      {/* Background Animated Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 120, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-accent/10 blur-[150px]"
        />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Intro />
        <Work />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer onShowTerms={() => setShowTerms(true)} />
      <TermsOfService isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </div>
  );
}
