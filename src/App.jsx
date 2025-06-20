import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
