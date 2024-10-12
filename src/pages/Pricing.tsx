import React from 'react';
import Navbar from '../components/Navbar';

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 py-10 text-white">
        <h1 className="text-4xl font-bold text-center mb-10 animate-fade-in">Pricing</h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">

          <div className="pricing-card bg-slate-800 text-white rounded-lg shadow-md p-8 text-center w-full md:w-1/3 transform transition-transform duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Free Plan</h2>
            <p className="mb-4 text-lg font-semibold">$0 / month</p>
            <ul className="space-y-2 text-left">
              <li>✔️ Basic code conversion</li>
              <li>✔️ Error checking for JavaScript</li>
              <li>❌ Limited code size</li>
              <li>❌ No advanced features</li>
            </ul>
          </div>

          <div className="pricing-card bg-purple-800 text-white rounded-lg shadow-md p-8 text-center w-full md:w-1/3 transform transition-transform duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Pro Plan</h2>
            <p className="mb-4 text-lg font-semibold">$9.99 / month</p>
            <ul className="space-y-2 text-left">
              <li>✔️ All free features</li>
              <li>✔️ Unlimited code size</li>
              <li>✔️ Priority customer support</li>
              <li>✔️ Advanced code optimization</li>
            </ul>
          </div>

          <div className="pricing-card bg-indigo-800 text-white rounded-lg shadow-md p-8 text-center w-full md:w-1/3 transform transition-transform duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Enterprise Plan</h2>
            <p className="mb-4 text-lg font-semibold">Contact us</p>
            <ul className="space-y-2 text-left">
              <li>✔️ All Pro features</li>
              <li>✔️ Custom integrations</li>
              <li>✔️ Dedicated account manager</li>
              <li>✔️ SLA with 99.9% uptime</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add custom styles and animations */}
      <style>{`
        .pricing-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        .pricing-card:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
};

export default Pricing;
