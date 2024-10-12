import React from 'react';
import Navbar from '../components/Navbar';

const Features = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 py-10 text-white">
        <h1 className="text-4xl font-bold text-center mb-10 animate-fade-in">
          Features
        </h1>
        <ul className="space-y-6 text-lg">
          <li className="feature-item flex items-center gap-4 transform transition-transform duration-500 hover:scale-105">
            <span className="text-3xl">⚙️</span>
            <span>Code conversion between popular programming languages.</span>
          </li>

          <li className="feature-item flex items-center gap-4 transform transition-transform duration-500 hover:scale-105">
            <span className="text-3xl">💡</span>
            <span>Instant error checking for JavaScript.</span>
          </li>

          <li className="feature-item flex items-center gap-4 transform transition-transform duration-500 hover:scale-105">
            <span className="text-3xl">📋</span>
            <span>Copy and paste functionality directly from clipboard.</span>
          </li>

          <li className="feature-item flex items-center gap-4 transform transition-transform duration-500 hover:scale-105">
            <span className="text-3xl">💾</span>
            <span>Download converted code in multiple file formats.</span>
          </li>

          <li className="feature-item flex items-center gap-4 transform transition-transform duration-500 hover:scale-105">
            <span className="text-3xl">🎨</span>
            <span>Beautiful and intuitive user interface with code highlighting.</span>
          </li>
        </ul>
      </div>

      <style>{`
        .feature-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        .feature-item:hover {
          background: rgba(255, 255, 255, 0.2);
        }

      `}</style>
    </>
  );
};

export default Features;
