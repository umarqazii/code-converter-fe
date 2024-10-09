import React from 'react';
import 'primeicons/primeicons.css';

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='bg-transparent m-1 rounded-lg border-2 border-slate-700'>
        <ul className='text-white flex items-center lg:gap-8 md:gap-6 p-2 sm:gap-2'>
          {/* Left icon */}
          <li className='flex items-center justify-center'>
            <i className="pi pi-compass text-xl bg-indigo-500 p-2 rounded-full"></i>
          </li>
          <li className='text-slate-700'>|</li>
          <li className='cursor-pointer'>Feature</li>
          <li className='cursor-pointer'>Pricing</li>
          <li className='cursor-pointer'>Insights</li>
          <li className='cursor-pointer'>Integrations</li>
          <li className='text-slate-700'>|</li>
          {/* Get Started button */}
          <li className=''>
            <button className='bg-gradient-to-r from-blue-800 to-purple-800 px-4 py-4 rounded-lg shadow-lg flex items-center hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800 transition-all duration-400'>
              Get Started &nbsp; | <i className="pi pi-angle-right ml-2"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
