/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
    <div className="min-h-screen bg-page-bg overflow-x-hidden selection:bg-accent selection:text-black">
      <Navbar />
      <main>
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
