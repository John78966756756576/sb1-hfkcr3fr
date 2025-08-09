import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GenerationInterface from './components/GenerationInterface';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <GenerationInterface />
      <HowItWorks />
      <Gallery />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;