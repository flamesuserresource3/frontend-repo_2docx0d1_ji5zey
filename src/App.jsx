import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Roles from './components/Roles';
import Schema from './components/Schema';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Features />
      <Roles />
      <Schema />
      <footer className="border-t border-gray-100 bg-gray-50 py-10">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} AVT Monitoring — Empowering collaborative therapy with secure, data‑driven tools.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
